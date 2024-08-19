import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

// Components
import TextIcon from '../../components/text-icon/TextIcon'
import iconMotionEffectPopUp from '../../components/text-icon/iconMotionEffectPopUp'
import SectionNextHeader from '../../components/section-next/SectionNextHeader'
import Title from '../../components/title/Title'
import Subtitle from '../../components/subtitle/Subtitle'
import SectionNext from '../../components/section-next/SectionNext'

// Images
import IconRocket from '../../images/icons/rocket.inline.svg'
import IconIdeaBulb from '../../images/icons/simple.inline.svg'
import IconCredible from '../../images/icons/credible.inline.svg'
import IconHeart from '../../images/icons/heart.inline.svg'
import IconCheck from '../../images/icons/icon-checkmark.inline.svg'

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${mq['sm']} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq['lg']} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const CTAComponents = () => {
  return (
    <SectionNext borderTop container={{ verticalAlign: 'center' }}>
      <SectionNextHeader align="center">
        <Title as="h3">Components of calls to action that convert</Title>
        <Subtitle>
          The best CTAs drive users to take immediate action, such as downloading a free resource or
          completing a purchase. The best CTAs are clear, concise, easy to understand, and relevant
          to the content they support.
        </Subtitle>
        <Subtitle>
          While there are proven best practices for calls to action, there are no rigid rules. What
          works well on an ecommerce website probably won't perform the same for a service provider
          like a consultant. Test various options to find what works best for your leads and
          clients.
        </Subtitle>
      </SectionNextHeader>
      <Items>
        <TextIcon
          title="Actionable"
          text={
            'Use commanding, action-driven verbs like "Buy now" or "Start for free" that make the reader feel like they must take action.'
          }
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCheck />}
        />
        <TextIcon
          title="Persuasive"
          text="A persuasive, benefits-oriented call to action motivates the reader to take the next step. Emphasize what they'll gain from completing a certain action, like scheduling a call."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconIdeaBulb />}
        />
        <TextIcon
          title="Personalized"
          text="Personalized CTAs convert 200% better than the default versions. This approach allows you to create a personal connection with the user and makes it more likely that they’ll take action."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconHeart />}
        />
        <TextIcon
          title="Short"
          text="Keep your CTA brief and to the point — five words or less. Longer CTAs may confuse the reader or lose their attention."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCredible />}
        />
        <TextIcon
          title="Urgent"
          text="An element of urgency gets the reader to act while you still have their attention. Use phrases like “limited time” and “today only” to get them to take immediate action."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
      </Items>
    </SectionNext>
  )
}

export default CTAComponents
