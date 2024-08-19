import React from 'react'
import styled from '@emotion/styled'
import { mq } from '@styles/theme'

// Components
import Text from '@components/text/Text'

// Images
import IconMinus from '@images/icons/icon-minus-gray.inline.svg'
import IconCheckmark from '@images/icons/icon-checkmark.inline.svg'

// Types
export type TFeature = {
  title: string
  competitor1: string
  competitor2: string
  competitor1note1?: boolean
  competitor1note2?: boolean
  competitor2note1?: boolean
  competitor2note2?: boolean
}
// Styles

import { FeaturesItem } from '@partials/pricing-hero/PricingFeatures.styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: auto;
  margin: 10px 0;
`

const FeaturesRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${mq['md']} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledFeaturesItem = styled(FeaturesItem)`
  display: flex;
  align-items: center;
  gap: 4px;
`

const FeaturesTitle = styled.h4`
  margin: 0px;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;

  ${mq['md']} {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`
const TableFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

const Note = styled.span`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`

const RenderCell = ({ value }) => {
  switch (value) {
    case 'true':
      return <IconCheckmark />
    case 'false':
      return <IconMinus />
    default:
      return <span dangerouslySetInnerHTML={{ __html: value }} />
  }
}

const FeatureComparison = ({ data }) => {
  const tableData = JSON.parse(data)

  return (
    <Wrapper>
      <FeaturesRow>
        <FeaturesItem></FeaturesItem>
        <FeaturesItem>
          <h4>{tableData.competitor1_title}</h4>
        </FeaturesItem>
        <FeaturesItem>
          <h4>{tableData.competitor2_title}</h4>
        </FeaturesItem>
      </FeaturesRow>
      {tableData.features &&
        tableData.features.map((item: TFeature, idx: number) => (
          <FeaturesRow key={`feature-item-${idx}`}>
            <FeaturesItem>
              <FeaturesTitle>{item.title}</FeaturesTitle>
            </FeaturesItem>
            <StyledFeaturesItem>
              <RenderCell value={item.competitor1} />
              {item.competitor1note1 && <sup>*</sup>}
              {item.competitor1note2 && <sup>**</sup>}
            </StyledFeaturesItem>
            <StyledFeaturesItem>
              <RenderCell value={item.competitor2} />
              {item.competitor2note1 && <sup>*</sup>}
              {item.competitor2note2 && <sup>**</sup>}
            </StyledFeaturesItem>
          </FeaturesRow>
        ))}
      <TableFooter>
        <Text>
          {tableData.note1 && (
            <Note>
              <sup>* </sup>
              {tableData.note1}
            </Note>
          )}
          {tableData.note2 && (
            <Note>
              <sup>** </sup>
              {tableData.note2}
            </Note>
          )}
        </Text>
      </TableFooter>
    </Wrapper>
  )
}

export default FeatureComparison
