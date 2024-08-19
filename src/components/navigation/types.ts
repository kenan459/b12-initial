export type TNavigation = {
  ctaOnly?: boolean
}

export type NavItemType = {
  slug: string
  isExternal: boolean
  isDropdown?: boolean
  isButton?: boolean
  id?: string
  label: string
  dropdownItems: NavItemDropdownSectionType[]
  ctaLink: NavItemDropdwonCtaType
}

export type NavItemDropdownType = {
  slug: string
  label: string
  items: NavItemDropdownSectionType[]
  ctaLink: NavItemDropdwonCtaType
  onCloseDropdown: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}

export type NavItemDropdwonCtaType = {
  title: string
  url: string
}

export type NavItemDropdownSectionTitleType = {
  isAlternative?: boolean
}

export type NavItemDropdownSectionType = {
  title: string
  icon?: string
  slug: string
  description?: string
  items?: NavItemDropdownSectionItemsType[]
}

export type NavItemDropdownSectionItemsType = {
  title: string
  url: string
  category?: string
  icon: string
}

export type NavMenuItemExternalLinkType = {
  isButton?: boolean
}
