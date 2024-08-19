import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  ${mq['md']} {
    gap: 30px;
    flex-direction: row;
  }
`

export const ColumnWrapper = styled.div`
  flex-shrink: 0;
  border-bottom: 1px solid ${theme.palette.gray.light};

  &:last-child {
    border-bottom: 0;
  }

  ${mq['md']} {
    flex: calc(100% / 4);
    border: 0;
  }
`

export const Title = styled.h3`
  font-size: ${theme.fontSizes.xsmall};
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  padding: 20px 0;
  position: relative;
  cursor: pointer;

  svg {
    position: absolute;
    width: 18px;
    height: 10px;
    right: 0;
    top: 50%;
    transition: ${theme.transition[1]};
  }

  ${mq['md']} {
    cursor: default;
    pointer-events: none;
    padding: 0 0 11px;

    svg {
      display: none;
    }
  }
`

export const Links = styled.div`
  flex-direction: column;

  a {
    color: ${theme.palette.gray.default};
    text-decoration: none;
    padding: 12px 0;

    ${mq['md']} {
      padding: 10px 0;
      font-size: 16px;
      line-height: 20px;
    }
  }
`
