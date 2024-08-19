/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { mq } from '@styles/theme'
import { Link } from 'gatsby'
import { useToggle } from '@hooks/useToggle'
import { useTranslation } from 'react-i18next'

import ArrowDown from '@images/icon-arrow-down.inline.svg'

import navigationData from '@data/navigation.yaml'

// Types
import { ColumnType, LinkType } from './types'

// Styles
import { ColumnWrapper, Title, Links, Wrapper } from './FooterNavigation.styles'

// TODO(glebovsky): rewrite this without `css` prop
const Column = ({ label, items }: ColumnType) => {
  const [isVisible, setIsVisible] = useToggle()
  const { t } = useTranslation()

  return (
    <ColumnWrapper>
      <Title onClick={setIsVisible}>
        {t(label, { ns: 'navigation' })}{' '}
        <ArrowDown
          css={css`
            transform: translateY(-50%) rotate(${isVisible ? '180deg' : '0'});
          `}
        />
      </Title>
      <Links
        css={css`
          display: flex;
          max-height: ${isVisible ? '9999px' : '0'};
          margin-bottom: ${isVisible ? '20px' : 'auto'};
          overflow: hidden;
          transition: all 0.15s ease-in-out;

          ${mq['md']} {
            display: flex;
            max-height: 9999px;
            margin-bottom: auto;
          }
        `}
      >
        {items.map((link: LinkType) => {
          const { isExternal } = link

          // Links to external resources require to use `a` tag
          if (isExternal) {
            return (
              <a href={link.slug} key={link.slug}>
                {t(link.label, { ns: 'navigation' })}
              </a>
            )
          }

          return (
            <Link to={link.slug} key={link.slug}>
              {t(link.label, { ns: 'navigation' })}
            </Link>
          )
        })}
      </Links>
    </ColumnWrapper>
  )
}

const FooterNavigation = () => {
  const { footer } = navigationData
  const { t } = useTranslation()

  return (
    <Wrapper>
      {footer.map((col: ColumnType) => (
        <Column label={t(col.label, { ns: 'navigation' })} items={col.items} key={col.label} />
      ))}
    </Wrapper>
  )
}

export default FooterNavigation
