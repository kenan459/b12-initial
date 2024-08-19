import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { theme, mq } from '../../assets/theme'

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid ${theme.colors.surface.border};
  border-left: 1px solid ${theme.colors.surface.border};

  ${mq['md']} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const ImageWrapper = styled.a`
  display: grid;
  place-content: center;
  border-right: 1px solid ${theme.colors.surface.border};
  border-bottom: 1px solid ${theme.colors.surface.border};
  padding: 30px;
  min-height: 120px;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: none;
    outline: 0;
  }
`

const ReviewsImages = () => (
  <Wrapper>
    <ImageWrapper target="_blank" href="https://ca.trustpilot.com/review/b12.io">
      <StaticImage
        src="./images/trustpilot-logo@3x.png"
        alt="Trustpilot"
        layout="constrained"
        width={160}
      />
    </ImageWrapper>
    <ImageWrapper target="_blank" href="https://www.producthunt.com/products/b12">
      <StaticImage
        src="./images/product-hunt-logo@3x.png"
        alt="Product Hunt"
        layout="constrained"
        width={160}
      />
    </ImageWrapper>
    <ImageWrapper target="_blank" href="https://www.getapp.com/website-ecommerce-software/a/b12/">
      <StaticImage
        src="./images/getapp-logo@3x.png"
        alt="Get App"
        layout="constrained"
        width={160}
      />
    </ImageWrapper>
    <ImageWrapper as="div">
      <StaticImage
        src="./images/google-logo@3x.png"
        alt="Google"
        layout="constrained"
        width={160}
      />
    </ImageWrapper>
    <ImageWrapper
      target="_blank"
      href="https://www.bark.com/en/us/company/b12--barks-only-ai-based-website-design-company-offering-smart-websites-seo-copywriting-email-marketing-and-more/P82D2/"
    >
      <StaticImage src="./images/bark-logo@3x.png" alt="Bark" layout="constrained" width={160} />
    </ImageWrapper>
    <ImageWrapper target="_blank" href="https://www.g2.com/products/b12/reviews">
      <StaticImage
        src="./images/g2-logo@3x.png"
        alt="G2"
        layout="constrained"
        width={60}
        height={60}
      />
    </ImageWrapper>
  </Wrapper>
)

export default ReviewsImages
