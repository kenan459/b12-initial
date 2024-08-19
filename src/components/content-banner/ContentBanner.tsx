import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useContentBannerQuery, TBanner } from '@hooks/useContentBannerQuery'

export const BannerWrapper = styled.a<{ orientation: 'vertical' | 'horizontal' }>`
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 1px solid ${theme.colors.surface.borderLight};
  max-width: ${(props) => (props.orientation === 'vertical' ? '254px' : '100%')};

  ${mq['sm']} {
    ${(props) =>
      props.orientation === 'vertical' &&
      'float: right; margin: 10px 0 10px 20px; max-width: 254px'}
  }
`

const ContentBanner = (data: TBanner) => {
  const banner = useContentBannerQuery(data.id)

  if (!banner) return

  return (
    <BannerWrapper
      orientation={banner.orientation}
      href={data.url ?? banner.url ?? 'https://b12.io/signup/'}
      aria-label={banner.title}
    >
      {banner.image && <GatsbyImage alt={banner.title} image={banner.image} />}
    </BannerWrapper>
  )
}

export default ContentBanner
