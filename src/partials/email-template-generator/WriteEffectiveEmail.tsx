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

const WriteEffectiveEmail = () => {
  return (
    <SectionNext borderTop container={{ verticalAlign: 'center' }}>
      <SectionNextHeader align="center">
        <Title as="h3">How to write an effective email for your customers</Title>
        <Subtitle>
          The best emails inspire readers to take action, whether visiting your website, scheduling
          a consultation, or referring a friend to your business. When customizing your email
          template, try to include the following ingredients.
        </Subtitle>
      </SectionNextHeader>
      <Items>
        <TextIcon
          title="Incentives"
          text="Offer value in exchange for someone’s email address (e.g., access to exclusive content or a discount code) and use similar incentives to encourage them to purchase your services."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconRocket />}
        />
        <TextIcon
          title="Catchy subject line "
          text="Vague, boring subject lines may mean someone never even opens the email you spent time on. Write an attention-grabbing subject line that entices contacts to learn more."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconIdeaBulb />}
        />
        <TextIcon
          title="Looks great on a mobile device"
          text={
            <p>
              Responsive emails are a requirement now, since{' '}
              <a href="https://easysendy.com/blog/mobile-email-open-statistics/#:~:text=What%20percentage%20of%20emails%20are,subscribers%20for%20checking%20the%20inboxes.">
                62% of emails
              </a>{' '}
              are opened on mobile. Use responsive email templates to ensure your message looks
              great on Apple and Android devices.
            </p>
          }
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<Computer />}
        />
        <TextIcon
          title="Minimal"
          text="Concise copy in a simple design gives the reader a clear focus. Try to include your call to action above the fold so they can see the next steps without scrolling."
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconCredible />}
        />
        <TextIcon
          title="Personalization"
          text={
            <p>
              Emails with personalization in the subject line have{' '}
              <a href="https://www.zippia.com/advice/email-subject-line-statistics/">
                50% higher open rates
              </a>
              . Personalize your email template with the recipient’s name, previously purchased
              services, or client milestones.
            </p>
          }
          vertical
          iconMotion={iconMotionEffectPopUp}
          icon={<IconHeart />}
        />
      </Items>
    </SectionNext>
  )
}

export default WriteEffectiveEmail
