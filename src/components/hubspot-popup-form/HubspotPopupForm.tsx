import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { HubspotForm } from '@components/hubspot-form/HubspotForm'

// Types PopupWrapperProps
type Props = {
  setIsVisible: (isVisible: boolean) => void
  formId: string
}
// Images
import IconClose from '@images/icons/icon-close.inline.svg'

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Content = styled.div`
  display: flex;
  position: relative;
  padding: 40px 20px;
  border-radius: 3px;
  background-color: ${theme.colors.surface.default};

  ${mq['md']} {
    padding: 40px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${theme.colors.text.regular};

  svg path {
    width: 16px;
    height: 16px;
  }
`

const PopupWrapper = ({ formId, setIsVisible }: Props) => {
  return (
    <Wrapper>
      <Content>
        <CloseButton onClick={() => setIsVisible(false)}>
          <IconClose />
        </CloseButton>
        <HubspotForm formElementId={formId} formId={formId} />
      </Content>
    </Wrapper>
  )
}
export default PopupWrapper
