import React from 'react'
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync'

// Styles
import {
  Wrapper,
  StyledContainer,
  FeaturesWrapper,
  FeaturesContainer,
  FeaturesTitle,
  FeaturesRow,
  FeaturesHead,
  FeaturesGroup,
  FeaturesItem,
  FeaturesPlan,
  Feature,
  FeatureString,
} from './PricingFeatures.styles'

// Images
import IconMinus from '../../images/icons/icon-minus-gray.inline.svg'
import IconCheckmark from '../../images/icons/icon-checkmark.inline.svg'

// Data
import plans from '../../data/pricing/plans.yaml'
import features from '../../data/pricing/features.yaml'

const RenderCell = ({ value }) => {
  if (typeof value === 'boolean') {
    return value ? <IconCheckmark /> : <IconMinus />
  }

  if (typeof value === 'string') {
    return <FeatureString dangerouslySetInnerHTML={{ __html: value }} />
  }

  return null
}

const PricingFeatures = () => {
  return (
    <ScrollSync>
      <Wrapper>
        <FeaturesWrapper>
          <StyledContainer>
            {/* Table header */}
            <ScrollSyncPane>
              <FeaturesHead>
                <FeaturesItem>
                  <FeaturesTitle>Features</FeaturesTitle>
                </FeaturesItem>
                {plans.map((plan, idx) => (
                  <FeaturesItem key={`plan-${idx}`}>
                    <FeaturesPlan>
                      {plan.title}
                      <span>
                        {plan.price.monthly === 'free' ? (
                          'Free'
                        ) : (
                          <>
                            {plan.price.monthly}
                            <span> / month</span>
                          </>
                        )}
                      </span>
                    </FeaturesPlan>
                  </FeaturesItem>
                ))}
              </FeaturesHead>
            </ScrollSyncPane>

            <ScrollSyncPane>
              <FeaturesContainer>
                {/* Groups */}
                {features.map((group, idx) => (
                  <React.Fragment key={`features-group-${idx}`}>
                    <FeaturesGroup>{group.title}</FeaturesGroup>
                    {group.items &&
                      group.items.map((item, idx) => (
                        <FeaturesRow key={`features-item-${idx}`}>
                          <FeaturesItem>
                            <Feature>
                              <h4>{item.title}</h4>
                              <p>{item.description}</p>
                            </Feature>
                          </FeaturesItem>
                          <FeaturesItem>
                            <RenderCell value={item.plans.starter} />
                          </FeaturesItem>
                          <FeaturesItem>
                            <RenderCell value={item.plans.basic} />
                          </FeaturesItem>
                          <FeaturesItem>
                            <RenderCell value={item.plans.professional} />
                          </FeaturesItem>
                          <FeaturesItem>
                            <RenderCell value={item.plans.advanced} />
                          </FeaturesItem>
                        </FeaturesRow>
                      ))}
                  </React.Fragment>
                ))}
              </FeaturesContainer>
            </ScrollSyncPane>
          </StyledContainer>
        </FeaturesWrapper>
      </Wrapper>
    </ScrollSync>
  )
}

export default PricingFeatures
