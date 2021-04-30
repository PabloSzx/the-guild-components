import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    sameSite: {
      name: 'Same Site',
      description: 'Use this to force links to open in the same tab, using the root domain.',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
} as Meta

const Template: Story = args => (
  <Footer {...args} />
)

export const Default = Template.bind({})
Default.args = {
  sameSite: false,
}
