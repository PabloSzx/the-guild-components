import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';

import { ThemeProvider } from '../../helpers/theme';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { FeatureList } from '../FeatureList';
import { InfoList } from '../InfoList';
import { HeroVideo } from '../HeroVideo';

import { dummyFeatureList, dummyHeroIllustration, dummyHeroVideo, dummyInfoList } from '../../helpers/dummy';
import { HeroIllustration } from '../HeroIllustration';

export default {
  title: 'Design System/Pages/Envelop',
  argTypes: {},
} as Meta

const Template: Story = () => (
  <ThemeProvider>
    <Header accentColor="#ED2E7E" activeLink="/open-source" />
    <FeatureList {...dummyFeatureList} />
    <HeroVideo {...dummyHeroVideo} />
    <HeroIllustration {...dummyHeroIllustration} />
    <InfoList {...dummyInfoList} />
    <Footer />
  </ThemeProvider>
)

export const Default = Template.bind({})