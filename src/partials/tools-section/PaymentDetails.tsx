import React from 'react'
import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'

// Images
import IconCheck from '@images/icons/icon-check-green-round.inline.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  gap: 3px;
  pointer-events: none;

  ${mq['sm']} {
    width: 200px;
  }

  ${mq['lg']} {
    width: 230px;
  }
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.surface.border};
  background: #fff;
  box-shadow: ${theme.shadows[2]};

  ${mq['sm']} {
    padding: 10px;
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

const Title = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  color: ${theme.colors.text.light};
  font-size: 12px;
  line-height: 12px;
  font-weight: 500;

  .icon-check {
    margin-left: auto;
  }

  ${mq['md']} {
    font-size: 13px;
    line-height: 13px;
  }
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
`

const FormField = styled.div`
  margin-bottom: 10px;
`

const StyledFieldset = styled.fieldset`
  display: flex;
  justify-content: space-between;
  padding: 0;
  border: none;
  margin: 0;
  gap: 5px;
`

const Label = styled.label`
  color: ${theme.colors.text.light};
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
`

const Input = styled.input`
  padding: 6px;
  width: 100%;
  border-radius: 4px;
  font-size: 11px;
  border: 1px solid ${theme.colors.surface.border};
  box-shadow: inset 0 1px 2px ${theme.colors.surface.borderLight};
`

const IconCheckGray = styled(IconCheck)`
  path {
    fill: ${theme.colors.surface.border};
  }
`

const PaymenDetails = () => {
  return (
    <Wrapper>
      <RowWrapper>
        <Title>
          <svg viewBox="0 0 1098 1024" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M548.571429 0l548.571429 219.428571 0 73.142857-73.142857 0q0 14.848-11.702857 25.746286t-27.721143 10.825143l-872.009143 0q-16.018286 0-27.721143-10.825143t-11.702857-25.746286l-73.142857 0 0-73.142857zM146.285714 365.714286l146.285714 0 0 438.857143 73.142857 0 0-438.857143 146.285714 0 0 438.857143 73.142857 0 0-438.857143 146.285714 0 0 438.857143 73.142857 0 0-438.857143 146.285714 0 0 438.857143 33.718857 0q16.018286 0 27.721143 10.825143t11.702857 25.746286l0 36.571429-950.857143 0 0-36.571429q0-14.848 11.702857-25.746286t27.721143-10.825143l33.718857 0 0-438.857143zM1057.718857 914.285714q16.018286 0 27.721143 10.825143t11.702857 25.746286l0 73.142857-1097.142857 0 0-73.142857q0-14.848 11.702857-25.746286t27.721143-10.825143l1018.294857 0z"
              fill="#a19ead"
            />
          </svg>
          Bank <IconCheckGray className="icon-check" />
        </Title>
      </RowWrapper>
      <RowWrapper>
        <Title>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="22" height="22">
            <path
              d="M43,9H7c-2.757,0-5,2.243-5,5v22c0,2.757,2.243,5,5,5h36c2.757,0,5-2.243,5-5V14C48,11.243,45.757,9,43,9z M8,18 c0-0.552,0.448-1,1-1h4c0.552,0,1,0.448,1,1v3c0,0.552-0.448,1-1,1H9c-0.552,0-1-0.448-1-1V18z M9,28h5c0.552,0,1,0.447,1,1 s-0.448,1-1,1H9c-0.552,0-1-0.447-1-1S8.448,28,9,28z M22,35H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h13c0.552,0,1,0.447,1,1 S22.552,35,22,35z M23,30h-5c-0.552,0-1-0.447-1-1s0.448-1,1-1h5c0.552,0,1,0.447,1,1S23.552,30,23,30z M32,30h-5 c-0.553,0-1-0.447-1-1s0.447-1,1-1h5c0.553,0,1,0.447,1,1S32.553,30,32,30z M41,30h-5c-0.553,0-1-0.447-1-1s0.447-1,1-1h5 c0.553,0,1,0.447,1,1S41.553,30,41,30z M41,20H28c-0.553,0-1-0.448-1-1s0.447-1,1-1h13c0.553,0,1,0.448,1,1S41.553,20,41,20z"
              fill="#5835c5"
            />
          </svg>
          Credit card
          <IconCheck className="icon-check" />
        </Title>
      </RowWrapper>
      <RowWrapper>
        <FormContainer>
          <FormField style={{ width: '100%' }}>
            <Label htmlFor="number">Card number</Label>
            <Input readOnly type="text" id="number" value="**** **** **** 3231" />
          </FormField>
          <StyledFieldset>
            <FormField style={{ width: '65%' }}>
              <Label htmlFor="expiration">Expiration date</Label>
              <Input readOnly type="text" id="expiration" value="6/25" />
            </FormField>
            <FormField style={{ width: '30%' }}>
              <Label htmlFor="cvc">CVC</Label>
              <Input readOnly type="text" id="cvc" value="420" />
            </FormField>
          </StyledFieldset>

          <Button disabled type="submit">
            Pay now
          </Button>
        </FormContainer>
      </RowWrapper>
    </Wrapper>
  )
}

export default PaymenDetails
