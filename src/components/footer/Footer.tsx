import FooterNavigation from './FooterNavigation'
import FooterCopyright from './FooterCopyright'

// Styles
import { Wrapper, ContainerStyled } from './Footer.styles'

const Footer = () => {
  return (
    <Wrapper>
      <ContainerStyled>
        <FooterNavigation />
        <FooterCopyright />
      </ContainerStyled>
    </Wrapper>
  )
}

export default Footer
