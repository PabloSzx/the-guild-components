import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IHeroIllustrationProps } from './types';
import { dummyHeroIllustration } from '../helpers/dummy';

import { HeroIllustration } from './HeroIllustration';

export default {
  title: 'Design System/Components/Hero/Illustration',
  component: HeroIllustration,
  argTypes: {},
} as Meta

const Template: Story<IHeroIllustrationProps> = args => (
  <HeroIllustration {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyHeroIllustration
}
