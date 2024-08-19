import { TFormInfo, TIndustry } from './types'
import industries from '../../data/business-categories.yaml'

export const standardizeSlogansArray = (slogans: Array<string>) => {
  if (slogans.length > 9) {
    return slogans.slice(0, 9)
  }
  return slogans
}

export const generateSlogans = async (
  formInfo: TFormInfo,
  setIsLoadingSlogans,
  setIsLoadingMoreSlogans,
  setSlogans,
  addMoreSlogans = false,
  slogans: string[] = []
) => {
  const slogansUrl = 'https://b12.io/lead_tools/generate_slogans/'

  addMoreSlogans ? setIsLoadingMoreSlogans(true) : setIsLoadingSlogans(true)
  const response = await makeGeneratorRequest(formInfo, slogansUrl)
  const generatedSlogans = standardizeSlogansArray(response)
  const newSlogans = addMoreSlogans ? [...slogans, ...generatedSlogans] : generatedSlogans
  setSlogans(newSlogans)
  addMoreSlogans ? setIsLoadingMoreSlogans(false) : setIsLoadingSlogans(false)
}

export const makeGeneratorRequest = async (
  formInfo: TFormInfo,
  url: string,
  input: Object = { input: formInfo.customerInput }
) => {
  const { city, region, country, industry } = formInfo
  const params = {
    ...input,
    city,
    region,
    country,
    industry_id: industry && industry.id ? industry.id.toString() : '',
  }
  return makeRequest(url, params)
}

const makeRequest = async (url: string, params = {}) => {
  const data = new URLSearchParams(params)
  const response = await fetch(url + '?' + data, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
  const responseData = await response.json()
  return responseData.data
}

export const getAddressItem = (
  addressItems: google.maps.GeocoderAddressComponent[],
  addressField: string
) => {
  return addressItems.find((item) => item.types.includes(addressField))?.long_name || ''
}

export const getIndustryByName = (industryName: string): TIndustry | null => {
  const result = industries.find((industry: TIndustry) => industry.name === industryName)
  return result || null
}
