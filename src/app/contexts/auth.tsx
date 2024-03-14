"use client";

import { ReactNode, createContext } from "react";

import { destroyCookie, setCookieValue } from "@/lib/storage";
import { SignInMutation } from "@/utils/generated/graphql";
import { getErrorMessage } from "@/utils/get-error-message";
import { gql } from "graphql-request";

interface AuthProviderProps {
  children: ReactNode;
}

const LOGIN_REQUEST = gql`
  mutation Login($username: String!, $password: String!, $rememberMe: Boolean) {
    login(username: $username, password: $password, rememberMe: $rememberMe) {
      ... on CurrentUser {
        __typename
        id
        identifier
        channels {
          token
          code
        }
      }

      ... on InvalidCredentialsError {
        __typename
        errorCode
        message
      }

      ... on NativeAuthStrategyError {
        __typename
        errorCode
        message
      }

      ... on ErrorResult {
        __typename
        errorCode
        message
      }
    }
  }
`;

type AuthContextData = {
  setAuthToken: (token: string) => void;
  setChannelToken: (token: string) => void;
  signIn: (
    username: string,
    password: string
  ) => Promise<{
    status: boolean;
    message: string;
  }>;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const setAuthToken = (token: string | null) => {
    destroyCookie("vendure.token", {
      path: "/",
    });

    if (!token) return;

    setCookieValue("vendure.token", token, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
  };

  const setChannelToken = (token: string | null) => {
    destroyCookie("channel.token", {
      path: "/",
    });
    if (!token) return;

    setCookieValue("channel.token", token, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
  };

  const signIn = async (username: string, password: string) => {
    const endpoint = process.env.NEXT_PUBLIC_URL + "/admin-api";
    try {
      const response = await fetch(endpoint as string, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: LOGIN_REQUEST,
          variables: {
            username,
            password,
          },
        }),
      });

      const { data } = await response.json();
      const { login } = data as SignInMutation;

      if (login.__typename === "CurrentUser") {
        const vendureAuthToken = response.headers.get("Vendure-Auth-Token");

        setAuthToken(vendureAuthToken);

        const username = login?.identifier.split("@")[0].split(".")[0];

        const firstLetterUppercase = username.charAt(0).toUpperCase();
        const subStringName = username.slice(1);
        const name = firstLetterUppercase + subStringName;
        setChannelToken(data.login.channels[0].token);

        return {
          status: true,
          message: `Olá ${name}, seja bem-vindo(a)`,
        };
      }

      return {
        status: false,
        message:
          getErrorMessage(login)?.message || "Erro ao autenticar usuário",
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message || "Erro ao autenticar usuário",
      };
    }
  };

  const logout = () => {
    destroyCookie("vendure.token", {
      path: "/",
    });
    destroyCookie("channel.token", {
      path: "/",
    });
  };

  return (
    <AuthContext.Provider
      value={{ setAuthToken, setChannelToken, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
