import {
  destroyCookie as nookiesDestroyCookie,
  parseCookies,
  setCookie
} from 'nookies'

import { CookieSerializeOptions } from 'cookie'

export function getCookie(name: string): string | undefined {
  const cookies = parseCookies()
  return cookies[name]
}

export function setCookieValue(
  name: string,
  value: string,
  options?: CookieSerializeOptions
) {
  setCookie(null, name, value, options)
}

export function destroyCookie(name: string, options?: CookieSerializeOptions) {
  nookiesDestroyCookie({}, name, options)
}
