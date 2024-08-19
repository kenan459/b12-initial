import styled from '@emotion/styled'
import { theme } from '../../assets/theme'

export const ScrollToButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  z-index: 150;
  bottom: -30px;
  left: 50%;
  margin-left: -30px;
  background-color: ${theme.palette.common.white};
  border: 0;
  transition: all 0.15s ease-in-out;
  box-shadow: 0 15px 30px 0 rgb(22 14 51 / 7%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  svg {
    margin-top: 2px;
    transition: all 0.15s ease-in-out;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.1);
    background: ${theme.palette.primary.default};

    svg {
      animation: arrowBounce 0.5s ease-in-out forwards normal;
    }

    path {
      stroke: ${theme.palette.common.white};
    }
  }

  @keyframes arrowBounce {
    0% {
      transform: translate(0, -80px);
    }
    50% {
      transform: translate(0, 5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`
