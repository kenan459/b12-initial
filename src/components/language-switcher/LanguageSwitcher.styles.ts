import styled from '@emotion/styled'
import { theme } from '@styles/theme'

export const LanguageDropupBoxToggle = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${theme.palette.gray.dark};
  transition: ${theme.transition[1]};
  cursor: pointer;
  padding-block: 5px;

  &:hover {
    color: ${theme.palette.gray.dark};

    svg {
      opacity: 1;
    }
  }

  svg {
    opacity: 0.6;
    width: 8px;
    transform: rotate(-180deg);
    transition: ${theme.transition[1]};

    path {
      stroke: ${theme.palette.gray.darker};
    }
  }
`

export const LanguageDropupBoxMenu = styled.div`
  position: absolute;
  bottom: 100%;
  right: -8px;
  width: 84px;
  background: #fff;
  border-radius: 3px;
  padding: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  display: none;
  flex-direction: column;
  gap: 5px;

  a,
  a:visited {
    display: block;
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    color: ${theme.palette.gray.dark};

    &:hover {
      text-decoration: underline;
    }

    &.active {
      &,
      &:hover {
        text-decoration: none;
        opacity: 0.6;
      }
    }
  }
`

export const LanguageDropupBox = styled.div`
  position: relative;

  &:hover {
    ${LanguageDropupBoxMenu} {
      display: flex;
    }

    ${LanguageDropupBoxToggle} {
      color: ${theme.palette.gray.dark};

      svg {
        opacity: 1;
        transform: rotate(0deg);
      }
    }
  }
`
