import styled from '@emotion/styled'
import { theme } from '../../assets/theme'

export const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`
export const SocialLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 2px solid ${theme.palette.gray.light};
  border-radius: 50%;
  color: ${theme.palette.secondary.default};
  transition: ${theme.transition[1]};

  svg {
    width: 18px;
    height: 18px;
  }

  svg,
  path {
    transition: ${theme.transition[1]};
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${theme.palette.primary.default};
    border-color: ${theme.palette.primary.default};

    path {
      fill: ${theme.palette.primary.default};
    }
  }
`
