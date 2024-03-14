"use client";

import { ActiveAdministratorProvider } from "@/app/contexts/active-administrator";
import { AuthProvider } from "@/app/contexts/auth";
import { ChannelProvider } from "@/app/contexts/channel";
import { client } from "@/lib/client";
import { ApolloProvider } from "@apollo/client";
import { SidebarProvider } from "@gseller-monorepo/sidebar";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AuthProvider>
          <ActiveAdministratorProvider>
            <SidebarProvider>
              <ChannelProvider>{children}</ChannelProvider>
            </SidebarProvider>
          </ActiveAdministratorProvider>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Providers;
