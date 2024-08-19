import styled from '@emotion/styled'
import React, { useState } from 'react'
import { theme, mq } from '../../assets/theme'

// Styles
import { baseCss, spacingDefault, stylePrimaryCss } from '../button/Button.styles'

// Components
import { ButtonNote } from '../../partials/home-hero/HomeHero.styles'

type Props = {
  ctaText?: string
  placeholder?: string
  showButtonNote?: boolean
  vertical?: boolean
}

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 8px;

  ${mq['md']} {
    gap: 16px;
  }
`
export const Form = styled.form<{ vertical?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${mq['lg']} {
    flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  }
`

const FormInput = styled.input`
  margin: 0;
  width: 100%;
  background-color: ${theme.colors.surface.default};
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  padding: 15px;
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 3px;
  transition: ${theme.transition[1]};
  text-align: center;

  ${mq['lg']} {
    padding: 20px 15px;
    text-align: left;
  }

  &:focus-visible {
    border: 1px solid ${theme.palette.primary.default};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

const FormButton = styled.button`
  ${baseCss}
  ${spacingDefault}
  ${stylePrimaryCss}

  width: 100%;

  ${mq['lg']} {
    width: auto;
  }
`

const SignUpForm = ({
  ctaText = 'Get started for free',
  placeholder = 'Email address...',
  showButtonNote = false,
  vertical = false,
}: Props) => {
  const [email, setEmail] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const submitForm = () => {
      if (!formSubmitted) {
        setFormSubmitted(true)

        let signupUrl = 'https://b12.io/signup'
        if (email) {
          signupUrl = signupUrl + '?email=' + encodeURIComponent(email)
        }

        if (window) {
          window.location.href = signupUrl
        }
      }
    }

    setTimeout(submitForm, 1000)

    // @ts-ignore
    if (dataLayer) {
      // @ts-ignore
      dataLayer.push({
        event: 'submit',
        action: 'submit',
        category: 'Signup Form',
        label: 'RC article signup form',
        eventCallback: submitForm,
      })
    }
  }

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} vertical={vertical}>
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={placeholder}
        ></FormInput>
        <FormButton type="submit">{ctaText}</FormButton>
      </Form>
      {showButtonNote && <ButtonNote>No credit card required</ButtonNote>}
    </FormWrapper>
  )
}
export default SignUpForm
