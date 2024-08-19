import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  right: 0;

  ${mq['sm']} {
    bottom: ${theme.spacing.medium};
    left: 20%;
    right: 20%;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: nowrap;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  background: rgba(0, 0, 0, 0.8);

  ${mq['sm']} {
    border-radius: 4px;
    flex-direction: row;
  }
`

export const Text = styled.p`
  margin: 0;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 10px;

  ${mq['sm']} {
    border-bottom: 0;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    padding: 10px 20px;
    flex: 1;
  }
`

export const Link = styled.a`
  &,
  &:link,
  &:visited {
    font-size: 14px;
    line-height: 20px;
    color: #fff;
    text-decoration: underline;

    ${mq['sm']} {
      margin-left: 3px;
      font-size: 14px;
      line-height: 20px;
    }
  }
`

export const Button = styled.button`
  appearance: none;
  border: 0;
  background: none;
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;

  ${mq['sm']} {
    padding: 10px 20px;
  }
`
