import { DEFAULT_PORTAL_ID } from './constants'

export type HSFeildType = {
  objectTypeId: string
  name: string
  value: string
}

export const makeHubspotRequest = async (
  fields: HSFeildType[],
  formId: string,
  pageName = '',
  pageUri = window.location.pathname,
  portalId = DEFAULT_PORTAL_ID
) => {
  const data = {
    fields,
    context: { pageUri, pageName },
  }

  await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  })
}

export const isValidEmail = (value: string) => {
  return value.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
}
