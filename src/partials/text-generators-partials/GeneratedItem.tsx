import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import CopyTextLink from './CopyTextLink'

type GeneratedItemProps = {
  generatedText: string
  splitText?: boolean
  formatText?: (text: string) => React.ReactNode
}

type TextWrapperProps = {
  splitText: boolean
}

type GeneratedItemWrapperProps = {
  splitText: boolean
}

export const GeneratedItemWrapper = styled.div<GeneratedItemWrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background: white;
  border-radius: 16px;
  padding: 45px;
  ${(props) => !props.splitText && fixedHeight}
`

const fixedHeight = css`
  height: 224px;
`

const boldText = css`
  font-weight: 700;
`

const alignLeft = css`
  text-align: left;
`

export const TextWrapper = styled.div<TextWrapperProps>`
  ${(props) => !props.splitText && boldText}
  ${(props) => props.splitText && alignLeft}
  font-size: 22px;
  line-height: 28px;
`

const formatTextFunction = (generatedText: string) => <p>{generatedText}</p>

const GeneratedItem = (props: GeneratedItemProps) => {
  const { generatedText, splitText = false, formatText = formatTextFunction } = props
  const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

  const formatMultilineText = (generatedText: string) => {
    return generatedText.split('\n').map((text: string) => {
      let formattedText = capitalize(text).trim()
      return formatText(formattedText)
    })
  }

  return (
    <GeneratedItemWrapper splitText={splitText}>
      <TextWrapper splitText={splitText}>
        {splitText ? formatMultilineText(generatedText) : generatedText}
      </TextWrapper>
      <CopyTextLink copiedText={generatedText} />
    </GeneratedItemWrapper>
  )
}

export default GeneratedItem
