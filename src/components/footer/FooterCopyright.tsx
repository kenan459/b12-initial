import { useContext } from 'react'
import { PageContext } from '@config/i18nContext'
import { useTranslation } from 'react-i18next'

import SocialStrip from '@components/social-strip/SocialStrip'
import LanguageSwitcher from '@components/language-switcher/LanguageSwitcher'

import navigationData from '@data/navigation.yaml'

// Types
import { LegalLinkType } from './types'

// Styles
import {
  Wrapper,
  Logo,
  SocialLinksWrapper,
  Copy,
  CopyText,
  Legal,
  LegalLink,
} from './FooterCopyright.styles'

const FooterCopyright = () => {
  const { pageLanguage, translated } = useContext(PageContext)
  const { t } = useTranslation(['navigation'], { lng: translated ? pageLanguage : 'en' })
  const { legal } = navigationData
  const year = new Date().getFullYear()

  return (
    <Wrapper>
      <Logo />
      <SocialLinksWrapper>
        <SocialStrip />
      </SocialLinksWrapper>
      <Copy>
        <CopyText>© {year} B12. All rights reserved.</CopyText>
        <Legal>
          {legal.map((item: LegalLinkType, index: number) => (
            <LegalLink
              href={item.slug}
              target="_blank"
              aria-label={item['aria-label']}
              key={`${item.label}-${index}`}
            >
              {t(item.label)}
            </LegalLink>
          ))}
          <LanguageSwitcher />
        </Legal>
      </Copy>
    </Wrapper>
  )
}

export default FooterCopyright
