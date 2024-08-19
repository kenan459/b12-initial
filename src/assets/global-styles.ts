import { css } from '@emotion/react'

import { mq, theme } from './theme'
import fonts from './fonts'
import salesForceChat from './salesforce-chat'

const globalStyles = css`
  ${fonts}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.base};
    font-weight: 400;
    font-size: 100%;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${theme.typography.heading};
  }

  p {
    font-size: 16px;
    line-height: 20px;
    color: ${theme.colors.text.regular};
    margin: 0 0 ${theme.spacing.small};

    a {
      color: ${theme.colors.brand.accent};
      text-decoration: underline;

      &:hover {
        color: ${theme.colors.text.dark};
        text-decoration: none;
      }
    }

    ${mq['sm']} {
      font-size: 18px;
      line-height: 30px;
    }
  }

  ul,
  ol {
    font-size: 16px;
    line-height: 24px;
    color: ${theme.colors.text.regular};

    ${mq['sm']} {
      font-size: 18px;
      line-height: 30px;
    }

    li {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  a {
    font-size: 16px;
    line-height: 20px;
    color: ${theme.colors.brand.accent};

    ${mq['sm']} {
      font-size: 18px;
      line-height: 30px;
    }
  }

  ${salesForceChat}
`

export default globalStyles
