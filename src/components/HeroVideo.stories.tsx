import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IHeroVideoProps } from './types';
import { dummyHeroVideo } from '../helpers/dummy';

import { HeroVideo } from './HeroVideo';

export default {
  title: 'Design System/Components/Hero/Video',
  component: HeroVideo,
  argTypes: {},
} as Meta

const Template: Story<IHeroVideoProps> = args => (
  <HeroVideo {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyHeroVideo
}
