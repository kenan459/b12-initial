import LayoutBase from './Base'
import FooterOrchestra from '@components/orchestra/FooterOrchestra'
import NavigationOrchestra from '@components/orchestra/NavigationOrchestra'

import { TLayoutBase } from './Base'

const LayoutOrchestra = ({ children, ...args }: TLayoutBase) => {
  return (
    <LayoutBase {...args}>
      <NavigationOrchestra />
      <main>{children}</main>
      <FooterOrchestra />
    </LayoutBase>
  )
}

export default LayoutOrchestra
