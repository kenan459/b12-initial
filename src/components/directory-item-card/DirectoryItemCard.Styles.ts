import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

export const DirectoryItemCard = styled(motion.div)`
  img {
    border-radius: 4px;
  }
`

export const ImageLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 2px 5px 15px rgb(0 0 0 / 15%);
  transition: all 0.15s ease-in-out;

  ${mq['md']} {
    margin-bottom: 30px;
  }

  &:hover {
    transform: scale(1.05);
  }
`
export const DirectoryItemTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`

export const DirectoryItemTag = styled.span`
  background-color: ${theme.colors.surface.background};
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 12px;
  line-height: 12px;
  color: ${theme.colors.text.light};
`

export const DirectoryItemTitleLink = styled(Link)`
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: none;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`

export const DirectoryItemLink = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.palette.primary.default};

  &:hover {
    text-decoration: none;
  }
`

export const TagDescription = styled.p`
  margin-top: 20px;
  text-align: center;
  color: ${theme.colors.text.light};
`
