// Helpers
import { HSFeildType, makeHubspotRequest } from '../../components/hubspot-form/helpers'
import { getIndustryByName } from '../../partials/slogan-generator/helpers'

// Types
import { TFormInfo } from '../../partials/slogan-generator/types'

export const retrieveFormInfoFromParams = (callback: (urlFormInfo: TFormInfo) => void) => {
  const params = new URLSearchParams(window.location.search)

  const urlInput = params.get('input') || ''
  const urlCity = params.get('city') || ''
  const urlRegion = params.get('region') || ''
  const urlCountry = params.get('country') || ''
  const urlIndustry = params.get('industry') || ''
  if (urlInput && (urlCity || urlRegion || urlCountry)) {
    const industryData = getIndustryByName(urlIndustry)
    const urlFormInfo = {
      customerInput: urlInput,
      industry: industryData,
      location: `${urlCity}, ${urlRegion}, ${urlCountry}`,
      city: urlCity,
      region: urlRegion,
      country: urlCountry,
      firstName: '',
      lastName: '',
      email: '',
    }
    callback(urlFormInfo)
  }
}

export const submitHubspotForm = async (
  formInfo: TFormInfo,
  keywordFeildName: string,
  formId: string,
  formName: string,
  generatorType: string,
  customFields: Array<HSFeildType> = [
    {
      objectTypeId: '0-1',
      name: keywordFeildName,
      value: formInfo.customerInput || '',
    },
  ]
) => {
  const fields = [
    ...customFields,
    {
      objectTypeId: '0-1',
      name: 'business_categories',
      value: formInfo.industry && formInfo.industry.name ? formInfo.industry.name : '',
    },
    {
      objectTypeId: '0-1',
      name: 'city',
      value: formInfo.city,
    },
    {
      objectTypeId: '0-1',
      name: 'state',
      value: formInfo.region,
    },
    {
      objectTypeId: '0-1',
      name: 'country',
      value: formInfo.country,
    },
    {
      objectTypeId: '0-1',
      name: 'firstname',
      value: formInfo.firstName,
    },
    {
      objectTypeId: '0-1',
      name: 'lastname',
      value: formInfo.lastName,
    },
    {
      objectTypeId: '0-1',
      name: 'email',
      value: formInfo.email,
    },
    {
      objectTypeId: '0-1',
      name: 'generator_type',
      value: generatorType,
    },
  ]
  try {
    await makeHubspotRequest(fields, formId, formName)
  } catch {
    console.error('Failed to send the hubspot form')
  }
}

export const scrollToItem = (className: string) => {
  const elem = document.getElementsByClassName(className)?.[0]
  if (elem) {
    const headerOffset = 45
    const elementPosition = elem.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

export const isFormEmpty = (formInfo: TFormInfo) => {
  return (
    formInfo.customerInput === '' ||
    (formInfo.city === '' && formInfo.region === '' && formInfo.country === '') ||
    formInfo.firstName === '' ||
    formInfo.lastName === '' ||
    formInfo.email === ''
  )
}

export const formatText = (text: string, HEADER_NAMES: string[]) => {
  const header = HEADER_NAMES.find((headerName) =>
    text.toLowerCase().includes(headerName.toLowerCase())
  )
  const boldPart = header ? text.slice(0, header.length + 1) : ''
  const normalPart = header ? text.slice(header.length + 1) : text
  return (
    <p>
      <b>{boldPart}</b>
      {normalPart}
    </p>
  )
}
