import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { HubspotForm } from './HubspotForm'

export default {
  title: 'General/HubspotForm',
  component: HubspotForm,
  parameters: {
    docs: {
      description: {
        component:
          'This component renders Hubspot form. You only need `formId` to be provided. Both types of forms available: inline (raw html) and iframe.',
      },
    },
  },
} as ComponentMeta<typeof HubspotForm>

const Template: ComponentStory<typeof HubspotForm> = (args) => <HubspotForm {...args}></HubspotForm>

export const Default = Template.bind({})

Default.args = {
  formId: '0054ff35-aca2-400d-a904-2d87abb14263',
  className: '',
}
