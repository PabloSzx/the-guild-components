import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IInfoListProps } from '../helpers/types';
import { dummyInfoList } from '../helpers/dummy';

import { InfoList } from './InfoList';

export default {
  title: 'Components/List/Text Info',
  component: InfoList,
  argTypes: {
    title: {
      name: 'Title'
    },
    items: {
      name: 'Items'
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
} as Meta

const Template: Story<IInfoListProps> = args => (
  <InfoList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyInfoList
}
