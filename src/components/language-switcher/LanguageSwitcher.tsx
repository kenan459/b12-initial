import { useContext } from 'react'
import { PageContext } from '@config/i18nContext'
import { useTranslation } from 'react-i18next'
import { locales, getLanguagePath } from '@config/i18n'
import { useLocation } from '@reach/router'
import { Link, navigate } from 'gatsby'

import ChevronIcon from '@images/icon-arrow-down.inline.svg'

import {
  LanguageDropupBox,
  LanguageDropupBoxToggle,
  LanguageDropupBoxMenu,
} from './LanguageSwitcher.styles'

const LanguageSwitcher = () => {
  const { translated } = useContext(PageContext)
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage
  const location = useLocation()
  const activeLocales = Object.keys(locales).filter((locale) => locales[locale].active)

  const handleLanguageChange = (locale: string, path: string) => {
    i18n.changeLanguage(locale)
    navigate(path)
  }

  if (!translated || !currentLanguage) {
    return null
  }

  return (
    <LanguageDropupBox>
      <LanguageDropupBoxToggle>
        {t('Language', { ns: 'common' })}: {locales[currentLanguage].label} <ChevronIcon />
      </LanguageDropupBoxToggle>
      <LanguageDropupBoxMenu>
        {activeLocales.map((locale) => {
          const path = getLanguagePath(locale, location.pathname)

          return (
            <Link
              key={locale}
              to={path}
              onClick={() => handleLanguageChange(locale, path)}
              className={locale === currentLanguage ? 'active' : ''}
            >
              {locales[locale].label}
            </Link>
          )
        })}
      </LanguageDropupBoxMenu>
    </LanguageDropupBox>
  )
}

export default LanguageSwitcher
