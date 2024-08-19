import React from 'react'
import { useTranslation } from 'react-i18next'
import { getActiveLocales } from '@config/i18n'

// Components
import LayoutMain from '@components/layouts/Main'
import SEO from '@components/SEO'
import IndexControl from '@components/pages/index/Default'
import IndexVariant from '@components/pages/index/Animated'

export const IndexPageLayout = ({ lang }) => {
  const isInExperiment = false

  return (
    <>
      {isInExperiment ? (
        <LayoutMain>
          <IndexVariant lang={lang} />
        </LayoutMain>
      ) : (
        <LayoutMain>
          <IndexControl lang={lang} />
        </LayoutMain>
      )}
    </>
  )
}

export const IndexPageHead = ({ lang }) => {
  const { t } = useTranslation(['index'], { lng: lang })

  return (
    <SEO
      pageTitle={t('Website Builder for Professional Services')}
      pageDescription={t(
        'B12’s website builder is the all-in-one platform for professional services. Attract leads, win business, &amp; serve clients online. Build your free site today.'
      )}
      prefixTitle
      prefixMetaTitle
      lang={lang}
      hrefLang={getActiveLocales()}
      pagePath="/"
    />
  )
}
