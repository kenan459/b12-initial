import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { motion, useAnimation } from 'framer-motion'

// Images
import IconLayout from '@images/icons/layout.inline.svg'
import IconWrench from '@images/icons/wrench.inline.svg'
import IconDesign from '@images/icons/design.inline.svg'

const icons = [<IconWrench />, <IconDesign />, <IconLayout />]

const shapeInitial =
  'M116.078 59.7996C109.071 78.2375 109.461 90.233 98.83 100.497C88.7579 110.221 85.3548 122.706 60.0214 116.198C34.688 109.691 31.2849 110.221 21.2128 100.497C10.5821 90.233 8.2766 82.0336 3.96453 59.7996C-0.34754 37.5656 10.5821 29.3662 21.2128 19.1023C31.2849 9.37772 33.071 8.82411 60.0214 3.40118C86.9718 -2.02174 88.7579 9.37772 98.83 19.1023C109.461 29.3662 123.085 41.3617 116.078 59.7996Z'

const shapeMorphed =
  'M116.372 59.9068C119.62 80.3305 109.727 90.0693 99.0526 100.242C88.9388 109.88 85.5215 110.966 60.0831 115.803C34.6446 120.64 31.2274 109.88 21.1135 100.242C10.4388 90.0693 0.00502551 84.6302 3.79374 59.9068C7.58246 35.1835 10.4388 29.7443 21.1135 19.5718C31.2274 9.93382 35.1859 -0.289225 60.0831 4.01049C84.9803 8.31021 88.9388 9.93382 99.0526 19.5718C109.727 29.7443 113.125 39.4832 116.372 59.9068Z'

// Styles
const Title = styled.h2`
  font-size: 10px;
  line-height: 16px;
  color: ${theme.colors.text.dark};
  margin-top: 0;
  margin-bottom: 5px;

  ${mq['md']} {
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 8px;
  }
`

const Text = styled.p`
  font-size: 8px;
  line-height: 10px;
  color: ${theme.colors.text.regular};
  margin: 0;

  ${mq['md']} {
    font-size: 12px;
    line-height: 16px;
  }
`

const AnimationWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.brand.accentLightest};
`
const AnimatedSpinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 30px 20px;

  ${mq['md']} {
    gap: 10px;
    padding: 0;
  }
`

const SpinnerWrapper = styled(motion.div)`
  display: grid;
  place-items: center;
  place-content: center;
  width: 50px;
  height: 50px;

  > svg {
    grid-column: 1/1;
    grid-row: 1/1;
    width: 100%;
    height: 100%;
  }

  ${mq['md']} {
    width: 120px;
    height: 120px;
  }
`

const StyledSvg = styled.svg`
  path,
  g {
    transform-origin: center !important;
  }
`

const SpinnerIcon = styled.div`
  grid-column: 1/1;
  grid-row: 1/1;

  display: grid;
  place-items: center;
`

const StyledPath = styled(motion.path)`
  stroke-width: 1px;
  opacity: 0.15;
`

const StyledInnerPath = styled(motion.path)``

const SpinnerIconWrapper = styled(motion.div)`
  width: 10px;
  height: 10px;

  > svg {
    width: 100%;
    height: 100%;
  }

  ${mq['md']} {
    width: 20px;
    height: 20px;
  }
`

const Shape = () => {
  const loaderControls = useAnimation()
  const iconControls = useAnimation()
  const lineShapeControls = useAnimation()
  const spinnerControls = useAnimation()

  useEffect(() => {
    lineShapeControls.start({
      d: [shapeMorphed, shapeInitial, shapeMorphed, shapeInitial, shapeMorphed],
      scale: [1, 0.8, 1, 0.8, 1, 0.8, 1, 0.8, 1],
      transition: { duration: 6, loop: Infinity, ease: 'easeOut' },
    }),
      loaderControls.start({
        scale: [1, 0.85, 1, 0.85, 1, 0.85, 1, 0.85, 1],
        transition: { delay: 0.6, duration: 6, loop: Infinity, ease: 'linear' },
      }),
      spinnerControls.start({
        scale: [1, 0.85, 1, 0.85, 1, 0.85, 1, 0.85, 1],
        transition: { delay: 0.6, duration: 6, loop: Infinity, ease: 'linear' },
        rotate: 360,
      }),
      spinnerControls.start({
        transition: { duration: 1.3, loop: Infinity, ease: 'linear' },
        rotate: [0, 360],
      }),
      iconControls.start({
        scale: [1, 0.8, 1, 0.8, 1, 0.8, 1, 0.8, 1],
        transition: { delay: 0.2, duration: 6, loop: Infinity, ease: 'easeOut' },
      })
  }, [])

  return (
    <>
      <StyledSvg
        className="ani-spinner__shape"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 120 120"
      >
        <g>
          <StyledPath
            d={shapeInitial}
            animate={lineShapeControls}
            initial={{ opacity: 0 }}
            stroke="#695FF6"
          />
        </g>
        <motion.g className="ani-spinner__shape-group-g">
          <g className="ani-spinner__shape-group">
            <StyledPath
              animate={loaderControls}
              fill="#695FF6"
              fillOpacity=".5"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60 99.0698C81.5777 99.0698 99.0698 81.5776 99.0698 60C99.0698 38.4224 81.5777 20.9302 60 20.9302C38.4224 20.9302 20.9303 38.4224 20.9303 60C20.9303 81.5776 38.4224 99.0698 60 99.0698ZM60 102C83.196 102 102 83.196 102 60C102 36.804 83.196 18 60 18C36.8041 18 18 36.804 18 60C18 83.196 36.8041 102 60 102Z"
            />
            <motion.path
              fill="#695FF6"
              fillOpacity="1"
              animate={spinnerControls}
              d="M53.8897 19.925C53.768 19.1269 54.3162 18.3785 55.1181 18.2847C58.5228 17.8862 61.9634 17.9061 65.3633 18.3438C66.164 18.4469 66.7036 19.2016 66.5727 19.9983C66.4417 20.795 65.69 21.3318 64.889 21.2308C61.7923 20.8403 58.66 20.8222 55.5591 21.177C54.7569 21.2687 54.0114 20.7232 53.8897 19.925Z"
            />
          </g>
        </motion.g>
        <g className="ani-spinner__shape-inner-g">
          <StyledInnerPath
            animate={iconControls}
            className="ani-spinner__shape-inner"
            fill="#FFFFFF"
            d="M95 60C95 79.33 79.33 95 60 95C40.67 95 25 79.33 25 60C25 40.67 40.67 25 60 25C79.33 25 95 40.67 95 60Z"
          />
        </g>
      </StyledSvg>
    </>
  )
}

const BreathingLoadingAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (icons.length > 1) {
      interval = setInterval(() => {
        setActiveIndex((prevState) => (prevState + 1) % icons.length)
      }, 1500)
    }

    return () => {
      clearInterval(interval)
    }
  })

  const styles = {
    container: {
      height: 0,
    },
    active: {
      height: 'auto',
    },
  }

  return (
    <AnimationWrapper
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
    >
      <AnimatedSpinner>
        <SpinnerWrapper initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}>
          <Shape />
          <SpinnerIcon>
            {icons.map((icon, idx) => (
              <SpinnerIconWrapper
                animate={{
                  scale: [0.5, 1, 0.8, 1, 0.5],
                  transition: { duration: 2, ease: 'easeOut', loop: Infinity },
                }}
                style={{
                  ...styles.container,
                  ...(idx === activeIndex ? styles.active : {}),
                }}
                key={`spinner-icon-${idx}`}
              >
                {icon}
              </SpinnerIconWrapper>
            ))}
          </SpinnerIcon>
        </SpinnerWrapper>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 0.4 },
          }}
        >
          <Title>Constructing your professional new website</Title>
          <Text>Just a few more seconds while our algorithms get everything ready</Text>
        </motion.div>
      </AnimatedSpinner>
    </AnimationWrapper>
  )
}

export default BreathingLoadingAnimation
