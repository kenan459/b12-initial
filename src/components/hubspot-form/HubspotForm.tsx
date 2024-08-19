import React from 'react'
import { Script } from 'gatsby'

import { FormWrapper } from './HubspotForm.styles'
import { DEFAULT_PORTAL_ID, DEFAULT_REGION } from './constants'

type THubspotForm = {
  className?: string
  region?: string
  portalId?: string
  formId: string
  /** Provide unique element ID
   * If you need two forms on one page, be sure that IDs are unique.
   */
  formElementId: string
}

export const HubspotForm = ({
  region = DEFAULT_REGION,
  portalId = DEFAULT_PORTAL_ID,
  formId,
  formElementId,
  className,
}: THubspotForm) => {
  const createHubspotForm = (id: string) => {
    // @ts-ignore
    hbspt.forms.create({
      region,
      portalId,
      formId,
      target: `#hbspt-form-wrapper-${id}`,
    })
  }

  return (
    <FormWrapper className={className}>
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        onLoad={() => createHubspotForm(formElementId)}
      />
      <div className="hbs-form" id={`hbspt-form-wrapper-${formElementId}`} />
    </FormWrapper>
  )
}
