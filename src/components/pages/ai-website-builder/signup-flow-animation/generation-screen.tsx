import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { motion } from 'framer-motion'
import { keyframes } from '@emotion/react'

// Components
import Title from '@components/title/Title'

// Images
const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
}

// Styles
const Cursor = styled(motion.div)`
  position: absolute;
  display: inline-block;
  width: 1px;
  height: 20px;
  background-color: ${theme.colors.text.dark};
`

const LaptopFrame = styled.div`
  position: relative;
  width: 100%;
  background-color: #fcfcfc;
  border-radius: 25px;
  box-shadow: 0 20px 30px 0 rgb(22 14 51 / 10%);
  border: 1px solid ${theme.colors.surface.borderLight};
  padding: 20px;
  margin: 0 auto;

  ${mq['md']} {
    padding: 30px;
  }
`

const FormTitle = styled(Title)`
  font-size: 22px;
  line-height: 26px;
  color: #373a3c;
  margin-bottom: 30px;

  ${mq['md']} {
    font-size: 26px;
  }
`

const SignupFormWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: #f5f5f7;
  border-radius: 6px;
  min-height: 450px;
`

const SignupFormContentWrapper = styled.div`
  width: 100%;
  max-width: 450px;
`

const SignupForm = styled.form`
  width: 100%;
`

const SignupFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

const SignupFormLabel = styled.div`
  width: 100%;
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 600;
  color: #0f0d3aa6;
  position: relative;
  display: inline-block;
  text-align: left;
  position: relative;
`

const SignupFormInput = styled(motion.div)<{ active: boolean; accentBorder: boolean }>`
  display: block;
  min-height: 42px;
  width: 100%;
  background: transparent;
  padding: 10px 0;
  font-weight: 600;
  border-bottom: ${(props) =>
    props.accentBorder
      ? `1px solid ${theme.colors.brand.accentLight}`
      : `1px solid ${theme.colors.surface.border}`};
  font-size: ${(props) => (props.active ? '18px' : 'font-size: 16px')};
  color: ${(props) => (props.active ? '#0f0d3a' : '#b3b3b3')};
  overflow: hidden;
  white-space: nowrap;
`

const FormButton = styled.button<{ active: boolean; isLoading: boolean }>`
  min-width: 120px;
  min-height: 50px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  user-select: none;
  border: 1px solid #d9d9d9;
  transition: all 0.1s ease-in-out;
  border-radius: 3px;
  color: ${(props) => (props.active ? theme.colors.text.white : '#5048c7')};
  background: ${(props) => (props.active ? theme.colors.brand.accent : theme.colors.text.white)};
  ${(props) =>
    !props.active ||
    (props.isLoading &&
      `
    opacity: 0.3;
  `)}
  pointer-events: none;

  margin-top: 30px;
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid ${theme.colors.text.white};
  border-top-color: #5048c7;
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;
`

const SignupFormAnimation = () => {
  const businessName = 'Vogel Consulting'
  const businessDescription = 'Communications coach'
  const [activeBusinessName, setActiveusinessName] = useState(false)
  const [activeNameField, setActiveNameField] = useState(false)
  const [activeDescriptionField, setActiveDescriptionField] = useState(false)
  const [activeBusinessDescription, setActiveusinessDescription] = useState(false)
  const [displayedBusinessName, setDisplayedBusinessName] = useState('')
  const [displayedBusinessDescription, setDisplayedBusinessDescription] = useState('')
  const [activeButton, setActiveButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [i, setI] = useState(0)
  const [j, setJ] = useState(0)

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < businessName.length) {
        setActiveusinessName(true)
        setActiveNameField(true)
        setDisplayedBusinessName((prevState) => prevState + businessName.charAt(i))
        setI(i + 1)
      } else if (j < businessDescription.length) {
        setActiveusinessDescription(true)
        setActiveNameField(false)
        setActiveDescriptionField(true)

        setDisplayedBusinessDescription((prevState) => prevState + businessDescription.charAt(j))
        setJ(j + 1)
      } else {
        clearInterval(typingEffect)
        setActiveDescriptionField(false)
        setActiveButton(true)
      }
    }, 150)

    return () => {
      clearInterval(typingEffect)
    }
  }, [i, j])

  useEffect(() => {
    if (activeButton) {
      const delayTimeout = setTimeout(() => {
        setIsLoading(true)
      }, 500)

      return () => {
        clearTimeout(delayTimeout)
      }
    }

    return
  }, [activeButton])

  return (
    <>
      <LaptopFrame>
        <SignupFormWrapper>
          <SignupFormContentWrapper>
            <SignupForm action="#">
              <FormTitle as="h2" textStyle="h3">
                Tell us about your business
              </FormTitle>
              <SignupFormContent>
                <SignupFormLabel>
                  Business name
                  <SignupFormInput active={activeBusinessName} accentBorder={activeNameField}>
                    {displayedBusinessName ? displayedBusinessName : 'Metropolitan Marketing LLC'}
                    {activeNameField && <Cursor variants={cursorVariants} animate="blinking" />}
                  </SignupFormInput>
                </SignupFormLabel>
                <SignupFormLabel>
                  Business description
                  <SignupFormInput
                    active={activeBusinessDescription}
                    accentBorder={activeDescriptionField}
                  >
                    {displayedBusinessDescription
                      ? displayedBusinessDescription
                      : 'Describe your business in a few words'}
                    {activeDescriptionField && (
                      <Cursor variants={cursorVariants} animate="blinking" />
                    )}
                  </SignupFormInput>
                </SignupFormLabel>
              </SignupFormContent>
            </SignupForm>
            <FormButton active={activeButton} isLoading={isLoading}>
              {isLoading ? <Spinner /> : 'Continue'}
            </FormButton>
          </SignupFormContentWrapper>
        </SignupFormWrapper>
      </LaptopFrame>
    </>
  )
}

export default SignupFormAnimation
