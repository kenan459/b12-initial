import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'
import { motion } from 'framer-motion'
import { Button } from '@components/button/Button'
import { Link } from 'gatsby'

export const HeroCTAWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`

export const HeroCTAButton = styled(Button)`
  font-size: 16px;
  line-height: 20px;
  width: 50%;
  padding: 15px 20px;
  white-space: normal;
  align-items: center;

  &.disabled {
    background-color: ${theme.colors.surface.borderLight};
    color: ${theme.colors.text.light};
  }

  &:first-of-type {
    border-radius: 3px 0 0 3px;
  }

  &:last-of-type {
    border-radius: 0 3px 3px 0;
  }

  ${mq['md']} {
    max-width: 250px;
  }
`

export const GalleryTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
`

export const GalleryTag = styled.button<{ active?: boolean }>`
  all: unset;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.15s ease-in-out;
  margin: 0 6px;
  font-weight: ${(props) => (props.active ? '700' : '400')};
  color: ${(props) => (props.active ? theme.palette.primary.default : theme.colors.text.light)};
  cursor: pointer;

  &:hover {
    color: ${theme.palette.primary.default};
  }
`

export const GalleryTagButton = styled.button<{ active?: boolean }>`
  all: unset;
  cursor: pointer;
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  padding: 6px 12px;
  color: ${(props) => (props.active ? theme.colors.text.white : theme.colors.text.light)};
  background: ${(props) =>
    props.active ? theme.colors.brand.accentDark : theme.colors.surface.background};
  transition: all 0.15s ease-in-out;
  border-radius: 30px;

  &:hover {
    color: ${theme.colors.text.white};
    background: ${theme.colors.brand.accentDark};
  }
`

export const GalleryItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  ${mq['md']} {
    grid-template-columns: 1fr 1fr;
  }
`

export const GalleryItemCard = styled(motion.div)`
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
export const GalleryItemTagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`

export const GalleryItemTag = styled.span`
  background-color: ${theme.colors.surface.background};
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 12px;
  line-height: 12px;
  color: ${theme.colors.text.light};
`

export const GalleryItemTitleLink = styled(Link)`
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: none;
  word-break: break-word;

  &:hover {
    text-decoration: underline;
  }
`

export const GalleryItemLink = styled(Link)`
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
