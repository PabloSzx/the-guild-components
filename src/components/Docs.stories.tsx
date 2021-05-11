import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IDocsProps } from '../helpers/types';
// import { } from '../helpers/dummy';

import { Docs } from './Docs';

export default {
  title: 'Components/Docs',
  component: Docs,
  argTypes: {
  },
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
} as Meta

const Template: Story<IDocsProps> = args => (
  <Docs {...args} />
)

export const Default = Template.bind({})
Default.args = {
}
