import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { GlobalStyles } from '../../helpers/styles';

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
  title: 'Design System/Projects/Envelop',
  argTypes: {},
} as Meta

const Template: Story = ({ page }) => {
  const pages: any = {
    'home': (<>
      <HeroGradient {...dummyHeroGradient} />
      <FeatureList {...dummyFeatureList} />
      <HeroVideo {...dummyHeroVideo} />
      <HeroIllustration {...dummyHeroIllustration} />
      <InfoList {...dummyInfoList} />
    </>)
  }

  return (
    <>
      <GlobalStyles />
      <Header accentColor="#ED2E7E" activeLink="/open-source" />
      <Subheader {...dummySubheader} />
      {pages[page]}
      <Footer />
    </>
  )
}

export const Home = Template.bind({})

Home.args = {
  page: 'home'
}
