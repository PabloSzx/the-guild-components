import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IHeroIllustrationProps } from './types';
import { dummyHeroIllustration } from '../helpers/dummy';

import { HeroIllustration } from './HeroIllustration';

export default {
  title: 'Components/Hero/Illustration',
  component: HeroIllustration,
  argTypes: {
    title: {
      name: 'Title'
    },
    description: {
      name: 'Description'
    },
    image: {
      name: 'Illustration'
    },
    flipped: {
      name: 'Flip orientation'
    },
    link: {
      name: 'Link'
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
} as Meta

const Template: Story<IHeroIllustrationProps> = args => (
  <HeroIllustration {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyHeroIllustration
}
