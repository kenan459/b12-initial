import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { matchTagTitle } from '@components/directory/helpers'

// Components
import Title from '@components/title/Title'

// Types
import { TGalleryTag } from '@hooks/useWebsiteGalleryQuery'

type TDirectoryCardItem = {
  title: string
  description?: string
  permalink: string
  tags?: string[]
  image?: IGatsbyImageData
  screenshot?: IGatsbyImageData
}

import {
  DirectoryItemCard,
  DirectoryItemLink,
  DirectoryItemTag,
  DirectoryItemTagsWrapper,
  DirectoryItemTitleLink,
  ImageLink,
} from './DirectoryItemCard.Styles'

const DirectoryItem = ({
  item,
  tags,
}: {
  item: TDirectoryCardItem
  idx?: number
  tags?: TGalleryTag[]
}) => {
  const itemImage = item.image ? item.image : item.screenshot

  return (
    <DirectoryItemCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {itemImage && (
        <ImageLink to={item.permalink}>
          <GatsbyImage image={itemImage} alt={item.title} />
        </ImageLink>
      )}

      <Title as="h3" textStyle="h4">
        <DirectoryItemTitleLink to={item.permalink} aria-label={item.title}>
          {item.title}
        </DirectoryItemTitleLink>
      </Title>
      {item.tags && tags && (
        <DirectoryItemTagsWrapper>
          {item.tags
            .filter((tag: string) => tag !== 'all')
            .map((tag: string, idx: number) => (
              <DirectoryItemTag key={`directory-item-tag-${idx}`}>
                {matchTagTitle(tags, tag)}
              </DirectoryItemTag>
            ))}
        </DirectoryItemTagsWrapper>
      )}
      <DirectoryItemLink to={item.permalink}>Visit page</DirectoryItemLink>
    </DirectoryItemCard>
  )
}

export default DirectoryItem
