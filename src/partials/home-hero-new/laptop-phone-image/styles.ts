import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { mq } from '@styles/theme'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 38px;
  padding-bottom: 40px;

  .hero-image-desktop {
    display: none !important;
  }

  ${mq['sm']} {
    .hero-image-desktop {
      display: none !important;
    }

  }

  ${mq['md']} {
    .hero-image-mobile {
      display: none !important;
      opacity: 50%;
    }

    .hero-image-desktop {
      display: block !important;
    }

    width: 80%;
    margin: 0px auto;
    padding-bottom: 0;
  }
`

export const ImageLaptopWrapper = styled(motion.div)`
  width: 100%;
  text-align: center;

  ${mq['md']} {
    width: 100%;
    margin: auto;
  }
`

export const ImagePhoneWrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 43%;
  left: 15%;
  text-align: center;



  ${mq['md']} {
    width: 50%;
    bottom: -69px;
    left: 20%;
  }
`
