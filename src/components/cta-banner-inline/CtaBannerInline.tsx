import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

type Props = {
  className?: string
  linkUrl: string
  ariaLabel: string
  imageId: string
}

const Wrapper = styled.a`
  display: block;
  margin: 20px auto;
`
const images = {
  'online-firm': (
    <StaticImage
      src="../../images/banners/online-firm-banner.png"
      alt="Bring my firm online with B12 banner"
      placeholder="blurred"
    />
  ),
  'pricing-packages': (
    <StaticImage
      src="../../images/banners/packages-banner.png"
      alt="See B12 packages to bring your firm online banner"
      placeholder="blurred"
    />
  ),
  'free-draft': (
    <StaticImage
      src="../../images/banners/free-draft-banner.png"
      alt="See a free draft of your new website in seconds banner"
      placeholder="blurred"
    />
  ),
  'get-started': (
    <StaticImage
      src="../../images/banners/get-started-today-banner.png"
      alt="Get started with B12 today for free banner"
      placeholder="blurred"
    />
  ),
}

const CtaBannerInline = ({ className = '', linkUrl = '', ariaLabel = '', imageId = '' }: Props) => (
  <Wrapper href={linkUrl} aria-label={ariaLabel} className={className}>
    {images[imageId]}
  </Wrapper>
)

export default CtaBannerInline
