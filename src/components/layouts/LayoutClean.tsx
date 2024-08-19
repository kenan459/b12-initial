import React from 'react'
import LayoutBase from './Base'
import FooterMinimal from '../footer/FooterMinimal'

import { TLayoutBase } from './Base'

const LayoutClean = ({ children, gdprHidden = false, ...args }: TLayoutBase) => {
  return (
    <LayoutBase gdprHidden={gdprHidden} {...args}>
      <main>{children}</main>
      <FooterMinimal />
    </LayoutBase>
  )
}

export default LayoutClean
