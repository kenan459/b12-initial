import { useState, useEffect } from 'react'

// Components
import { Button } from '@components/button/Button'
import { HubspotForm } from '@components/hubspot-form/HubspotForm'

import {
  PopupWrapper,
  PopupContent,
  PopupActions,
  PopupBody,
  PopupTitle,
  PopupDescription,
  PopupCloseButton,
  PopupForm,
  PopupFormTitle,
  ButtonNote,
} from './Popup.styles'

const Popup = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false)
  const {
    title,
    description,
    cta_url,
    cta_text,
    dark_theme = false,
    delay_value = 5,
    popup_intent,
    scroll_depth = 0,
    popup_trigger,
    form_id,
    form_title,
  } = data

  const shouldShowHubspotForm =
    (popup_intent === 'file-download' || popup_intent === 'newsletter-sign-up') && form_id

  useEffect(() => {
    switch (popup_trigger) {
      case 'exit-intent':
        document.addEventListener('mouseleave', handleShowPopup)
        break
      case 'scroll-position':
        const scrollDepth = scroll_depth / 100
        const pageHeight = document.body.offsetHeight

        if (window) {
          window.onscroll = () => {
            if (window.scrollY > pageHeight * scrollDepth) {
              handleShowPopup()
            }
          }
        }
        break
      default:
        setTimeout(handleShowPopup, delay_value * 1000)
        break
    }
  }, [])

  const handleShowPopup = () => {
    if (window && sessionStorage?.getItem('b12PopupClosed') !== 'true') {
      setIsVisible(true)
    }
  }

  const handleClosePopup = () => {
    if (window && sessionStorage) {
      sessionStorage.setItem('b12PopupClosed', 'true')
    }
    setIsVisible(false)
  }

  return (
    <PopupWrapper isVisible={isVisible} dark={dark_theme}>
      <PopupContent>
        <PopupBody>
          <PopupTitle>{title}</PopupTitle>
          <PopupDescription>{description}</PopupDescription>
        </PopupBody>
        {shouldShowHubspotForm && (
          <>
            <PopupFormTitle>{form_title}</PopupFormTitle>
            <PopupForm>
              <HubspotForm formId={form_id} formElementId="popup-hubspot-form" />
            </PopupForm>
          </>
        )}
        {popup_intent === 'cta-type' && cta_url && (
          <PopupActions>
            <Button
              variant={dark_theme ? 'primary' : 'primary-inverted'}
              fullWidth
              as="anchor"
              label={cta_text ?? 'Get started'}
              to={cta_url}
            />
            <ButtonNote dark={dark_theme}>No credit card required</ButtonNote>
          </PopupActions>
        )}
        <PopupCloseButton onClick={handleClosePopup} aria-label="Close popup">
          <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z" fill="#fff" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 13C0 5.85 5.85 0 13 0s13 5.85 13 13-5.85 13-13 13S0 20.15 0 13Zm13 2.298 3.447 3.447 2.298-2.298L15.298 13l3.447-3.447-2.298-2.298L13 10.702 9.553 7.255 7.255 9.553 10.702 13l-3.447 3.447 2.298 2.298L13 15.298Z"
              fill="#623CDC"
            />
          </svg>
        </PopupCloseButton>
      </PopupContent>
    </PopupWrapper>
  )
}

export default Popup
