import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import OrchestraLogo from '@components/orchestra/OrchestraLogo'
import { Link } from 'gatsby'

// Icons
import IconGit from '@images/icons/github.inline.svg'
import IconComments from '@images/icons/streamline.inline.svg'

// Styles

import { Logo } from '@components/footer/FooterCopyright.styles'
import Container from '@components/container/Container'

const Wrapper = styled.div`
  padding: 30px 0;
  border-top: 1px solid ${theme.palette.gray.light};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  ${mq['md']} {
    flex-wrap: nowrap;
  }
`
const MadeWithLove = styled.span`
  font-size: 14px;
  line-height: 24px;
  display: inline-block;
  margin: 0 20px px 0 0;
  color: ${theme.colors.text.light};

  flex: 1 1 100%;
  order: 10;
  margin-top: 30px;

  ${mq['md']} {
    order: initial;
    margin-top: 0;
  }
`

const HeartWrapper = styled.span`
  color: red;
`
const IconLinksContainer = styled.div`
  display: flex;

  ${mq['md']} {
    margin-left: auto;
  }
`

const B12Logo = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-right: 40px;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const StyledLogo = styled(Logo)`
  margin-right: 0px;
`

const IconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: 2px solid ${theme.colors.surface.border};
  border-radius: 50%;
  margin: 0 7px;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  color: #160e33;

  &:hover {
    border-color: ${theme.colors.brand.accent};

    svg path {
      fill: ${theme.colors.brand.accent};
    }
  }

  svg {
    height: 16px;
    width: 16px;

    path {
      fill: ${theme.colors.text.dark};
    }
  }
`

const FooterOrchestra = () => {
  return (
    <Container>
      <Wrapper>
        <B12Logo to="/" aria-label="Click to go to home page">
          <StyledLogo />
          <OrchestraLogo />
        </B12Logo>
        <MadeWithLove>
          Made with <HeartWrapper>♥</HeartWrapper> by B12
        </MadeWithLove>
        <IconLinksContainer>
          <IconLink>
            <IconGit />
          </IconLink>
          <IconLink>
            <IconComments />
          </IconLink>
        </IconLinksContainer>
      </Wrapper>
    </Container>
  )
}

export default FooterOrchestra
