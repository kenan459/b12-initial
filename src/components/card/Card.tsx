/** Card component
 * You can pass any content to it. Example:
 * <Card>
 *  <GatsbyImage image={item.image} alt={item.title} />
 *  <Title as="h4">{item.title}</Title>
 *  <Text>{item.description}</Text>
 *  <LinkWithIcon label="Learn more" href={item.permalink} />
 * </Card>
 */

import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { motion } from 'framer-motion'

type TCard = {
  className?: string
  children: React.ReactNode
  shadowed?: boolean
  noBorder?: boolean
  bg?: string
  borderRadius?: string
}

const Card = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== 'borderRadius' && prop !== 'bg' && prop !== 'noBorder',
})<TCard>`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) => (props.noBorder ? '' : `border: 1px solid ${theme.colors.surface.border};`)}

  background: ${(props) => props.bg || ''};
  border-radius: ${(props) => props.borderRadius || '4px'};

  padding: 30px;
  gap: 16px;

  ${mq['md']} {
    padding: 40px;
  }

  .gatsby-image-wrapper {
    img {
      object-fit: contain !important;
    }
  }

  svg {
    max-width: 70px;
  }

  ${({ shadowed }) =>
    shadowed &&
    `
    border: 0;
    overflow: hidden;
    box-shadow: ${theme.shadows[2]};
    background-color: ${theme.colors.surface.default};

    .gatsby-image-wrapper {
      margin: -30px -30px 30px;

      ${mq['md']} {
        margin: -40px -40px 30px;
      }

      img {
        object-fit: cover !important;
      }
    }
  `}
`
export default Card
