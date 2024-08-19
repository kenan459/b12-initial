import React from 'react'
import { useAnimation } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'

// Components
import { Button } from '@components/button/Button'

const buttonVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale: [1, 1.1, 1],
    transition: { type: 'spring', delay: 1.2, duration: 1.2 },
  },
}

const imageAnimationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 1 } },
}

const imageAnimationSettings = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true },
  variants: imageAnimationVariants,
  style: { borderRadius: '14px' },
}

// Styles
import {
  SectionStyled,
  ImagesWrapper,
  ImageRowWrapper,
  ButtonWrapper,
  ImageWrapper,
} from './AnimatedCta.styles'

const AnimatedCTA = ({}) => {
  const imgAnimation = useAnimation()

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e

    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2

    const offsetFactor = 35
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
      transition: {
        type: 'spring',
      },
    })
  }

  return (
    <SectionStyled onMouseMove={(e) => handleMouseMove(e)}>
      <ButtonWrapper
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={buttonVariants}
      >
        <Button
          size="large"
          as="anchor"
          to="https://b12.io/signup/"
          label="Start for free"
          variant="primary"
        />
      </ButtonWrapper>

      <ImagesWrapper>
        <ImageRowWrapper>
          <ImageWrapper {...imageAnimationSettings} animate={imgAnimation}>
            <StaticImage
              src="./images/Monitor-0.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
          <ImageWrapper {...imageAnimationSettings} animate={imgAnimation}>
            <StaticImage
              src="./images/Monitor-8.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
          <ImageWrapper {...imageAnimationSettings} animate={imgAnimation}>
            <StaticImage
              src="./images/Monitor-4.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
        </ImageRowWrapper>
        <ImageRowWrapper>
          <ImageWrapper
            {...imageAnimationSettings}
            transition={{ delay: 0, duration: 1 }}
            animate={imgAnimation}
          >
            <StaticImage
              src="./images/Monitor-5.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
          <ImageWrapper {...imageAnimationSettings} animate={imgAnimation}>
            <StaticImage
              src="./images/Monitor-10.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
          <ImageWrapper {...imageAnimationSettings} animate={imgAnimation}>
            <StaticImage
              src="./images/Monitor-9.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
        </ImageRowWrapper>
        <ImageRowWrapper>
          <ImageWrapper
            {...imageAnimationSettings}
            transition={{ delay: 0.5, duration: 1 }}
            animate={imgAnimation}
          >
            <StaticImage
              src="./images/Monitor-8.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
          <ImageWrapper
            {...imageAnimationSettings}
            transition={{ delay: 0.5, duration: 1 }}
            animate={imgAnimation}
          >
            <StaticImage
              src="./images/Monitor-3.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
          <ImageWrapper
            {...imageAnimationSettings}
            transition={{ delay: 0.5, duration: 1 }}
            animate={imgAnimation}
          >
            <StaticImage
              src="./images/Monitor-1.png"
              alt=""
              placeholder="blurred"
              width={700}
              quality={100}
              style={{ borderRadius: '20px' }}
            />
          </ImageWrapper>
        </ImageRowWrapper>
      </ImagesWrapper>
    </SectionStyled>
  )
}

export default AnimatedCTA
