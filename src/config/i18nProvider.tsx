import { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getI18nConfig, getLanguagePath, pathHasLocale, fallbackLanguage } from '@config/i18n'
import { PageContext } from '@config/i18nContext'

// Init i18n and pass context
i18n.use(LanguageDetector).use(initReactI18next).init(getI18nConfig())

const I18nProvider = ({ element, props }) => {
  const { language: pageLanguage, ns, translated } = props.pageContext
  const [redirected, setRedirected] = useState(false)

  useEffect(() => {
    const preferredLanguage = i18n.language.split('-')[0]
    const hasLocaleInPath = pathHasLocale(props.location.pathname)

    if (!translated) {
      i18n.changeLanguage(fallbackLanguage)
      return
    }

    if (hasLocaleInPath) {
      i18n.changeLanguage(pageLanguage)
    }

    const shouldRedirect =
      !hasLocaleInPath && pageLanguage !== preferredLanguage && translated && !redirected

    if (shouldRedirect) {
      const path = getLanguagePath(preferredLanguage, props.location.pathname)

      setRedirected(true)
      navigate(path)
    }
  }, [translated, redirected])

  return (
    <I18nextProvider i18n={i18n} defaultNS={ns ?? 'common'}>
      <PageContext.Provider value={{ pageLanguage, ns, translated, redirected, setRedirected }}>
        {element}
      </PageContext.Provider>
    </I18nextProvider>
  )
}

export default I18nProvider
