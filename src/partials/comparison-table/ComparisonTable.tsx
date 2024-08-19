import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

// Data
import IconCheckGreenRound from '../../images/icons/icon-check-green-round.inline.svg'
import IconCrossRedRound from '../../images/icons/icon-cross-red-round.inline.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  ${mq['lg']} {
    border: 1px solid ${theme.colors.surface.border};
    flex-direction: row;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 4px;

  ${mq['lg']} {
    width: 50%;
    border: none;
    border-radius: 0;
    border-right: 1px solid ${theme.colors.surface.border};

    &:last-of-type {
      border-right: none;
    }
  }

  + .comparison-table__column {
    margin-top: ${theme.spacing.section.smallest};

    ${mq['lg']} {
      margin-top: 0;
    }
  }
`

const ColumnHeader = styled.div`
  color: ${theme.colors.text.regular};
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  padding: 15px ${theme.spacing.section.smallest};
  background-color: ${theme.colors.surface.background};
  border-bottom: 1px solid ${theme.colors.surface.border};
`

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.section.smallest};
`

const ComparisonItem = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
  color: ${theme.colors.text.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  svg {
    flex-shrink: 0;
    margin-right: 6px;
  }
`

const RenderIcon = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? <IconCheckGreenRound /> : <IconCrossRedRound />
  }
  return null
}

const ComparisonTable = ({ comparisonItems }) => {
  return (
    <Wrapper>
      {comparisonItems.map((item, idx) => (
        <Column className="comparison-table__column" key={`column-${idx}`}>
          <ColumnHeader>{item.title}</ColumnHeader>
          <ColumnContent>
            {item.features.map((feature, idx) => (
              <ComparisonItem key={`item-${idx}`}>
                <RenderIcon value={feature.iconCheck} />
                {feature.title}
              </ComparisonItem>
            ))}
          </ColumnContent>
        </Column>
      ))}
    </Wrapper>
  )
}

export default ComparisonTable
