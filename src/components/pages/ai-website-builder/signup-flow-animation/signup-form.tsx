import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { keyframes } from '@emotion/react'
import { motion } from 'framer-motion'

// Components
import Title from '@components/title/Title'

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
  height: 10px;
  background-color: ${theme.colors.text.dark};

  ${mq['md']} {
    height: 14px;
  }
`

const FormTitle = styled(Title)`
  font-size: 12px;
  line-height: 14px;
  color: #373a3c;
  margin-bottom: 5px;

  ${mq['sm']} {
    font-size: 12px;
    line-height: 14px;
  }

  ${mq['md']} {
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 20px;
  }
`

const SignupFormWrapper = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  background-color: #f5f5f7;
  border-radius: 6px;

  ${mq['md']} {
    padding: 0 20px;
  }
`

const SignupFormContentWrapper = styled.div`
  width: 100%;
  max-width: 350px;
`

const SignupForm = styled.form`
  width: 100%;
`

const SignupFormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  ${mq['md']} {
    gap: 16px;
  }
`

const SignupFormLabel = styled.div`
  width: 100%;
  margin: 0;
  font-size: 8px;
  line-height: 1.2;
  font-weight: 600;
  color: #0f0d3aa6;
  position: relative;
  display: inline-block;
  text-align: left;
  position: relative;

  ${mq['md']} {
    font-size: 10px;
  }
`

const SignupFormInput = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'accentBorder' && prop !== 'active',
})<{ active?: boolean; accentBorder?: boolean }>`
  display: block;
  min-height: 10px;
  width: 100%;
  background: transparent;
  padding: 2px 0;
  font-weight: 600;
  border-bottom: ${(props) =>
    props.accentBorder
      ? `1px solid ${theme.colors.brand.accentLight}`
      : `1px solid ${theme.colors.surface.border}`};
  font-size: ${(props) => (props.active ? '9px' : 'font-size: 7px')};
  color: ${(props) => (props.active ? '#0f0d3a' : '#b3b3b3')};
  overflow: hidden;
  white-space: nowrap;

  ${mq['md']} {
    min-height: 36px;
    padding: 8px 0;
    font-size: ${(props) => (props.active ? '12px' : 'font-size: 10px')};
  }
`

const FormButton = styled.button<{ active: boolean; isLoading: boolean }>`
  min-height: 20px;
  width: 100%;
  font-size: 6px;
  font-weight: 600;
  line-height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid #efefef;
  user-select: none;
  transition: all 0.1s ease-in-out;
  border-radius: 2px;
  color: ${(props) => (props.active ? theme.colors.text.white : '#5048c7')};
  background: ${(props) => (props.active ? theme.colors.brand.accent : theme.colors.text.white)};
  pointer-events: none;
  margin-top: 10px;

  ${(props) =>
    !props.active ||
    (props.isLoading &&
      `
    opacity: 0.3;
  `)}

  ${mq['md']} {
    min-width: 120px;
    min-height: 30px;
    font-size: 10px;
    line-height: 20px;
    margin-top: 20px;
    border: 1px solid #d9d9d9;
    border-radius: 3px;
  }
`

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 6px;
  height: 6px;
  border: 1px solid ${theme.colors.text.white};
  border-top-color: #5048c7;
  border-radius: 50%;
  animation: ${spin} 1s infinite linear;

  ${mq['md']} {
    width: 10px;
    height: 10px;
    border-top-color: #5048c7;
  }
`

const SignupFormAnimation = () => {
  const businessName = 'Conrad Consulting'
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
    }, 100)

    if (activeButton) {
      const delayTimeout = setTimeout(() => {
        setIsLoading(true)
      }, 400)

      return () => {
        clearTimeout(delayTimeout)
      }
    }

    return () => {
      clearInterval(typingEffect)
    }
  }, [i, j, activeButton])

  return (
    <>
      <SignupFormWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
    </>
  )
}

export default SignupFormAnimation
