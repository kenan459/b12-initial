import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '../../assets/theme'
import { isValidEmail } from '../hubspot-form/helpers'

// Types
type TInputSize = 'small' | 'medium' | 'large'

type Props = {
  width?: string
  isRequired?: boolean
  placeholder?: string
  value?: string
  inputSize?: TInputSize
  onChange: (event) => void
  onKeyDown?: (event) => void
  passedId?: string
  numLines?: number
  type?: string
  invalid?: boolean
}

type StyledInputProps = {
  inputSize: TInputSize
  width: string
  invalid?: boolean
}

const inputSizeSmall = css`
  padding: 16px;
  font-size: 12px;
`

const inputSizeMedium = css`
  padding: 16px;
  font-size: 14px;
`

const inputSizeLarge = css`
  padding: 21px;
  font-size: 18px;
`

const errorInput = css`
  &::focus-visible {
    outline: 1px solid #f05e5e;
  }
  outline: 1px solid #f05e5e;
`

export const StyledInput = styled.input<StyledInputProps>`
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 4px;
  width: ${(props) => props.width};
  ${(props) => props.inputSize === 'small' && inputSizeSmall}
  ${(props) => props.inputSize === 'medium' && inputSizeMedium}
  ${(props) => props.inputSize === 'large' && inputSizeLarge}
  ${(props) => props.invalid && errorInput}
`

export const StyledTextarea = styled.textarea<StyledInputProps>`
  line-height: 25px;
  font-family: ${theme.typography.base};
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 4px;
  width: ${(props) => props.width};
  ${(props) => props.inputSize === 'small' && inputSizeSmall}
  ${(props) => props.inputSize === 'medium' && inputSizeMedium}
  ${(props) => props.inputSize === 'large' && inputSizeLarge}
`

const TextInput = ({
  isRequired = false,
  width = '100%',
  placeholder = '',
  value = '',
  inputSize = 'medium',
  onChange,
  onKeyDown = () => {},
  passedId = '',
  numLines = 1,
  type = 'text',
  invalid = false,
}: Props) => {
  const hasInvalidEmail = !isValidEmail(value) && type === 'email' && value !== ''

  return numLines > 1 && type === 'text' ? (
    <StyledTextarea
      onKeyDown={onKeyDown}
      id={passedId}
      required={isRequired}
      width={width}
      placeholder={placeholder}
      value={value}
      inputSize={inputSize}
      onChange={onChange}
      rows={numLines}
    />
  ) : (
    <StyledInput
      onKeyDown={onKeyDown}
      id={passedId}
      type={type}
      required={isRequired}
      width={width}
      placeholder={placeholder}
      value={value}
      inputSize={inputSize}
      onChange={onChange}
      invalid={invalid || hasInvalidEmail}
    />
  )
}

export default TextInput
