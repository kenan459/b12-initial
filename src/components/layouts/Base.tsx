import React from 'react'

import { Global } from '@emotion/react'
import globalStyles from '../../assets/global-styles'

import GDPR from '../gdpr/GDPR'

export type TLayoutBase = {
  children: React.ReactNode
  gdprHidden?: boolean
}

const LayoutBase = ({ children, gdprHidden = false }: TLayoutBase) => {
  return (
    <>
      <Global styles={globalStyles}></Global>
      {children}
      {!gdprHidden && <GDPR />}
    </>
  )
}

export default LayoutBase
