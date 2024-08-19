import React from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: auto;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.surface.border};
  background: ${theme.colors.brand.accentLightest};
  pointer-events: none;

  ${mq['sm']} {
    width: auto;
  }

  ${mq['md']} {
    padding: 10px 20px;
  }
`

const FormField = styled.div`
  margin-bottom: 10px;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`

const Label = styled.label`
  color: ${theme.colors.text.gray};
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 11px;
`

const Input = styled.input`
  padding: 4px 6px;
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid ${theme.colors.surface.border};
  box-shadow: inset 0 1px 2px ${theme.colors.surface.borderLight};

  ${mq['sm']} {
    padding: 6px;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  font-size: 12px;
  border: 1px solid ${theme.colors.surface.border};

  &::-ms-expand {
    display: none;
  }
`

const Button = styled.button`
  padding: 8px;
  background-color: #fff;
  color: ${theme.colors.brand.accent};
  font-weight: 700;
  border: 1px solid ${theme.colors.surface.border};
  cursor: pointer;
  font-size: 12px;
  border-radius: 4px;
`

const TextGenetationForm = () => {
  return (
    <FormContainer>
      <FormField>
        <Label htmlFor="tone">Tone</Label>
        <Select id="tone" placeholder="Convincing">
          <option value="">Convincing</option>
        </Select>
      </FormField>
      <FormField>
        <Label htmlFor="serviceDetails">Service name</Label>
        <Input readOnly type="text" id="serviceDetails" value={'Business law'} />
      </FormField>
      <FormField>
        <Label htmlFor="serviceDetails">Service details</Label>
        <Input readOnly type="text" id="serviceDetails" value={''} />
      </FormField>
      <Button disabled type="submit">
        Generate Text
      </Button>
    </FormContainer>
  )
}

export default TextGenetationForm
