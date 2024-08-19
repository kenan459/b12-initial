import { useRef } from 'react'
import { mq } from '@styles/theme'
import styled from '@emotion/styled'
import { motion, useTransform, useScroll } from 'framer-motion'

// Images
import BubbleShape1Animated from './assests/BubbleShape1Animated'
import BubbleShape2Animated from './assests/BubbleShape2Animated'
import BubbleShape3Animated from './assests/BubbleShape3Animated'
import BubbleShape4Animated from './assests/BubbleShape4Animated'
import BubbleShape5Animated from './assests/BubbleShape5Animated'

// Types
type Align = 'left' | 'right'

type Props = {
  type?: 1 | 2 | 3 | 4 | 5
  align?: Align
  image: React.ReactNode
  imageSecondary?: React.ReactNode
  noBorderRadius?: boolean
  children?: React.ReactNode
}

// Styles
const Wrapper = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'align' && prop !== 'noBorderRadius',
})<{ align: Align; noBorderRadius: boolean }>`
  position: relative;

  .gatsby-image-motion {
    position: absolute;
    z-index: 2;
    top: 20%;
    width: 80%;
    bottom: auto;

    ${(props) => (props.align === 'right' ? `left: 10px;` : `right: 10px;`)}

    ${mq['xs']} {
      width: 75%;
    }

    ${mq['md']} {
      ${(props) => (props.align === 'right' ? `left: 40px;` : `right: 40px;`)}
    }

    ${mq['md']} {
      top: 10%;
      width: 80%;
    }

    ${mq['lg']} {
      width: 70%;
    }

    .gatsby-image-wrapper {
      border-radius: ${(props) => (props.noBorderRadius ? '0' : '8px;')};

      ${mq['md']} {
        border-radius: ${(props) => (props.noBorderRadius ? '0' : '16px;')};
      }
    }
  }

  .bubble-image-desktop {
    display: none;
  }

  ${mq['md']} {
    .bubble-image-desktop {
      display: block;
    }

    .bubble-image-mobile {
      display: none !important;
    }
  }
`

const SecondaryImage = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ align: Align }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  top: 45%;
  width: 50%;
  max-width: 230px;

  ${(props) =>
    props.align === 'right'
      ? `right: 0; align-items: flex-end;`
      : `left: 0; align-items: flex-start;`}

  ${mq['sm']} {
    right: 35%;
  }

  ${mq['md']} {
    top: 30%;

    ${(props) =>
      props.align === 'right'
        ? `right: 0; align-items: flex-end;`
        : `left: 0; align-items: flex-start;`}
  }

  ${mq['lg']} {
    top: 45%;
    width: auto;
    ${(props) => (props.align === 'right' ? `right: 40px;` : `left: 40px;`)}
  }

  .gatsby-image-wrapper:last-of-type {
    margin-top: -20px;

    ${mq['md']} {
      margin-top: -30px;
    }
  }
`

const BubbleWrapper = styled.div`
  position: relative;
  max-width: 80%;

  ${mq['md']} {
    max-width: 480px;
  }
`

const Bubble = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ align: Align }>`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${mq['md']} {
    justify-content: ${(props) => (props.align === 'right' ? 'flex-end' : 'flex-start')};
  }

  svg {
    max-width: 100%;
  }
`

const bubbleTypes = {
  1: <BubbleShape1Animated />,
  2: <BubbleShape2Animated />,
  3: <BubbleShape3Animated />,
  4: <BubbleShape4Animated />,
  5: <BubbleShape5Animated />,
}

const BubbleImageAnimated = ({
  type = 1,
  align = 'left',
  image = null,
  imageSecondary = null,
  noBorderRadius = false,
  children,
}: Props) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const moveY = useTransform(scrollYProgress, [0.2, 1], [0, 30])
  const moveY2 = useTransform(scrollYProgress, [0.2, 1], [0, 100])
  const moveY3 = useTransform(scrollYProgress, [0.2, 1], [0, 60])

  return (
    <Wrapper align={align} noBorderRadius={noBorderRadius}>
      {children}
      <BubbleWrapper>
        <Bubble
          align={align}
          ref={ref}
          whileInView={{
            opacity: [0, 1, 1],
            scale: [1, 1.2, 1],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: 'spring',
          }}
          style={{
            y: moveY,
            transformPerspective: '1000px',
            transformStyle: 'preserve-3d',
            transformOrigin: 'center',
          }}
        >
          {bubbleTypes[type]}
        </Bubble>
      </BubbleWrapper>
      {image && (
        <motion.div
          style={{
            y: moveY2,
            transformPerspective: '1000px',
            transformStyle: 'preserve-3d',
            transformOrigin: 'center',
          }}
          whileInView={{
            opacity: [0, 1, 1],
            scale: [1, 1.1, 1],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: 'spring',
            delay: 0.5,
          }}
          className="gatsby-image-motion"
        >
          {image}
        </motion.div>
      )}
      {imageSecondary && (
        <SecondaryImage
          style={{
            y: moveY3,
            transformPerspective: '1000px',
            transformStyle: 'preserve-3d',
            transformOrigin: 'center',
          }}
          animate={{
            opacity: [0, 1, 1],
            scale: [1, 1.1, 1],
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            type: 'spring',
            delay: 0.8,
          }}
          align={align}
        >
          {imageSecondary}
        </SecondaryImage>
      )}
    </Wrapper>
  )
}

export default BubbleImageAnimated
