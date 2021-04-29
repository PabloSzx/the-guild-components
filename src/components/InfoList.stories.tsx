import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IInfoListProps } from './types';
import { dummyInfoList } from '../helpers/dummy';

import { InfoList } from './InfoList';

export default {
  title: 'Design System/Components/Info List',
  component: InfoList,
  argTypes: {},
} as Meta

const Template: Story<IInfoListProps> = args => (
  <InfoList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyInfoList
}