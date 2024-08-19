import { StaticImage } from 'gatsby-plugin-image'

import { Wrapper, ImageLaptopWrapper, ImagePhoneWrapper } from './styles'

import { HeroImageProps } from '@partials/home-hero/HomeHero'

const motionProps = {
  initial: { opacity: 0, y: 20 },
  transition: { delay: 1 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const imgProps: HeroImageProps = {
  loading: 'eager',
  quality: 100,
  placeholder: 'none',
}

const LaptopPhoneImage = () => {
  return (
    <Wrapper>
      <ImageLaptopWrapper {...motionProps}>
        <StaticImage
          className="hero-image-desktop"
          src="./images/macbook.png"
          alt="Sell your services online"
          width={960}
          {...imgProps}
        />
        <StaticImage
          className="hero-image-mobile"
          src="./images/macbook.png"
          alt="Sell your services online"
          width={420}
          {...imgProps}
        />
      </ImageLaptopWrapper>

      <ImagePhoneWrapper {...motionProps} transition={{ delay: 1.2 }}>
        <StaticImage
          className="hero-image-desktop"
          src="./images/iphone.png"
          alt="Websites that work as hard as you do."
          width={480}
          {...imgProps}
        />
        <StaticImage
          className="hero-image-mobile"
          src="./images/iphone.png"
          alt="Websites that work as hard as you do."
          width={480}
          {...imgProps}
        />
      </ImagePhoneWrapper>
    </Wrapper>
  )
}

export default LaptopPhoneImage
