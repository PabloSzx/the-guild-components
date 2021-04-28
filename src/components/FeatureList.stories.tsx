import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IFeatureListProps } from './types';
import { dummyFeatureList } from '../helpers/dummy';

import { FeatureList } from './FeatureList';

export default {
  title: 'Design System/Components/Feature List',
  component: FeatureList,
  argTypes: {},
} as Meta

const Template: Story<IFeatureListProps> = args => (
  <FeatureList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyFeatureList
}
