import styled from '@emotion/styled'
import { theme } from '../../assets/theme'

export const StyledSelect = styled.datalist`
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 16px 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
  grid-area: select;
`

export const SelectWrapper = styled.div`
  color: ${theme.colors.text.light};
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;
  min-width: 45%;

  border: 1px solid lightgrey;
  border-radius: 4px;

  font-size: 14px;
  cursor: pointer;
  line-height: 17px;

  background-color: ${theme.colors.surface.default};
  align-items: center;
`

export const StyledInput = styled.input`
  border: none;
  background-color: ${theme.colors.surface.default};
  border-radius: 4px;
  padding: 16px;
  width: 100%;
  height: 100%;
`
