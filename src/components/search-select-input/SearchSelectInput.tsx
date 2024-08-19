import { SelectWrapper, StyledInput, StyledSelect } from './SearchSelectInput.style'

// Types
type Props = {
  options: Array<{ id: number; name: string }>
  onSelect: (event) => void
  value?: string
  placeholderValue?: string
}

const SearchSelectInput = ({
  options,
  onSelect,
  value,
  placeholderValue = 'Select item from the list',
}: Props) => {
  return (
    <SelectWrapper>
      <StyledInput
        list="searchSelect"
        value={value}
        placeholder={placeholderValue}
        onChange={onSelect}
      />
      <StyledSelect id="searchSelect">
        {options.map((o) => (
          <option key={o.id} value={o.name}>
            {o.name}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  )
}

export default SearchSelectInput
