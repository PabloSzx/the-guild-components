import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer } from './Footer';

export default {
  title: 'Design System/Components/Footer',
  component: Footer,
  argTypes: {},
} as Meta

const Template: Story = args => (
  <Footer {...args} />
)

export const Default = Template.bind({})
Default.args = {}
