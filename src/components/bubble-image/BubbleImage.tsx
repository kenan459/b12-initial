import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { mq } from '@styles/theme'

// Images
import BubbleShape1 from '../../images/bubble-shape-1.inline.svg'
import BubbleShape2 from '../../images/bubble-shape-2.inline.svg'
import BubbleShape3 from '../../images/bubble-shape-3.inline.svg'
import BubbleShape4 from '../../images/bubble-shape-4.inline.svg'
import BubbleShape5 from '../../images/bubble-shape-5.inline.svg'

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
const Wrapper = styled.div<{ align: Align; noBorderRadius: boolean }>`
  position: relative;

  .gatsby-image-motion {
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    width: 70%;

    ${(props) => (props.align === 'right' ? `left: 10px;` : `right: 10px;`)}

    ${mq['md']} {
      ${(props) => (props.align === 'right' ? `left: 40px;` : `right: 40px;`)}
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
    .bubble-image-mobile {
      display: none;
    }

    .bubble-image-desktop {
      display: block;
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
  bottom: 0;
  width: 50%;
  max-width: 230px;

  ${(props) =>
    props.align === 'right'
      ? `right: 10px; align-items: flex-end;`
      : `left: 10px; align-items: flex-start;`}

  ${mq['md']} {
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

const Bubble = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'align',
})<{ align: Align }>`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;

  justify-content: ${(props) => (props.align === 'right' ? 'flex-end' : 'flex-start')};

  svg {
    width: 80%;
    max-width: 480px;

    ${mq['md']} {
      width: 100%;
    }
  }
`

const bubbleTypes = {
  1: <BubbleShape1 />,
  2: <BubbleShape2 />,
  3: <BubbleShape3 />,
  4: <BubbleShape4 />,
  5: <BubbleShape5 />,
}

const motionBubble = {
  initial: {
    opacity: 0,
  },
  transition: { delay: 0.4 },
  whileInView: { opacity: 1 },
}

const motionImage = (align: Align) => {
  return {
    initial: {
      opacity: 0,
      x: align === 'right' ? 20 : -20,
      y: '-50%',
    },
    transition: { delay: 0.5 },
    whileInView: { opacity: 1, x: 0, y: '-50%' },
    viewport: { once: true, amount: 0.8 },
  }
}

const motionImageSecondary = (align: Align) => {
  return {
    initial: {
      opacity: 0,
      x: align === 'right' ? -20 : 20,
    },
    transition: { delay: 0.5 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.8 },
  }
}

const BubbleImage = ({
  type = 1,
  align = 'left',
  image = null,
  imageSecondary = null,
  noBorderRadius = false,
  children,
}: Props) => (
  <Wrapper align={align} noBorderRadius={noBorderRadius}>
    {children}
    <Bubble {...motionBubble} align={align}>
      {bubbleTypes[type]}
    </Bubble>
    {image && (
      <motion.div {...motionImage(align)} className="gatsby-image-motion">
        {image}
      </motion.div>
    )}
    {imageSecondary && (
      <SecondaryImage {...motionImageSecondary(align)} align={align}>
        {imageSecondary}
      </SecondaryImage>
    )}
  </Wrapper>
)

export default BubbleImage
