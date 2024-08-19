import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

// Images
import IconCheckmark from '../../images/icons/icon-checkmark.inline.svg'

const PlansWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-radius: 4px;

  ${mq['lg']} {
    flex-direction: row;
    border: 1px solid ${theme.colors.surface.border};
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.colors.text.regular};
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 4px;
  margin-bottom: ${theme.spacing.section.smallest};

  &:last-of-type {
    margin-bottom: 0;
  }

  ${mq['lg']} {
    width: 25%;
    border: none;
    border-radius: 0;
    border-right: 1px solid ${theme.colors.surface.border};
    margin-bottom: 0;
    flex-grow: 1;

    &:last-of-type {
      border-right: 0;
    }
  }
`

const ColumnHeader = styled.div`
  background-color: ${theme.colors.brand.accentLightest};
  border-bottom: 1px solid ${theme.colors.surface.border};
  padding: 15px;

  ${mq['lg']} {
    min-height: 110px;
  }
`

const ColumnTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`

const Description = styled.div`
  font-size: 14px;
  line-height: 18px;
  margin: 0;
`

const ColumnContent = styled.div`
  padding: 20px 15px;
`

const FeatureItem = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  margin-bottom: 10px;
  line-height: 25px;

  &:last-of-type {
    margin-bottom: 0;
  }

  svg {
    margin-right: 10px;
    width: 16px;
  }
`

const ReviewsguidePlans = ({ plansList }) => {
  return (
    <PlansWrapper>
      {plansList.map((item, idx: number) => (
        <Column key={`plan-column-${idx}`}>
          <ColumnHeader>
            <ColumnTitle>{item.title}</ColumnTitle>
            <Description>{item.price}</Description>
          </ColumnHeader>
          <ColumnContent>
            {item.features.map((feature, idx: number) => (
              <FeatureItem key={idx}>
                <IconCheckmark />
                {feature}
              </FeatureItem>
            ))}
          </ColumnContent>
        </Column>
      ))}
    </PlansWrapper>
  )
}

export default ReviewsguidePlans
