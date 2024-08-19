import { TWebsiteGalleryItem, TGalleryTag, TCategory } from '@hooks/useWebsiteGalleryQuery'

export const filterGalleryTags = (tags: TGalleryTag[], category: TCategory) => {
  return tags.filter((tag) => tag.category === category || tag.category === 'generic')
}

export const filterGalleryItems = (items: TWebsiteGalleryItem[], selectedTag: string) =>
  items.filter((item) => {
    if (selectedTag === 'all') {
      return item
    }

    return !!item.tags.find((tag: string) => tag === selectedTag)
  })

export const matchTagTitle = (galleryTags: TGalleryTag[], tagId: string) => {
  const tag = galleryTags.find((tag: TGalleryTag) => tag.tag === tagId)
  return tag?.title
}
