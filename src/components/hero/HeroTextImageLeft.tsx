import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq, theme } from '../../assets/theme'

import Container from '../container/Container'
import Title from '../../components/title/Title'

import ShapeFilled from './images/shape-filled.inline.svg'
import ShapeOutline from './images/shape-outline.inline.svg'

type Props = {
  title: string
  text?: React.ReactNode
  image?: React.ReactNode
}

// Styles
const SectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
`

const Wrapper = styled.div`
  overflow: hidden;
  background: ${theme.colors.brand.accentLightest};
  padding: ${theme.spacing.section.xxsmall} 0;

  ${mq['md']} {
    padding: ${theme.spacing.section.small} 0;
  }
`

const Content = styled.div`
  display: grid;

  ${mq['md']} {
    grid-template-columns: 30% 1fr;
    gap: 40px;
  }
`

const ImageWrapper = styled.div`
  display: grid;
  place-content: center;
  margin-bottom: ${theme.spacing.large};

  ${mq['md']} {
    margin-bottom: 0;
  }
`

const Header = styled.div`
  p {
    margin-bottom: 30px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`

const shapeBaseStyles = css`
  position: absolute;
  height: auto;

  ${mq['md']} {
    top: 50%;
    left: -500px;
    width: auto;
    transform: translateY(-50%) rotate(-230deg);
  }
`

const StyledShapeFilled = styled(ShapeFilled)`
  ${shapeBaseStyles}

  ${mq['md']} {
  }
`

const StyledShapeOutline = styled(ShapeOutline)`
  ${shapeBaseStyles}

  ${mq['md']} {
    left: -700px;
  }
`

const HeroTextImageLeft = ({ title = '', text = '', image }: Props) => (
  <SectionWrapper>
    <Wrapper>
      <Container>
        <Content>
          <ImageWrapper>{image}</ImageWrapper>
          <Header>
            <StyledTitle as="h1">{title}</StyledTitle>
            {text}
          </Header>
        </Content>
      </Container>
    </Wrapper>
    <StyledShapeOutline />
    <StyledShapeFilled />
  </SectionWrapper>
)

export default HeroTextImageLeft
