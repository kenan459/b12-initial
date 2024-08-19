import LayoutBase from './Base'
import { LayoutLoadingWrapper } from './LayoutLoadingWrapper'
import Navigation from '@components/navigation/Navigation'
import Footer from '@components/footer/Footer'
import PopupContainer from '@components/popup/PopupContainer'

type TLayoutMain = {
  ctaOnlyNav?: boolean
  pathname?: string
  children: React.ReactNode
  isLoading?: boolean
}

const LayoutMain = ({ ctaOnlyNav = false, pathname, children, isLoading = false }: TLayoutMain) => {
  return (
    <LayoutLoadingWrapper isLoading={isLoading}>
      <LayoutBase>
        <Navigation ctaOnly={ctaOnlyNav} />
        <main>{children}</main>
        <Footer />
        {pathname && <PopupContainer pathname={pathname} />}
      </LayoutBase>
    </LayoutLoadingWrapper>
  )
}

export default LayoutMain
