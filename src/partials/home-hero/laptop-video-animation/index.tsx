import { useState, useRef, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useAnimationControls } from 'framer-motion'

import {
  Wrapper,
  LaptopFrame,
  Video,
  IconAiBox,
  IconAiCircle,
  IconAiCirclePath,
  IconLayoutBox,
  IconLayoutCircle,
  IconLayoutCirclePath,
} from './styles'

import signupWebsiteReavealVideoSrc from './assets/signup-website-reveal-short.mp4'
import IconAiSvg from './assets/icon-ai.inline.svg'
import IconLayoutSvg from './assets/icon-layout.inline.svg'

const iconAiVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.65 } },
  bounce: { y: [0, 10, 0], transition: { type: 'spring', bounce: 0.65 } },
}

const iconAiPathVariants = {
  hidden: { pathLength: 0, opacity: 1 },
  show: {
    pathLength: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      ease: 'linear',
      rotate: {
        repeat: 3,
        duration: 1.5,
      },
      pathLength: {
        duration: 3.2,
      },
    },
  },
  hide: { opacity: 0, rotate: 0, pathLength: 1, transition: { duration: 0.01 } },
}

const iconLayoutVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: 0.15, type: 'spring', bounce: 0.65 } },
  bounce: { y: [0, 10, 0], transition: { delay: 0.15, type: 'spring', bounce: 0.65 } },
}

const iconLayoutPathVariants = {
  hidden: { pathLength: 0, opacity: 1 },
  show: {
    pathLength: 1,
    opacity: 1,
    rotate: 360,
    transition: {
      ease: 'linear',
      rotate: {
        repeat: 3,
        duration: 1.5,
      },
      pathLength: {
        duration: 3,
      },
    },
  },
  hide: { opacity: 0, rotate: 0, pathLength: 1, transition: { duration: 0.01 } },
}

const LaptopVideoAnimation = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const laptopFrameControls = useAnimationControls()
  const iconAiControls = useAnimationControls()
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
    }, 11000)
  }

  const handleVideo = (videoRef: HTMLVideoElement) => {
    setTimeout(() => {
      videoRef.pause()
    }, 5220)

    setTimeout(() => {
      videoRef.play()
    }, 8720)
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
      }, 12500)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [videoRef, isVideoLoaded])

  return (
    <Wrapper>
      <LaptopFrame initial={{ opacity: 0, y: 20 }} animate={laptopFrameControls}>
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
        <IconAiBox initial="hidden" animate={iconAiControls} variants={iconAiVariants}>
          <IconAiSvg />
          <IconAiCircle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
            <IconAiCirclePath
              initial="hidden"
              animate={iconAiPathControls}
              variants={iconAiPathVariants}
              d="M103 52c0 28.166-22.834 51-51 51S1 80.166 1 52 23.834 1 52 1s51 22.834 51 51Z"
            />
          </IconAiCircle>
        </IconAiBox>
        <IconLayoutBox initial="hidden" animate={iconLayoutControls} variants={iconLayoutVariants}>
          <IconLayoutSvg />
          <IconLayoutCircle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67">
            <IconLayoutCirclePath
              initial="hidden"
              animate={iconLayoutPathControls}
              variants={iconLayoutPathVariants}
              d="M66 33C66 50.82 50.82 66 33 66S1 50.82 1 33 16.18 1 33 1 66 16.18 66 33Z"
            />
          </IconLayoutCircle>
        </IconLayoutBox>
      </LaptopFrame>
    </Wrapper>
  )
}

export default LaptopVideoAnimation
