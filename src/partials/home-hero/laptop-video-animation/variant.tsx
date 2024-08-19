import { useState, useRef, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion, useAnimationControls, MotionConfig } from 'framer-motion'

// Images
import signupWebsiteReavealVideoSrc from './assets/signup-website-reveal-short.mp4'

import {
  Wrapper,
  LaptopFrame,
  Video,
  IconAiCircle,
  IconAiCirclePath,
  IconAIWrapper,
  StyledIconAIBox,
  StyledIconLayoutBox,
  IconLayoutWrapper,
  IconLayoutCircle,
  IconLayoutCirclePath,
} from './styles'

// Animation settings
import {
  sparkleBigVariants,
  sparkleSmallVariants,
  iconAiPathVariants,
  iconAiVariants,
  iconLayoutVariants,
  iconLayoutPathVariants,
  layoutTopShapeVariants,
  layoutVerticalShapeVariants,
  layoutBottomShapeVariants,
  layoutCenterShapeVariants,
} from './helpers'

const IconSparklesAnimated = ({ iconAiAnimatedControls }) => {
  return (
    <MotionConfig>
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M22.25 13.5C22.0014 13.5 21.7629 13.4012 21.5871 13.2254C21.4112 13.0496 21.3125 12.8111 21.3125 12.5625C21.3125 12.0652 21.115 11.5883 20.7634 11.2367C20.4118 10.8851 19.9347 10.6875 19.4375 10.6875C19.1889 10.6875 18.9504 10.5887 18.7746 10.4129C18.5987 10.2371 18.5 9.99864 18.5 9.75C18.5 9.50136 18.5987 9.2629 18.7746 9.08709C18.9504 8.91128 19.1889 8.8125 19.4375 8.8125C19.9347 8.8125 20.4118 8.61495 20.7634 8.26333C21.115 7.9117 21.3125 7.43477 21.3125 6.9375C21.3125 6.68886 21.4112 6.4504 21.5871 6.27459C21.7629 6.09877 22.0014 6 22.25 6C22.4986 6 22.7371 6.09877 22.9129 6.27459C23.0888 6.4504 23.1875 6.68886 23.1875 6.9375C23.1875 7.43477 23.385 7.9117 23.7366 8.26333C24.0882 8.61495 24.5653 8.8125 25.0625 8.8125C25.3111 8.8125 25.5496 8.91128 25.7254 9.08709C25.9013 9.2629 26 9.50136 26 9.75C26 9.99864 25.9013 10.2371 25.7254 10.4129C25.5496 10.5887 25.3111 10.6875 25.0625 10.6875C24.5653 10.6875 24.0882 10.8851 23.7366 11.2367C23.385 11.5883 23.1875 12.0652 23.1875 12.5625C23.1875 12.8111 23.0888 13.0496 22.9129 13.2254C22.7371 13.4012 22.4986 13.5 22.25 13.5Z"
          fill="#5048C7"
          variants={sparkleSmallVariants}
          animate={iconAiAnimatedControls}
          initial={'show'}
        />
        <motion.path
          d="M13.5 26C13.1685 26 12.8505 25.8682 12.6161 25.6339C12.3817 25.3995 12.25 25.0815 12.25 24.75C12.25 23.4239 11.7232 22.1521 10.7855 21.2145C9.84785 20.2768 8.57609 19.75 7.25 19.75C6.91848 19.75 6.60054 19.6182 6.36612 19.3839C6.1317 19.1495 6 18.8315 6 18.5C6 18.1685 6.1317 17.8505 6.36612 17.6161C6.60054 17.3817 6.91848 17.25 7.25 17.25C8.57609 17.25 9.84785 16.7232 10.7855 15.7855C11.7232 14.8478 12.25 13.5761 12.25 12.25C12.25 11.9185 12.3817 11.6005 12.6161 11.3661C12.8505 11.1317 13.1685 11 13.5 11C13.8315 11 14.1495 11.1317 14.3839 11.3661C14.6183 11.6005 14.75 11.9185 14.75 12.25C14.75 13.5761 15.2768 14.8478 16.2145 15.7855C17.1521 16.7232 18.4239 17.25 19.75 17.25C20.0815 17.25 20.3995 17.3817 20.6339 17.6161C20.8682 17.8505 21 18.1685 21 18.5C21 18.8315 20.8682 19.1495 20.6339 19.3839C20.3995 19.6182 20.0815 19.75 19.75 19.75C18.4239 19.75 17.1521 20.2768 16.2145 21.2145C15.2768 22.1521 14.75 23.4239 14.75 24.75C14.75 25.0815 14.6183 25.3995 14.3839 25.6339C14.1495 25.8682 13.8315 26 13.5 26Z"
          fill="#5048C7"
          variants={sparkleBigVariants}
          animate={iconAiAnimatedControls}
          initial={'show'}
        />
      </svg>
    </MotionConfig>
  )
}

const IconLayoutAnimated = ({ iconLayoutAnimatedControls }) => {
  return (
    <MotionConfig>
      <svg
        width="30"
        height="27"
        viewBox="0 0 30 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          fill="#5048C7"
          width="20"
          height="7"
          x="10"
          y="10"
          rx="3"
          variants={layoutCenterShapeVariants}
          animate={iconLayoutAnimatedControls}
          initial={'show'}
        />
        <motion.rect
          fill="#5048C7"
          width="20"
          height="7"
          x="10"
          y="20"
          rx="3"
          variants={layoutBottomShapeVariants}
          animate={iconLayoutAnimatedControls}
          initial={'show'}
        />
        <motion.rect
          fill="#5048C7"
          width="30"
          height="7"
          x="0"
          y="0"
          rx="3"
          variants={layoutTopShapeVariants}
          animate={iconLayoutAnimatedControls}
          initial={'show'}
        />
        <motion.rect
          fill="#5048C7"
          width="7"
          height="17"
          x="0"
          y="10"
          rx="3"
          variants={layoutVerticalShapeVariants}
          animate={iconLayoutAnimatedControls}
          initial={'show'}
        />
      </svg>
    </MotionConfig>
  )
}

const LaptopVideoAnimationVariant = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const laptopFrameControls = useAnimationControls()
  const iconAiControls = useAnimationControls()
  const iconAiAnimatedControls = useAnimationControls()
  const iconLayoutAnimatedControls = useAnimationControls()
  const iconAiPathControls = useAnimationControls()
  const iconLayoutControls = useAnimationControls()
  const iconLayoutPathControls = useAnimationControls()

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
  }

  const animateStuff = () => {
    setTimeout(() => {
      iconAiControls.start('show')
      iconLayoutControls.start('show')
      iconAiAnimatedControls.start('show')
      iconLayoutAnimatedControls.start('show')
    }, 300)

    setTimeout(() => {
      iconAiPathControls.start('show')
    }, 4800)

    setTimeout(() => {
      iconLayoutPathControls.start('show')
    }, 5300)

    setTimeout(() => {
      iconAiControls.start('bounce')
      iconLayoutControls.start('bounce')
      iconAiPathControls.start('hide').then(() => iconAiPathControls.start('hidden'))
      iconLayoutPathControls.start('hide').then(() => iconLayoutPathControls.start('hidden'))
    }, 8320)

    setTimeout(() => {
      iconAiControls.start('hidden')
      iconLayoutControls.start('hidden')
      iconAiAnimatedControls.start('hidden')
      iconLayoutAnimatedControls.start('hidden')
    }, 13000)
  }

  const handleVideo = (videoRef: HTMLVideoElement) => {
    setTimeout(() => {
      videoRef.pause()
    }, 5220)

    setTimeout(() => {
      videoRef.play()
    }, 8720)

    setTimeout(() => {
      videoRef.pause()
    }, 12500)
    setTimeout(() => {
      videoRef.currentTime = 0
      videoRef.play()
    }, 14000)
  }

  useEffect(() => {
    const videoElement = videoRef?.current
    if (videoElement && !isVideoLoaded) {
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        videoElement.load()
      }

      videoElement.addEventListener('loadeddata', handleVideoLoaded)

      if (videoElement.readyState > 3) {
        handleVideoLoaded()
      }
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleVideoLoaded)
      }
    }
  }, [videoRef, isVideoLoaded, handleVideoLoaded])

  useEffect(() => {
    const videoElement = videoRef?.current
    let intervalId: NodeJS.Timeout

    if (videoElement && isVideoLoaded) {
      laptopFrameControls.start({ opacity: 1, y: 0, transition: { delay: 0.2 } })
      videoElement.play()
      animateStuff()
      handleVideo(videoElement)

      intervalId = setInterval(() => {
        animateStuff()
        handleVideo(videoElement)
      }, 14000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [videoRef, isVideoLoaded])

  return (
    <Wrapper>
      <LaptopFrame initial={{ opacity: 0, y: 20 }} animate={laptopFrameControls}>
        {/* <LaptopFrame> */}
        <Video loop muted playsInline src={signupWebsiteReavealVideoSrc} ref={videoRef} />
        <StaticImage
          src="./assets/laptop-frame.png"
          alt="B12 Website"
          layout="constrained"
          width={1000}
          placeholder="none"
          loading="eager"
          quality={80}
          className="laptop-frame-desktop"
        />
        <StaticImage
          src="./assets/laptop-frame.png"
          alt="B12 Website"
          layout="constrained"
          width={400}
          placeholder="none"
          loading="eager"
          quality={80}
          className="laptop-frame-mobile"
        />
        <StyledIconAIBox initial="hidden" animate={iconAiControls} variants={iconAiVariants}>
          <IconAIWrapper>
            <IconSparklesAnimated iconAiAnimatedControls={iconAiAnimatedControls} />
          </IconAIWrapper>
          <IconAiCircle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
            <IconAiCirclePath
              initial="hidden"
              animate={iconAiPathControls}
              variants={iconAiPathVariants}
              d="M103 52c0 28.166-22.834 51-51 51S1 80.166 1 52 23.834 1 52 1s51 22.834 51 51Z"
            />
          </IconAiCircle>
        </StyledIconAIBox>
        <StyledIconLayoutBox
          initial="hidden"
          animate={iconLayoutControls}
          variants={iconLayoutVariants}
        >
          <IconLayoutWrapper>
            <IconLayoutAnimated iconLayoutAnimatedControls={iconLayoutAnimatedControls} />
          </IconLayoutWrapper>
          <IconLayoutCircle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
            <IconLayoutCirclePath
              initial="hidden"
              animate={iconLayoutPathControls}
              variants={iconLayoutPathVariants}
              d="M66 33C66 50.82 50.82 66 33 66S1 50.82 1 33 16.18 1 33 1 66 16.18 66 33Z"
            />
          </IconLayoutCircle>
        </StyledIconLayoutBox>
      </LaptopFrame>
    </Wrapper>
  )
}

export default LaptopVideoAnimationVariant
