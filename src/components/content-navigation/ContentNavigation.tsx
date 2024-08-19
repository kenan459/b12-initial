import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme, mq } from '../../assets/theme'
import { Link } from 'gatsby'
import useMediaQuery from '../../hooks/useMediaQuery'

import Container from '../container/Container'

import ChevronIcon from '../../images/icon-arrow-down.inline.svg'

import { TCategory } from '../../hooks/useRCCategoriesQuery'
import { TIntegrationTag } from '../../hooks/useIntegrationsQuery'

type TContentNavigationLink = {
  id: string
  label: string
  onClick?: (tag: string) => void
  to?: string
  items: null | TCategory[] | TIntegrationTag[]
}

type TContentNavigation = {
  onFilterItemClick?: (tag: string) => void
  links: TContentNavigationLink[]
}

const Wrapper = styled.div`
  border-bottom: 1px solid ${theme.colors.surface.borderLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
  position: relative;

  ${mq['md']} {
    gap: 40px;
    flex-direction: row;
    justify-content: center;
  }
`

const Dropdown = styled.div`
  display: none;
  background: ${theme.colors.surface.background};
  padding-block: 15px;
  margin-top: 15px;

  ${mq['md']} {
    position: absolute;
    padding: 30px;
    margin-top: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: 100;
    background: ${theme.colors.surface.default};
    border-top: 1px solid ${theme.colors.surface.borderLight};
    box-shadow: 0 16px 16px rgb(0 0 0 / 15%);
  }
`

const MenuItem = styled.div`
  width: 100%;

  ${mq['md']} {
    width: auto;

    &:hover {
      ${Dropdown} {
        display: block;
      }
    }
  }
`

const linkStyles = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${theme.palette.gray.medium};
  font-size: 20px;
  line-height: 20px;
  gap: 5px;
  cursor: pointer;
  padding-inline: 15px;

  // Chevron
  > svg {
    transition: ${theme.transition[1]};
    width: 8px;

    path {
      stroke: ${theme.palette.gray.medium};
    }
  }

  &:hover {
    color: ${theme.palette.primary.default};

    /* Trick for dropdown */
    ${mq['md']} {
      margin-block: -40px;
      padding-block: 40px;
    }

    svg {
      transform: rotate(-180deg);

      path {
        stroke: ${theme.palette.primary.default};
      }
    }
  }
`

const MenuItemLink = styled.a`
  ${linkStyles}
`

const MenuItemDirectLink = styled(Link)`
  ${linkStyles}
`

const DropdownLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0 20px;

  ${mq['md']} {
    grid-template-columns: repeat(4, 1fr);
  }
`

const DropdownLink = styled(Link)`
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: ${theme.colors.text.gray};
  padding: 8px 0;

  &:hover {
    color: ${theme.palette.primary.default};
  }
`

const DropdownFilterLink = styled.button`
  all: unset;
  display: inline-block;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: ${theme.colors.text.gray};
  padding: 8px 0;

  &:hover {
    color: ${theme.palette.primary.default};
  }
`

const ContentNavigation = ({ links, onFilterItemClick }: TContentNavigation) => {
  const [activeDropdown, setActiveDropdown] = useState('')
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`)

  return (
    <Wrapper>
      {links.map((item, idx) => (
        <MenuItem key={`menu-item-${idx}`}>
          {item.to ? (
            <MenuItemDirectLink to={item.to}>{item.label}</MenuItemDirectLink>
          ) : item.onClick ? (
            <MenuItemLink onClick={() => item.onClick?.(item.id)}>{item.label}</MenuItemLink>
          ) : (
            <>
              <MenuItemLink
                onClick={(e) => {
                  e.preventDefault()

                  if (matches) {
                    setActiveDropdown((prevState) => (prevState === item.id ? '' : item.id))
                  }
                }}
              >
                {item.label} <ChevronIcon />
              </MenuItemLink>
              {item.items && (
                <Dropdown
                  style={
                    matches
                      ? {
                          display: activeDropdown === item.id ? 'block' : 'none',
                        }
                      : undefined
                  }
                >
                  <Container>
                    <DropdownLinksWrapper>
                      {item.items
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((item, idx) => {
                          if (item.isFilter) {
                            return (
                              <DropdownFilterLink
                                key={`menu-dropdown-item-filter-${idx}`}
                                onClick={() => onFilterItemClick?.(item.tag)}
                              >
                                {item.title}
                              </DropdownFilterLink>
                            )
                          }

                          return (
                            <DropdownLink key={`menu-dropdown-item-${idx}`} to={item.permalink}>
                              {item.title}
                            </DropdownLink>
                          )
                        })}
                    </DropdownLinksWrapper>
                  </Container>
                </Dropdown>
              )}
            </>
          )}
        </MenuItem>
      ))}
    </Wrapper>
  )
}

export default ContentNavigation
