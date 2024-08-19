import { theme, mq } from '../../assets/theme'
import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { Link } from 'gatsby'
import { IGatsbyImageData, GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { truncate } from '../../helpers/string-helpers'

// Types
type TPostPreview = {
  title: string
  description: string
  permalink: string
  image?: IGatsbyImageData
  showLink?: boolean
  linkText?: string
  className?: string
  light?: boolean
}

// Styles

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

export const CardImageLink = styled(Link)`
  display: block;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 2px 5px 21px -1px rgb(0 0 0 / 17%);
  transition: all 0.15s ease-in-out;
  margin-bottom: 20px;

  ${mq['md']} {
    margin-bottom: 30px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 5px 31px -1px rgb(0 0 0 / 27%);
    transition: all 0.15s ease-in-out;
  }
`

export const CardTitle = styled.h2<{ light?: boolean }>`
  font-size: 18px;
  line-height: 25px;
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.dark)};
  font-weight: 500;
  margin: 0 0 10px;

  ${mq['md']} {
    font-size: 21px;
    line-height: 32px;
  }
`

export const CardTitleLink = styled(Link)`
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const CardDescription = styled.p<{ light?: boolean }>`
  font-size: 16px;
  line-height: 30px;
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.gray)};
  margin: 0;
`

export const CardLink = styled(Link, {
  shouldForwardProp: isPropValid,
})<{ light?: boolean }>`
  color: ${(props) => (props.light ? theme.colors.text.white : theme.colors.text.gray)};
  border-bottom: 1px solid rgba(115, 110, 132, 0.3);
  transition: all 0.15s ease-in-out;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;

  &:hover {
    color: ${(props) => (props.light ? theme.colors.text.gray : theme.colors.text.dark)};

    border-color: ${theme.colors.text.dark};
  }
`

const PostPreview = ({
  title,
  description,
  permalink,
  image,
  showLink = true,
  linkText = 'Read now',
  className,
  light = false,
}: TPostPreview) => (
  <Card className={className}>
    <CardImageLink to={permalink} aria-label={`Click to learn more about ${title}`}>
      {image ? (
        <GatsbyImage image={image} alt={title} />
      ) : (
        <StaticImage
          src="../../../assets/uploads/giving-feedback.png"
          width={380}
          height={280}
          alt={title}
        />
      )}
    </CardImageLink>
    <CardTitle light={light}>
      <CardTitleLink to={permalink}>{title}</CardTitleLink>
    </CardTitle>
    <CardDescription light={light}>{truncate(description, 200)}</CardDescription>
    {showLink && (
      <CardLink light={light} to={permalink} aria-label={`Click to learn more about ${title}`}>
        {linkText}
      </CardLink>
    )}
  </Card>
)

export default PostPreview
