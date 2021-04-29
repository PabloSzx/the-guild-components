import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyles } from '../../helpers/styles';
import { ThemeProvider } from '../../helpers/theme';

import { Footer } from '../Footer';
import { FeatureList } from '../FeatureList';
import { Header } from '../Header';
import { HeroIllustration } from '../HeroIllustration';
import { HeroGradient } from '../HeroGradient';
import { HeroVideo } from '../HeroVideo';
import { InfoList } from '../InfoList';
import { Subheader } from '../Subheader';

import {
  dummyFeatureList,
  dummyHeroGradient,
  dummyHeroIllustration,
  dummyHeroVideo,
  dummyInfoList,
  dummySubheader
} from '../../helpers/dummy';

export default {
  title: 'Design System/Pages/Envelop',
  argTypes: {},
} as Meta

const Template: Story = () => (
  <ThemeProvider>
    <GlobalStyles />
    <Header accentColor="#ED2E7E" activeLink="/open-source" />
    <Subheader {...dummySubheader} />
    <HeroGradient {...dummyHeroGradient} />
    <FeatureList {...dummyFeatureList} />
    <HeroVideo {...dummyHeroVideo} />
    <HeroIllustration {...dummyHeroIllustration} />
    <InfoList {...dummyInfoList} />
    <Footer />
  </ThemeProvider>
)

export const Default = Template.bind({})