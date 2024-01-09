import {
  destroyCookie as nookiesDestroyCookie,
  parseCookies,
  setCookie,
} from 'nookies'

export function getCookie(name: string): string | undefined {
  const cookies = parseCookies()
  return cookies[name]
}

export function setCookieValue(name: string, value: string, options?: any) {
  setCookie(null, name, value, options)
}

export function destroyCookie(name: string, options?: any) {
  nookiesDestroyCookie({}, name, options)
}
