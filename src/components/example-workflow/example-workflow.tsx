import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

import IconUser from '@images/icons/orchestra-user.inline.svg'
import IconUserSenior from '@images/icons/orchestra-user-senior.inline.svg'
import IconSync from '@images/icons/icon-sync.inline.svg'
import IconCode from '@images/icons/icon-code.inline.svg'

const workflowVerticalLine = css`
  display: block;
  content: '';
  width: 1px;
  height: 30px;
  background: ${theme.colors.surface.border};
  position: absolute;
  left: 50%;
`

const Wrapper = styled.div`
  .workflow {
    margin-top: 60px;

    ${mq['lg']} {
      margin-top: 0;
    }

    svg {
      height: 12px;
      width: 12px;
      opacity: 0.5;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }

    .col-6 {
      flex: 0 0 50%;
      max-width: 50%;
      position: relative;
      width: 100%;
      min-height: 1px;
      padding-right: 15px;
      padding-left: 15px;
    }

    .row.--line-horizontal {
      position: relative;

      &::after {
        display: block;
        content: '';
        height: 1px;
        background: ${theme.colors.surface.border};
        position: absolute;
        width: calc(50% + 1px);
        left: 50%;
        bottom: 30px;
        transform: translate(-50%, 0);
      }
    }

    &__card {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 10px;
      background: $white;
      border-radius: 6px;
      box-shadow: 0 3px 47px rgba(0, 0, 0, 0.05);
      margin-bottom: 60px;
      text-align: center;
      position: relative;
      z-index: 10;

      ${mq['xl']} {
        padding: 20px;
        border-radius: 12px;
      }

      &-title {
        margin-bottom: 10px;
        font-size: 14px;
        color: ${theme.colors.text.regular};

        ${mq['xl']} {
          margin-bottom: 20px;
          font-size: 1rem;
        }
      }

      &-content {
        color: ${theme.colors.text.regular};
        font-weight: bold;
        font-size: 12px;

        [class*='fa-'] {
          color: fade-out($primary, 0.75);
        }

        ${mq['xl']} {
          font-size: 14px;
        }
      }

      &.--clean {
        box-shadow: none;
        background: none;
      }

      &.--line-bottom-center::after {
        ${workflowVerticalLine}
        top: 100%;
      }

      &.--line-top-center::before {
        ${workflowVerticalLine}
        bottom: 100%;
      }

      &.--line-vertical-center::before {
        ${workflowVerticalLine}
        height: auto;
        top: -30px;
        bottom: -30px;
      }
    }

    &__subcard {
      background: ${theme.colors.brand.accentLightest};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      border-radius: 6px;
      padding: 5px;
      margin: 5px 0;

      ${mq['xl']} {
        padding: 10px 5px;
        border-radius: 12px;
      }

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }

      &.--clean {
        margin: 0;
        padding: 0;
        background: none;
      }
    }
  }
`

const ExampleWorkflow = () => (
  <Wrapper>
    <div className="workflow">
      <div className="row --line-horizontal">
        <div className="col-6">
          <div className="workflow__card --line-bottom-center">
            <div className="workflow__card-title">Identify a new story</div>
            <div className="workflow__card-content">
              <div className="workflow__subcard">
                <IconUser /> Editor
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="workflow__card --line-top-center --line-bottom-center">
            <div className="workflow__card-title">Photograph a story</div>
            <div className="workflow__card-content">
              <div className="workflow__subcard">
                <IconUser /> Photographer
              </div>
              <div className="workflow__subcard --clean">
                <IconSync />
              </div>
              <div className="workflow__subcard">
                <IconUserSenior /> Senior photographer
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="workflow__card --line-top-center --line-bottom-center">
            <div className="workflow__card-title">Report a story</div>
            <div className="workflow__card-content">
              <div className="workflow__subcard">
                <IconUser /> Reporter
              </div>
              <div className="workflow__subcard --clean">
                <IconSync />
              </div>
              <div className="workflow__subcard">
                <IconUserSenior /> Senior reporter
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row --line-horizontal">
        <div className="col-6">
          <div className="workflow__card --line-top-center --line-bottom-center">
            <div className="workflow__card-title">Automatically crop, resize and color</div>
            <div className="workflow__card-content">
              <div className="workflow__subcard">
                <IconCode /> Machine
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="workflow__card --clean --line-vertical-center"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="workflow__card --line-top-center">
            <div className="workflow__card-title">Write headline and photo captions</div>
            <div className="workflow__card-content">
              <div className="workflow__subcard">
                <IconUser /> Copy editor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
)

export default ExampleWorkflow
