import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { LaptopFrame } from './signup-flow-animation/theme.styles'
import SignupFormAnimation from './signup-flow-animation/signup-form'
import { SidePane, AIIcon } from './signup-flow-animation/sidebar-components'
import BreathingAnimation from './signup-flow-animation/breathing-animation'
import { CleanTheme } from './signup-flow-animation/clean-theme'
import { ClassicTheme } from './signup-flow-animation/classic-theme'

export const ExperimentAIWebsiteBuilderPageHeroAnimation = () => {
  const [signupFormIsVisible, setSignupFormIsVisible] = useState(false)
  const [breathingAnimationIsVisible, setBreathingAnimationIsVisible] = useState(false)
  const [cleanThemeIsVisible, setCleanThemeIsVisible] = useState(false)
  const [sidePaneVisible, setSidePaneVisible] = useState(false)
  const [classicThemeIsVisible, setClassicThemeIsVisible] = useState(false)

  const animateSignupFlow = () => {
    setTimeout(() => {
      setSignupFormIsVisible(true)
    }, 300)

    setTimeout(() => {
      setSignupFormIsVisible(false)
      setBreathingAnimationIsVisible(true)
    }, 6300)

    setTimeout(() => {
      setBreathingAnimationIsVisible(false)
      setCleanThemeIsVisible(true)
      setSidePaneVisible(true)
    }, 10000)

    setTimeout(() => {
      setCleanThemeIsVisible(false)
      setClassicThemeIsVisible(true)
    }, 14250)

    setTimeout(() => {
      setClassicThemeIsVisible(false)
      setSidePaneVisible(false)
    }, 23000)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    animateSignupFlow()

    interval = setInterval(() => {
      animateSignupFlow()
    }, 23000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <LaptopFrame>
      {sidePaneVisible && <AIIcon />}
      {sidePaneVisible && <SidePane />}
      <AnimatePresence exitBeforeEnter>
        {signupFormIsVisible && <SignupFormAnimation key={`signup-form-item`} />}
        {breathingAnimationIsVisible && <BreathingAnimation key={`loading-animation-item`} />}
        {cleanThemeIsVisible && <CleanTheme />}
        {classicThemeIsVisible && <ClassicTheme />}
      </AnimatePresence>
    </LaptopFrame>
  )
}

export default ExperimentAIWebsiteBuilderPageHeroAnimation
