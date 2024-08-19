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
import IconPeople from '../../images/icons/people.inline.svg'
import IconGlobe from '../../images/icons/globe.inline.svg'
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

const ProductServiceDescriptionGrid = () => {
  return (
    <SectionNext borderTop container={{ verticalAlign: 'center' }}>
      <SectionNextHeader align="center">
        <Title as="h3">
          How to create product descriptions and service descriptions that convert
        </Title>

        <Subtitle>
          You’re missing out on revenue if your descriptions are boring, generic, and lack the
          details potential customers are looking for. Each description should clearly and concisely
          explain your offering and why it's worth purchasing. Share important information about the
          features and benefits of your product or service, so website visitors understand what
          they’re getting and are compelled to buy. Below are some of the key characteristics of
          high-converting descriptions.
        </Subtitle>
      </SectionNextHeader>
      <Items>
        <TextIcon
          title="Proactively answer questions"
          text="What does your ideal buyer want to know before they purchase? Address the problems your service helps solve, what they gain from purchasing it, and what makes it better than your competition."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconPeople />}
        />
        <TextIcon
          title="Optimize for search engines"
          text="Do keyword research to find the specific words that can help your company rank higher on search engines. Optimize for these keywords by including them in page titles, meta descriptions, image tags, and more."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<Computer />}
        />
        <TextIcon
          title="Appeal to your target audience"
          text="The best descriptions create an emotional connection with the reader and elicit strong feelings. For example, divorce lawyers don’t only sell legal services, but also offer reduced stress, peace of mind, and a new beginning."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconHeart />}
        />
        <TextIcon
          title="Make them skimmable"
          text="Prospects won’t read long paragraphs about your products. Use bullet points for better readability so website visitors quickly understand what you’re selling in seconds."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Emphasize the benefits"
          text="Potential customers want to know about product details, but they care a lot more about the benefits. Nitty-gritty product specs don’t matter as much as how you’ll help relieve their pain points."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCredible />}
        />
        <TextIcon
          title="Capture your brand's tone and voice"
          text="Your product or service descriptions should align with the way your brand communicates across its website, via email, social media, and marketing content, whether in a conversational tone or more formally."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconIdeaBulb />}
        />
        <TextIcon
          title="Support with social proof"
          text={
            <p>
              Website visitors on the fence about buying from you are often swayed by reading
              reviews from real clients. Testimonials can{' '}
              <a href="https://boast.io/social-proof-statistics/">
                increase conversions on sales pages by up to 34%
              </a>
              .
            </p>
          }
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconGlobe />}
        />
      </Items>
    </SectionNext>
  )
}

export default ProductServiceDescriptionGrid
