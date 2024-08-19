import React from 'react'
import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

// Components
import TextIcon from '../../components/text-icon/TextIcon'
import iconMotionEffectPopUp from '../../components/text-icon/iconMotionEffectPopUp'
import SectionNextHeader from '../../components/section-next/SectionNextHeader'
import Title from '../../components/title/Title'

// Images
import IconRocket from '../../images/icons/rocket.inline.svg'
import IconIdeaBulb from '../../images/icons/simple.inline.svg'
import IconCredible from '../../images/icons/credible.inline.svg'
import IconHeart from '../../images/icons/heart.inline.svg'
import Computer from '../../images/icons/design.inline.svg'
import Subtitle from '../../components/subtitle/Subtitle'
import SectionNext from '../../components/section-next/SectionNext'

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

const CatchyBusinessNameElements = () => {
  return (
    <SectionNext borderTop container={{ verticalAlign: 'center' }}>
      <SectionNextHeader align="center">
        <Title as="h3">What are the elements of a catchy business name?</Title>
        <Subtitle>
          Your brand name should communicate your business’ mission, values, and differentiators,
          and your customers should understand what you're all about upon hearing the name. These
          best practices help create a new business name that resonates with the audience you want
          to attract.
        </Subtitle>
      </SectionNextHeader>
      <Items>
        <TextIcon
          title="Memorable"
          text="Want conversions, repeat business, and referrals? If customers can’t recall your business name, those are hard to come by. Choose a business name that easily sticks in people's minds."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconHeart />}
        />
        <TextIcon
          title="Simple"
          text="Simplicity helps ensure your audience remembers your brand name. Keep it short and easy to spell if you want potential customers to find your company online and recommend you to others."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCredible />}
        />
        <TextIcon
          title="Creative"
          text="If your brand name is too straightforward and generic, it won’t stand out from other businesses in your industry. Think of one that’s clever and unique but still easy to understand. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconIdeaBulb />}
        />
        <TextIcon
          title="Available"
          text="Your new brand needs a domain name that matches or closely resembles your company name. Check domain name availability and confirm that no other companies already use the name. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Searchable"
          text="A good business name is easy to find online, including at the top of search engine results, review websites, and social media platforms."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<Computer />}
        />
      </Items>
    </SectionNext>
  )
}

export default CatchyBusinessNameElements
