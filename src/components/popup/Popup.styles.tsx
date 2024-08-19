import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

// Images
import popupBg from './popup-for-bg.png'

export const PopupContent = styled.div`
  border-radius: 6px;
  margin: 20px;

  ${mq['sm']} {
    margin: 0;
    box-shadow: 0 0px 20px 4px rgba(0, 0, 0, 0.2);
  }
`

export const PopupBody = styled.div`
  background-color: ${theme.colors.surface.default};
  background-image: url('${popupBg}');
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px 30px;
  border-radius: 6px 6px 0 0;
`

export const PopupTitle = styled.h3`
  font-size: 26px;
  line-height: 35px;
  font-weight: 700;
  color: ${theme.colors.text.dark};
  text-align: left;
  margin: 20px 0;
`

export const PopupDescription = styled.p`
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 22px;
  color: ${theme.colors.text.regular};
`

export const PopupActions = styled.div`
  background: ${theme.colors.brand.accentDarker};
  color: ${theme.colors.text.light};
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 0 0 6px 6px;
`

export const PopupFormTitle = styled.h3`
  font-size: 22px;
  line-height: 32px;
  font-weight: 700;
  color: ${theme.colors.surface.default};
  margin-bottom: 20px;
`

export const PopupForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: ${theme.colors.brand.accentDarker};
  border-radius: 0 0 6px 6px;
`

export const PopupCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 26px;
  width: 26px;
  z-index: 100;
  border: none;
  background: none;
  padding: 0;
  cursor: initial;

  &:hover {
    cursor: pointer;
  }

  &:focus:not(:focus-visible) {
    outline: 0 none;
  }
`

export const PopupWrapper = styled.div<{ isVisible: boolean; dark?: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  z-index: 10001;
  transition: all 0.15s ease-in-out;
  background-color: rgba(17, 15, 51, 0.6);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isVisible ? 'all' : 'none')};

  ${mq['sm']} {
    top: auto;
    height: auto;
    left: 30px;
    bottom: 20px;
    max-width: 388px;
    margin: 0;
    background: none;
  }

  ${(props) =>
    props.dark &&
    `
    ${PopupBody} {
      background-color: ${theme.colors.brand.accentDarker};
    }

    ${PopupActions} {
      background-color: ${theme.colors.surface.default};
    }

    ${PopupTitle} {
      color: ${theme.colors.text.white};
    }

    ${PopupDescription} {
      color: ${theme.colors.text.white};
    }
  `}
`

export const ButtonNote = styled.div<{ dark?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => (props.dark ? theme.colors.text.light : theme.colors.text.white)};
`
