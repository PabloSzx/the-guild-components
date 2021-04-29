import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IHeroGradientProps } from './types';
import { dummyHeroGradient } from '../helpers/dummy';

import { HeroGradient } from './HeroGradient';

export default {
  title: 'Design System/Components/Hero/Gradient',
  component: HeroGradient,
  argTypes: {},
} as Meta

const Template: Story<IHeroGradientProps> = args => (
  <HeroGradient {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyHeroGradient
}
