import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

import Title from '../../components/title/Title'
import { Section } from '../../components/section'
import TextIcon from '../../components/text-icon/TextIcon'

// Types
type ListProps = {
  icon: React.ReactNode
  title: string
  subtitle: string
}

type Props = {
  title: string
  subtitle: string
  list?: ListProps[]
}

// Styles
const StyledSection = styled(Section)`
  padding-top: 0;
  padding-bottom: 0;

  ${mq['lg']} {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const Wrapper = styled.div`
  background: ${theme.colors.brand.accentLightest};
  border-radius: 16px 80px;
  padding: 48px 32px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 24px;

  ${mq['md']} {
    border-radius: 36px 128px;
    padding: 64px 66px;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`

const Subtitle = styled.p`
  margin: 8px 0 0;

  ${mq['md']} {
    margin: 24px 0 0;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mq['md']} {
    gap: 40px;
  }
`

const SplitText = ({ title = '', subtitle = '', list = [] }: Props) => (
  <StyledSection>
    <Wrapper>
      <div>
        <Title as="h3">{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
      <List>
        {list.map((item, idx) => (
          <TextIcon
            key={`list-item-${idx}`}
            icon={item.icon}
            iconLight={true}
            title={item.title}
            text={item.subtitle}
            iconMotion={{
              initial: {
                opacity: 0,
                scale: 0,
              },
              transition: { delay: 0.5 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
            }}
          />
        ))}
      </List>
    </Wrapper>
  </StyledSection>
)

export default SplitText
