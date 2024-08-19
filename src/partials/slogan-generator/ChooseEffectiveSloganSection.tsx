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
import IconComment from '../../images/icons/comment.inline.svg'
import IconCheck from '../../images/icons/icon-checkmark.inline.svg'
import IconIdeaBulb from '../../images/icons/simple.inline.svg'
import IconCredible from '../../images/icons/credible.inline.svg'
import IconHeart from '../../images/icons/heart.inline.svg'
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

const ChooseEffectiveSloganSection = () => {
  return (
    <SectionNext borderTop container={{ verticalAlign: 'center' }}>
      <SectionNextHeader align="center">
        <Title as="h3">How to choose an effective slogan for your business</Title>
        <Subtitle>
          Amazing slogans are ones that succinctly define your company and service. When generating
          your slogan, try to make sure it contains the following ingredients
        </Subtitle>
      </SectionNextHeader>
      <Items>
        <TextIcon
          title="Succinct"
          text="It gets to the point and is only a few words -- making it easy for potential customers to write, remember, and repeat."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Memorable "
          text="Catchy slogans often leverage tricks like alliteration, rhyme, your company name to make it easier to remember. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconComment />}
        />
        <TextIcon
          title="On-brand"
          text="Create a slogan that reflects your brand values and the personality you're striving to convey to your target audience. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCheck />}
        />

        <TextIcon
          title="Different"
          text="Make your slogan stand out from other brands by using phrases and keywords that are unique to your company. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconIdeaBulb />}
        />
        <TextIcon
          title="Emotional"
          text="Great slogans tap into customers' aspirations, pain, or values. Slogans that can conjure up feelings and elicit an emotional reaction are more likely to stick."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconHeart />}
        />

        <TextIcon
          title="Timeless "
          text="Choose a slogan that will stay with you for the long haul and avoid things that are too gimmicky or trendy. Choose wording that can stand the test of time. "
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCredible />}
        />
      </Items>
    </SectionNext>
  )
}

export default ChooseEffectiveSloganSection
