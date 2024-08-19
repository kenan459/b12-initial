import { theme } from '../../assets/theme'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { Link } from 'gatsby'
import { IGatsbyImageData, GatsbyImage, StaticImage } from 'gatsby-plugin-image'

// Types
type TPostPreviewCompact = {
  title: string
  permalink: string
  image?: IGatsbyImageData
  className?: string
  light?: boolean
}

// Styles

const Card = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 80px 1fr;
  align-items: flex-start;
  text-align: left;
`

const CardImageLink = styled(Link)`
  display: block;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.15s ease-in-out;
  margin-top: 5px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 5px 31px -1px rgb(0 0 0 / 27%);
    transition: all 0.15s ease-in-out;
  }
`

const CardTitleLink = styled(Link, {
  shouldForwardProp: isPropValid,
})<{ light?: boolean }>`
  font-size: 16px;
  line-height: 24px;

  text-decoration: none;
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.regular)};

  &:hover {
    text-decoration: underline;
  }
`

const PostPreviewCompact = ({
  title,
  permalink,
  image,
  className,
  light = false,
}: TPostPreviewCompact) => (
  <Card className={className}>
    <CardImageLink to={permalink} aria-label={`Click to learn more about ${title}`}>
      {image ? (
        <GatsbyImage image={image} alt={title} />
      ) : (
        <StaticImage
          src="../../../assets/uploads/giving-feedback.png"
          width={80}
          height={50}
          alt={title}
        />
      )}
    </CardImageLink>
    <CardTitleLink light={light} to={permalink}>
      {title}
    </CardTitleLink>
  </Card>
)

export default PostPreviewCompact
