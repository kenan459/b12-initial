import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { motion, useAnimationControls } from 'framer-motion'

// Components
import Title from '@components/title/Title'

// Images
import IconArrow from '@images/icons/arrow-right.inline.svg'
import IconAISvg from '@partials/home-hero/laptop-video-animation/assets/icon-ai.inline.svg'

const sidePaneVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.65 } },
}

const iconAiVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.65 } },
  bounce: { y: [0, 10, 0], transition: { type: 'spring', bounce: 0.65 } },
}

const iconAiPathVariants = {
  hidden: { pathLength: 0, opacity: 1, duration: 0.3 },
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
        duration: 1.5,
      },
    },
  },
  hide: { opacity: 0, rotate: 0, pathLength: 1, transition: { duration: 0.01 } },
}

// Styles
import { IconAiCircle, IconAiCirclePath } from '@partials/home-hero/laptop-video-animation/styles'

const IconAiWrapper = styled(motion.div)`
  position: absolute;
  z-index: 101;
  width: 50px;
  height: 50px;
  right: -20px;
  top: -15px;

  ${mq['sm']} {
    top: -25px;
  }

  ${mq['md']} {
    right: auto;
    top: 9%;
    left: 15%;
  }

  ${mq['lg']} {
    left: 12%;
    top: 16%;
  }
`

const StylePane = styled(motion.div)`
  position: absolute;
  top: 35px;
  left: -30px;
  width: 110px;
  max-width: 50%;
  background-color: ${theme.colors.surface.default};
  z-index: 100;
  border-radius: 5px;
  box-shadow: 0 20px 30px 0 rgb(22 14 51 / 10%);
  padding: 8px;

  ${mq['sm']} {
    left: -50px;
  }

  ${mq['md']} {
    padding: 14px;
    width: 180px;
    top: 15%;
    left: -75px;
    border-radius: 8px;
  }

  ${mq['lg']} {
    width: 220px;
    top: 23%;
    padding: 15px;
    left: -120px;
  }
`

const StylePaneTitle = styled(Title)`
  font-size: 8px;
  line-height: 10px;
  font-weight: bold;
  margin-bottom: 4px;
  font-weight: 500;

  ${mq['sm']} {
    font-size: 8px;
    line-height: 10px;
  }

  ${mq['md']} {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 8px;
  }
`

const SidePaneMenu = styled.div`
  display: flex;
  flex-direction: column;
`

const StylePaneItem = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  width: 100%;
  font-weight: 400;
  font-size: 7px;
  color: ${(props) => (props.active ? theme.colors.brand.accent : theme.colors.text.regular)};
  background: ${(props) =>
    props.active ? theme.colors.brand.accentLightest : theme.colors.surface.default};
  border-radius: 6px;
  text-align: left;
  transition: ${theme.transition[1]};

  svg {
    width: 4px;
    height: 5px;
    transition: ${theme.transition[1]};

    path {
      fill: ${(props) => (props.active ? '#413AA1' : theme.colors.surface.border)};
    }
  }

  ${mq['md']} {
    padding: 6px 10px;
    font-size: 12px;

    svg {
      width: 8px;
      height: 11px;
    }
  }
`

export const SidePane = () => {
  const [activeThemeSetting, setActiveThemeSetting] = useState(false)
  const [activeTextSetting, setActiveTextSetting] = useState(false)
  const sidePaneControls = useAnimationControls()

  useEffect(() => {
    setTimeout(() => {
      sidePaneControls.start('show')
    }, 1000)

    setTimeout(() => {
      setActiveThemeSetting(true)
    }, 2000)

    setTimeout(() => {
      setActiveThemeSetting(false)
    }, 5200)

    setTimeout(() => {
      setActiveTextSetting(true)
    }, 5800)

    setTimeout(() => {
      setActiveTextSetting(false)
    }, 10200)

    setTimeout(() => {
      sidePaneControls.start('hidden')
    }, 11000)
  }, [])

  return (
    <>
      <StylePane initial="hidden" animate={sidePaneControls} variants={sidePaneVariants}>
        <StylePaneTitle>What would you like to change?</StylePaneTitle>
        <SidePaneMenu>
          <StylePaneItem active={activeThemeSetting}>
            Look and style
            <IconArrow />
          </StylePaneItem>
          <StylePaneItem active={activeTextSetting}>
            New text and images
            <IconArrow />
          </StylePaneItem>
          <StylePaneItem>
            Logo
            <IconArrow />
          </StylePaneItem>
          <StylePaneItem>
            Business details
            <IconArrow />
          </StylePaneItem>
          <StylePaneItem>
            Pages / sections
            <IconArrow />
          </StylePaneItem>
          <StylePaneItem>
            Everything
            <IconArrow />
          </StylePaneItem>
        </SidePaneMenu>
      </StylePane>
    </>
  )
}

export const AIIcon = () => {
  const iconAiControls = useAnimationControls()
  const iconAiPathControls = useAnimationControls()

  const animateStuff = () => {
    setTimeout(() => {
      iconAiControls.start('show')
    }, 1500)

    setTimeout(() => {
      iconAiPathControls.start('show')
    }, 2500)

    setTimeout(() => {
      iconAiControls.start('bounce')
      iconAiPathControls.start('hide').then(() => iconAiPathControls.start('hidden'))
    }, 4000)

    setTimeout(() => {
      iconAiPathControls.start('show')
    }, 6500)

    setTimeout(() => {
      iconAiControls.start('bounce')
      iconAiPathControls.start('hide').then(() => iconAiPathControls.start('hidden'))
    }, 8200)

    setTimeout(() => {
      iconAiControls.start('hidden')
      iconAiPathControls.start('hidden')
    }, 11500)
  }

  useEffect(() => {
    animateStuff()
  }, [])

  return (
    <IconAiWrapper initial="hidden" animate={iconAiControls} variants={iconAiVariants}>
      <IconAISvg />

      <IconAiCircle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104 104">
        <IconAiCirclePath
          initial="hidden"
          animate={iconAiPathControls}
          variants={iconAiPathVariants}
          d="M103 52c0 28.166-22.834 51-51 51S1 80.166 1 52 23.834 1 52 1s51 22.834 51 51Z"
        />
      </IconAiCircle>
    </IconAiWrapper>
  )
}
