import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from '../../assets/theme'

import { baseCss, spacingDefault, stylePrimaryCss } from '../button/Button.styles'

const baseInputCSS = css`
  margin: 0;
  padding: 16px;
  background-color: ${theme.colors.surface.default};
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 4px;
  font-size: 14px;
  line-height: 14px;
  width: 100%;

  &::placeholder {
    color: ${theme.colors.text.light};
  }
`

export const FormWrapper = styled.div`
  .hbs-form {
    .hs-form-field {
      & + .hs-form-field {
        margin-top: 20px;
      }

      label {
        display: block;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 5px;
      }

      .input {
        .hs-input {
          ${baseInputCSS}
        }
      }
    }

    .hs-submit {
      margin-top: 20px;
    }

    .hs-button {
      &.primary {
        ${baseCss}
        ${spacingDefault}
        ${stylePrimaryCss}
      }
    }
  }
`
