import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import { IMarketplaceListProps } from '../helpers/types';
import { dummyMarketplaceList } from '../helpers/dummy';

import { MarketplaceList } from './MarketplaceList';

export default {
  title: 'Components/Marketplace/List',
  component: MarketplaceList,
  argTypes: {
    title: {
      name: 'Title'
    },
    placeholder: {
      name: 'No Results Placeholder'
    },
    pagination: {
      name: 'Products / Page'
    },
    items: {
      name: 'Items'
    }
  },
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
} as Meta

const Template: Story<IMarketplaceListProps> = args => (
  <MarketplaceList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  ...dummyMarketplaceList
}
