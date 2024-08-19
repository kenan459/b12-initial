export type LegalLinkType = {
  slug: string
  isExternal?: boolean
  label: string
  'aria-label'?: string
}

export type ColumnType = {
  label: string
  items: LinkType[]
}

export type LinkType = {
  slug: string
  isExternal?: boolean
  label: string
}
