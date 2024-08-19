import { css } from '@emotion/react'

// Styles copied from original css file
const salesForceChat = css`
  .embeddedServiceHelpButton .helpButton .uiButton,
  .embeddedServiceSidebarMinimizedDefaultUI {
    background-color: #6548c7 !important;
    padding: 0 20px !important;
    min-width: 100px !important;
    justify-content: flex-start !important;
    font-weight: 400 !important;
    box-shadow: none !important;
    border: none !important;
    border-radius: 3px 3px 0 0 !important;
  }
  .embeddedServiceHelpButton .helpButton .uiButton:hover,
  .embeddedServiceSidebarMinimizedDefaultUI:hover {
    background-color: #5048c7 !important;
  }
  .embeddedServiceHelpButton .embeddedServiceIcon,
  .embeddedServiceSidebarMinimizedDefaultUI .embeddedServiceIcon {
    margin-right: 8px !important;
  }
  .embeddedServiceHelpButton .embeddedServiceIcon:before,
  .embeddedServiceSidebarMinimizedDefaultUI .embeddedServiceIcon:before {
    background-image: url(https://www.b12.io/assets/img/salesforce-chat.png) !important;
    background-size: 19px 16px !important;
    display: inline-block !important;
    width: 19px !important;
    height: 16px !important;
    content: '' !important;
  }
  .embeddedServiceHelpButton .embeddedServiceIcon svg,
  .embeddedServiceSidebarMinimizedDefaultUI .embeddedServiceIcon svg {
    display: none !important;
  }
  .embeddedServiceHelpButton .uiButton .helpButtonLabel {
    justify-content: flex-start !important;
  }
  .embeddedServiceHelpButton .uiButton .helpButtonLabel,
  .embeddedServiceSidebarMinimizedDefaultUI {
    text-decoration: none !important;
    outline: none !important;
  }
  .sidebarHeader > h2 {
    font-family: -apple-system, SFUIText, BlinkMacSystemFont, Segoe UI, Roboto,
      Helvetica Neue, Arial, sans-serif !important;
    color: #fff !important;
  }
  .embeddedServiceHelpButton,
  .embeddedServiceSidebarButton,
  .helpButton,
  .uiButton {
    text-decoration: none !important;
    outline: none !important;
    border: none !important;
  }
  .embeddedServiceSidebar.layout-docked .dockableContainer {
    border-radius: 3px 3px 0 0 !important;
  }
  .embeddedServiceSidebarButton.uiButton--default,
  .embeddedServiceSidebarDialogState .dialogButton {
    background-color: #5048c7 !important;
    border-radius: 3px !important;
    box-shadow: none !important;
  }
  .embeddedServiceSidebarButton.uiButton--default:hover,
  .embeddedServiceSidebarDialogState .dialogButton:hover {
    background-color: #413aa1 !important;
  }
  .embeddedServiceSidebarButton.uiButton--inverse {
    border: 1px solid #d7d7de !important;
    border-radius: 3px !important;
    box-shadow: none !important;
    background-color: #fff !important;
  }
  .embeddedServiceSidebarButton.uiButton--inverse .label {
    color: #5048c7 !important;
  }
  .embeddedServiceSidebarButton.uiButton--inverse:hover {
    background-color: #f5f5f7 !important;
  }
  .embeddedServiceSidebarButton.uiButton--inverse:active,
  .embeddedServiceSidebarButton.uiButton--inverse:focus {
    border: 3px solid #695ff6 !important;
  }
  .embeddedServiceSidebarForm .backgroundImg,
  .embeddedServiceSidebarForm .backgroundImgColorMask {
    min-height: 130px !important;
    background-color: #fff !important;
  }
  .embeddedServiceSidebarForm .backgroundImg:after {
    content: "We're offline, but will respond to \A you soon. B12's support team is \A available Mon-Fri, 9am–5pm ET." !important;
    white-space: pre-wrap !important;
    color: #160e33 !important;
    visibility: visible !important;
    display: block !important;
    position: absolute !important;
    right: 20px !important;
    bottom: 50px !important;
    font-size: 12px !important;
    text-align: left !important;
  }
  .embeddedServiceHelpButton .helpButton .helpButtonEnabled:focus:before,
  .embeddedServiceHelpButton .helpButton .helpButtonEnabled:hover:before {
    display: none !important;
  }
  @media screen and (max-width: 825px) {
    .embeddedServiceHelpButton .helpButton,
    .embeddedServiceSidebarMinimizedDefaultUI.helpButton,
    .embeddedServiceSidebarMinimizedDefaultUI.sidebarHeader {
      bottom: 0 !important;
      right: 15px !important;
      height: 46px !important;
    }
    .embeddedServiceSidebarMinimizedDefaultUI .content {
      padding: 0 !important;
    }
  }
`

export default salesForceChat
