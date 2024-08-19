import { getAllResources } from './helpers'
export { getLanguagePath, getActiveLocales, pathHasLocale } from './helpers'

export const fallbackLanguage = 'en'
const defaultNamespace = 'common'

type TLocale = {
  id: string
  label: string
  active: boolean
}

export type TLocales = {
  [key: string]: TLocale
}

export const locales: TLocales = {
  de: { id: 'de', label: 'Deutsch', active: true },
  en: { id: 'en', label: 'English', active: true },
  es: { id: 'es', label: 'Español', active: true },
  fr: { id: 'fr', label: 'Français', active: true },
  hi: { id: 'hi', label: 'हिन्दी', active: true },
  id: { id: 'id', label: 'Indonesia', active: true },
  ky: { id: 'ky', label: 'Кыргызча', active: false },
  pt: { id: 'pt', label: 'Português', active: true },
  ru: { id: 'ru', label: 'Русский', active: true },
  tl: { id: 'tl', label: 'Tagalog', active: true },
  ur: { id: 'ur', label: 'اردو', active: false },
  th: { id: 'th', label: 'ภาษาไทย', active: true },
}

const nameSpaces = [
  defaultNamespace,
  'navigation',
  'success-stories-slider',
  'index',
  'ai-website-builder',
  'website-editor',
  'ai-assist',
]

const i18nextOptions = {
  defaultNS: defaultNamespace,
  ns: nameSpaces,
  fallbackLng: fallbackLanguage,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
}

export const getI18nConfig = () => {
  return {
    ...i18nextOptions,
    resources: getAllResources(locales, nameSpaces),
  }
}
