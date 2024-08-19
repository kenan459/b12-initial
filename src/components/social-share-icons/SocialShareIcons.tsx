import { SocialLinksWrapper, SocialLink } from '../social-strip/SocialStrip.styles'
import { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import IconTwitter from '@components/social-strip/images/twitter.inline.svg'
import IconFacebook from '@components/social-strip/images/facebook.inline.svg'
import IconLinkedIn from '@components/social-strip/images/linkedin.inline.svg'
import IconShare from '@images/icons/share-icon.inline.svg'

// Types
type Props = {
  vertical?: boolean
  className?: string
  sticky?: boolean
  marginTop?: boolean
  shouldTrackClicks?: boolean
}

// Styles
const StyledSocialLinksWrapper = styled(SocialLinksWrapper)<{
  vertical?: boolean
  sticky?: boolean
  marginTop?: boolean
}>`
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  ${(props) => (props.marginTop ? `margin-top: 20px;` : '')}
  justify-content: flex-start;

  ${(props) => (props.sticky === true ? `position: sticky; top: 200px;` : '')}
`
// Add social share links

const SocialShareIcons = ({
  vertical,
  className,
  sticky,
  marginTop = true,
  shouldTrackClicks,
}: Props) => {
  const [pageTitle, setPageTitle] = useState('')
  const [pageDescription, setPageDescription] = useState('')
  const [pageUrl, setPageUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const description =
        document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      setPageTitle(encodeURIComponent(document.title))
      setPageUrl(encodeURIComponent(window.location.href))
      setPageDescription(encodeURIComponent(description))
    }
  }, [])

  return (
    <StyledSocialLinksWrapper
      vertical={vertical}
      className={className}
      sticky={sticky}
      marginTop={marginTop}
    >
      <IconShare />
      <SocialLink
        className={shouldTrackClicks ? 'tracking-click-twitter' : ''}
        href={`https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`}
        data-card="summary_large_image"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <IconTwitter />
      </SocialLink>
      <SocialLink
        className={shouldTrackClicks ? 'tracking-click-facebook' : ''}
        href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&summary=${pageDescription}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <IconFacebook />
      </SocialLink>
      <SocialLink
        className={shouldTrackClicks ? 'tracking-click-linkedin' : ''}
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${pageDescription}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
      >
        <IconLinkedIn />
      </SocialLink>
    </StyledSocialLinksWrapper>
  )
}

export default SocialShareIcons
