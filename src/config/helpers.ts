import { type TLocales, locales, fallbackLanguage } from './i18n'

export const getActiveLocales = () => {
  return Object.keys(locales).filter(
    (locale) => locales[locale].active && locale !== fallbackLanguage
  )
}

export const getLocaleResources = (locale: string, nameSpaces: string[]) => {
  let res = {}

  nameSpaces.forEach((ns) => {
    res[ns] = require(`../locales/${locale}/${ns}.json`)
  })

  return res
}

export const getAllResources = (locales: TLocales, nameSpaces: string[]) => {
  let res = {}

  nameSpaces.forEach((ns) => {
    Object.keys(locales)
      .filter((locale) => locales[locale].active)
      .forEach((locale) => {
        if (locales[locale].active) {
          if (!res[locale]) {
            res[locale] = {}
          }

          res[locale][ns] = require(`../locales/${locale}/${ns}.json`)
        }
      })
  })

  return res
}

export const pathHasLocale = (pathname: string) => {
  const languages = Object.keys(locales)
  const regex = new RegExp(`^/(${languages.join('|')})/`)
  const match = pathname.match(regex)

  return match
}

export const getLanguagePath = (preferredLanguage: string, pathname: string) => {
  const languages = Object.keys(locales)
  const regex = new RegExp(`^/(${languages.join('|')})/`)
  const match = pathname.match(regex)

  let path = pathname.replace(
    regex,
    preferredLanguage === fallbackLanguage ? `/` : `/${preferredLanguage}/`
  )
  // if there is no language code in url, we assume that it's the fallback language
  if (!match) {
    path = `${preferredLanguage === fallbackLanguage ? `` : `/${preferredLanguage}`}${path}`
  }

  return path
}
