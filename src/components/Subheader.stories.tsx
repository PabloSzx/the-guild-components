import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ISubheaderProps } from './types';
import { dummySubheader } from '../helpers/dummy';

import { Subheader } from './Subheader';

export default {
  title: 'Design System/Components/Subheader',
  component: Subheader,
  argTypes: {
  },
} as Meta

const Template: Story<ISubheaderProps> = args => (
  <Subheader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummySubheader
}