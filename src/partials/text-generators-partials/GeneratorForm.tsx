import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { mq } from '../../assets/theme'

import TextInput from '../../components/text-input/TextInput'
import SearchSelectInput from '../../components/search-select-input/SearchSelectInput'
import ItemsWrapper from '../../components/items-wrapper/ItemsWrapper'
import LocationAutocompleteInput from '../../components/location-autocomplete-input/LocationAutocompleteInput'

// Data
import industries from '../../data/business-categories.yaml'

// Helpers
import { getAddressItem, getIndustryByName } from '../slogan-generator/helpers'
import { isValidEmail } from '../../components/hubspot-form/helpers'
import { isFormEmpty } from './helpers'

// Types
import { TFormInfo } from '../slogan-generator/types'

type Props = {
  formInfo: TFormInfo
  setFormInfo: Dispatch<SetStateAction<TFormInfo>>
  submitForm: (urlFormInfo?: TFormInfo) => void
  customerInputPlaceholder: string
  numCustomerInputLines?: number
  keywordsRow?: React.ReactNode
}

const CenteringWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  row-gap: 40px;
  padding: 0 10px 20px;
  ${mq['md']} {
    padding: 0 60px 20px;
  }
`

const GeneratorForm = ({
  formInfo,
  setFormInfo,
  submitForm,
  customerInputPlaceholder,
  numCustomerInputLines = 1,
  keywordsRow = null,
}: Props) => {
  const [industryName, setIndustryName] = useState<string>('')

  useEffect(() => {
    if (window.location.search) {
      const params = new URLSearchParams(window.location.search)
      const urlIndustry = params.get('industry') || ''
      const industryData = getIndustryByName(urlIndustry)
      setIndustryName(industryData?.name || '')
    }
  }, [])

  const submitFormOnEnter = (event: KeyboardEvent) => {
    const isEmailValid = isValidEmail(formInfo.email)
    if (event.key === 'Enter' && !isFormEmpty(formInfo) && isEmailValid) submitForm()
  }

  const onAutocomplete = (place: google.maps.places.PlaceResult) => {
    const addressItems = place?.address_components || []
    const generatedCity = getAddressItem(addressItems, 'locality')
    const generatedRegion = getAddressItem(addressItems, 'administrative_area_level_1')
    const generatedCountry = getAddressItem(addressItems, 'country')

    setFormInfo((prevState) => {
      return {
        ...prevState,
        location: place?.formatted_address || '',
        city: generatedCity,
        region: generatedRegion,
        country: generatedCountry,
      }
    })
  }

  const onIndustryChange = (selectedIndustry: string) => {
    setIndustryName(selectedIndustry)
    const industryData = getIndustryByName(selectedIndustry)

    if (industryData) {
      setFormInfo((prevState) => ({ ...prevState, industry: industryData }))
    }
  }

  const removeSpacesCommasLowCase = (value: string) => value.toLowerCase().replace(/\,|\.| /g, '')

  const compareAndAutocompleteFirstSuggestion = (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    input: string
  ) => {
    if (predictions && predictions.length > 0) {
      const suggestion = predictions[0]?.description
      if (removeSpacesCommasLowCase(suggestion) === removeSpacesCommasLowCase(input)) {
        return autocompleteWithFirstSuggestion(predictions)
      }
    }
    setFormInfo((prevState) => ({ ...prevState, city: '', region: '', country: '' }))
  }

  const autocompleteWithFirstSuggestion = (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null
  ) => {
    if (!predictions || predictions.length === 0) return
    const placeId = predictions[0]?.place_id
    if (placeId) {
      const s = new google.maps.places.PlacesService(document.createElement('div'))
      s.getDetails({ placeId }, (placeResult) => {
        if (placeResult) return onAutocomplete(placeResult)
      })
    }
  }

  return (
    <CenteringWrapper>
      {keywordsRow || (
        <ItemsWrapper itemsNum={1}>
          <TextInput
            placeholder={customerInputPlaceholder}
            inputSize="large"
            value={formInfo.customerInput}
            onChange={(event) =>
              setFormInfo((prevState) => ({ ...prevState, customerInput: event.target.value }))
            }
            numLines={numCustomerInputLines}
          />
        </ItemsWrapper>
      )}

      <ItemsWrapper itemsNum={2}>
        <SearchSelectInput
          options={industries}
          onSelect={(event) => onIndustryChange(event.target.value)}
          value={industryName}
          placeholderValue="Select your industry"
        />
        <LocationAutocompleteInput
          inputId="locationAutocomplete"
          placeholder="Location"
          value={formInfo.location}
          onAutocomplete={onAutocomplete}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (event.target.value === '') {
              return setFormInfo((prevState) => ({
                ...prevState,
                location: '',
                city: '',
                region: '',
                country: '',
              }))
            }

            setFormInfo((prevState: TFormInfo) => ({ ...prevState, location: event.target.value }))
            const service = new google.maps.places.AutocompleteService()
            service.getQueryPredictions({ input: event.target.value }, (predictions) =>
              compareAndAutocompleteFirstSuggestion(predictions, event.target.value)
            )
          }}
          invalid={
            formInfo.location !== '' &&
            formInfo.city === '' &&
            formInfo.region === '' &&
            formInfo.country === ''
          }
        />
      </ItemsWrapper>

      <ItemsWrapper itemsNum={3}>
        <TextInput
          placeholder="First name"
          value={formInfo.firstName}
          onChange={(event) =>
            setFormInfo((prevState) => ({ ...prevState, firstName: event.target.value }))
          }
        />
        <TextInput
          placeholder="Last name"
          value={formInfo.lastName}
          onChange={(event) =>
            setFormInfo((prevState) => ({ ...prevState, lastName: event.target.value }))
          }
        />
        <TextInput
          placeholder="Email"
          value={formInfo.email}
          type="email"
          onChange={(event) =>
            setFormInfo((prevState) => ({ ...prevState, email: event.target.value }))
          }
          onKeyDown={submitFormOnEnter}
        />
      </ItemsWrapper>
    </CenteringWrapper>
  )
}

export default GeneratorForm
