import { useSiteMetadata } from '../../hooks/useSiteMetadata'

import { SocialLinksWrapper, SocialLink } from './SocialStrip.styles'

import IconX from './images/x.inline.svg'
import IconFacebook from './images/facebook.inline.svg'
import IconYoutube from './images/youtube.inline.svg'
import IconInstagram from './images/instagram.inline.svg'

const SocialStrip = () => {
  const { social_links } = useSiteMetadata()

  return (
    <SocialLinksWrapper>
      <SocialLink href={social_links.twitter} target="_blank" aria-label="Contact us on Twitter">
        <IconX />
      </SocialLink>
      <SocialLink href={social_links.facebook} target="_blank" aria-label="Contact us on Facebook">
        <IconFacebook />
      </SocialLink>
      <SocialLink href={social_links.youtube} target="_blank" aria-label="See us on YouTube">
        <IconYoutube />
      </SocialLink>
      <SocialLink href={social_links.instagram} target="_blank" aria-label="See us on Instagram">
        <IconInstagram />
      </SocialLink>
    </SocialLinksWrapper>
  )
}

export default SocialStrip
