import React from 'react'
import TextInput from '../../components/text-input/TextInput'
import { Script } from 'gatsby'

type TLocationAutocompleteInput = {
  value: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onAutocomplete: (place: google.maps.places.PlaceResult) => void
  inputId: string
  invalid?: boolean
}

const LocationAutocompleteInput = (props: TLocationAutocompleteInput) => {
  const { value, onChange, onAutocomplete, inputId, placeholder, invalid = false } = props

  const autocomplete = () => {
    const googleAutocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById(inputId) as HTMLInputElement,
      { types: ['geocode'] }
    )

    googleAutocomplete.addListener('place_changed', () => {
      const place = googleAutocomplete.getPlace() || {}
      onAutocomplete(place)
    })
  }

  return (
    <>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDygu92JJ_MAMG__b5A0xMKNWHP4vgHER4&libraries=places"
        onLoad={autocomplete}
      />
      <TextInput
        passedId={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        invalid={invalid}
      />
    </>
  )
}

export default LocationAutocompleteInput
