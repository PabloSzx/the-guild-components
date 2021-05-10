import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ISubheaderProps } from '../helpers/types';
import { dummySubheader } from '../helpers/dummy';

import { Subheader } from './Subheader';

export default {
  title: 'Components/Headers/Sub Header',
  component: Subheader,
  argTypes: {
    product: {
      name: 'Product Information'
    },
    links: {
      name: 'Navigation Links'
    },
    cta: {
      name: 'Call to Action'
    },
    activeLink: {
      name: 'Active Link',
      description: 'Used ',
      control: {
        type: 'radio',
        options: ['/', '/marketplace', '/features', '/docs']
      }
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
} as Meta

const Template: Story<ISubheaderProps> = args => (
  <Subheader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummySubheader
}