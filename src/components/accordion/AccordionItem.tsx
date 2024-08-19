import React, { useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { mq, theme } from '../../assets/theme'
import { useTranslation, Trans } from 'react-i18next'

// Types
type Props = {
  question: string
  answer: string | React.ReactNode // string comes as html
  idx: number
  itemAsComponent?: boolean
}

// Styles
const Wrapper = styled.div`
  border-top: 1px solid ${theme.colors.surface.border};

  &:last-of-type {
    border-bottom: 1px solid ${theme.colors.surface.border};
  }
`

const Toggle = styled.button`
  background: none;
  border: 0;
  border-radius: 0;
  margin: 0;
  text-align: left;
  font-size: 16px;
  line-height: 25px;
  color: ${theme.colors.text.dark};
  padding-inline: 0;
  padding-block: 16px;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  cursor: pointer;

  ${mq['md']} {
    font-size: 18px;
    line-height: 30px;
    padding-block: 24px;
  }

  &:focus-visible {
    outline: 0;
    box-shadow: 0px 0px 0px 4px rgba(105, 95, 246, 0.38);
  }
`

const ToggleIcon = styled.div<{ active: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) => (props.active ? `transparent` : theme.colors.brand.accent)};
  position: relative;
  flex-shrink: 0;
  transition: ${theme.transition[1]};

  &::before {
    display: block;
    content: '';
    width: 9px;
    height: 1px;
    background: ${(props) =>
      props.active ? theme.colors.brand.accent : theme.colors.surface.background};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ${(props) =>
    !props.active &&
    `
      &::after {
        display: block;
        content: '';
        width: 9px;
        height: 1px;
        background: ${theme.colors.surface.background};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-90deg);
      }
  `}
`

const Panel = styled(motion.div)`
  overflow: hidden;
`

const PanelContent = styled.div`
  padding-bottom: 16px;

  ${mq['md']} {
    padding-bottom: 24px;

    li {
      font-size: 18px;
      line-height: 25px;
      color: ${theme.colors.text.regular};
    }
  }
`

const AccordionItem = ({ question = '', answer = '', idx = 0, itemAsComponent }: Props) => {
  const [active, setActive] = useState(false)
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Toggle
        type="button"
        aria-expanded={active}
        aria-controls={`accordion-panel-${idx}`}
        id={`accordion-item-${idx}`}
        onClick={() => setActive(!active)}
      >
        {t(question)}
        <ToggleIcon active={active} />
      </Toggle>
      <Panel
        id={`accordion-panel-${idx}`}
        role="region"
        aria-labelledby={`accordion-item-${idx}`}
        initial={{ height: 0 }}
        animate={{
          height: active ? '100%' : '0',
        }}
        exit={{ height: 0 }}
      >
        {itemAsComponent && React.isValidElement(answer) ? (
          <PanelContent>
            <Trans t={t}>{answer}</Trans>
          </PanelContent>
        ) : (
          <PanelContent
            dangerouslySetInnerHTML={{
              __html:
                answer && typeof answer === 'string'
                  ? answer.includes('<p>') || answer.includes('</p>')
                    ? answer
                    : `<p>${answer}</p>`
                  : '',
            }}
          />
        )}
      </Panel>
    </Wrapper>
  )
}

export default AccordionItem
