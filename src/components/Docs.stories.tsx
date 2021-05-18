import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  dummyDocsContent,
  dummyDocsLegend,
  dummyDocsNavigation,
} from '../helpers/dummy';

import { Docs, DocsContent, DocsLegend, DocsNavigation } from './Docs';

export default {
  title: 'Components/Docs',
  component: Docs,
  argTypes: {
  },
  parameters: {
    backgrounds: {
      default: 'light',
    }
  }
} as Meta

const Template: Story = () => (
  <Docs>
    <DocsNavigation {...dummyDocsNavigation} />
    <DocsContent>
      {dummyDocsContent}
    </DocsContent>
    <DocsLegend {...dummyDocsLegend} />
  </Docs>
)

export const Default = Template.bind({})
Default.args = {
}
