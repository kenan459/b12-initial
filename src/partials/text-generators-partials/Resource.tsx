import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { theme } from '@styles/theme'

// Components
import Title from '@components/title/Title'
import LinkWithIcon from '@components/link-with-icon/LinkWithIcon'

type Props = {
  image: ReactNode
  title: string
  link: string
}

const ImageWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
`

const StyledTitle = styled(Title)`
  margin: 24px 0;
`

const Resource = ({ title, link, image }: Props) => {
  return (
    <div>
      <ImageWrapper>{image}</ImageWrapper>
      <StyledTitle as="h4" light>
        {title}
      </StyledTitle>
      <LinkWithIcon href={link} label="Read more" color={theme.colors.text.white} />
    </div>
  )
}

export default Resource
