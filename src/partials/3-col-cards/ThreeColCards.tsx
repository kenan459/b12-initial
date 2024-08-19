import { Link } from 'gatsby'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { mq, theme } from '../../assets/theme'

import { SectionTitle } from '../../components/section'

type TThreeColCards = {
  title?: string
  ctaText?: string
  ctaUrl?: string
  children: React.ReactNode
  light?: boolean
}

const Wrapper = styled.div`
  & + & {
    margin-top: 60px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  gap: 20px;

  ${SectionTitle} {
    margin: 0;
    text-align: left;
  }

  ${mq['md']} {
    flex-direction: row;
    align-items: center;
  }
`

const StyledSectionTitle = styled(SectionTitle)<{ light?: boolean }>`
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.regular)};
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  margin: 0;

  ${mq['md']} {
    font-size: 32px;
    line-height: 40px;
  }
`

const Cta = styled(Link, {
  shouldForwardProp: isPropValid,
})<{ light?: boolean }>`
  flex-shrink: 0;
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
  text-decoration: none;
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.light)};

  svg {
    fill: ${(props) => (props.light ? theme.colors.text.white : '#84839c')};
    transition: all 0.15s ease-in-out;
  }

  &:hover {
    svg {
      transform: translate(5px, 0);
    }
  }

  ${mq['md']} {
    font-size: 24px;
    line-height: 24px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  row-gap: 60px;

  ${mq['md']} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ThreeColCards = ({
  title = 'Read next',
  ctaText = 'See all',
  ctaUrl = '',
  children,
  light = false,
}: TThreeColCards) => (
  <Wrapper>
    <Header>
      <StyledSectionTitle light={light} textStyle="h3">
        {title}
      </StyledSectionTitle>
      {ctaUrl && (
        <Cta light={light} to={ctaUrl}>
          {ctaText}{' '}
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="nonzero" d="M0 9h12.17l-5.59 5.59L8 16l8-8-8-8-1.41 1.41L12.17 7H0z" />
          </svg>
        </Cta>
      )}
    </Header>
    <Content>{children}</Content>
  </Wrapper>
)

export default ThreeColCards
