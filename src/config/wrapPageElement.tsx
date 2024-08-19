import I18nProvider from './i18nProvider'

const wrapPageElement = ({ element, props }) => {
  return <I18nProvider element={element} props={props} />
}

export { wrapPageElement }
