import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Title from './Title'

export default {
  title: 'General/Title',
  component: Title,
  argTypes: {
    textStyle: {
      options: [undefined, 'h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Title component renders as `h2` by default with respective heading style',
      },
    },
  },
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args}></Title>

export const Default = Template.bind({})

Default.args = {
  children: 'Default title component',
  textStyle: 'h2',
  light: false,
  className: '',
}
