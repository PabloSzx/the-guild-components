import React from 'react';
import Scrollspy from 'react-scrollspy';

import {
  Container,
  Wrapper,
  Navigation,
  Content,
  Legend,
  LegendContent,
  LegendPagination,
} from './Docs.styles';

import { ThemeContext } from '../helpers/theme';
import { docsThemedAssets } from '../helpers/assets';
import { IDocsNavigationProps, IDocsLegendProps } from '../helpers/types';

export const DocsNavigation: React.FC<IDocsNavigationProps> = ({ items }) => {
  const renderNavigation = (items: IDocsNavigationProps['items']) => (
    items.map(item => (
      item.isCategory ? <React.Fragment key={item.name}>
        <h3>{item.name}</h3>
        {item.paths && renderNavigation(item.paths)}
      </React.Fragment> :
        item.isPage ?
          <a key={item.href} href={item.href}>{item.name}</a> :
          <details key={item.href}>
            <summary>{item.name}</summary>
            {item.paths && renderNavigation(item.paths)}
          </details>
    ))
  )

  return (
    <Navigation>
      <h2>Documentation</h2>
      {renderNavigation(items)}
    </Navigation>
  );
}

export const DocsLegend: React.FC<IDocsLegendProps> = ({ items, current, next, prev }) => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const docsAssets = docsThemedAssets(isDarkTheme || false);
  const legend = items.map((item) => item[0].toString());

  return (
    <Legend>
      {items.length ? <LegendContent>
        <h2>Content</h2>
        <Scrollspy items={legend} componentTag="div" currentClassName="active">
          {items.map(item => (
            <a
              key={item[0]}
              href={`#${item[0]}`}
              title={`Scroll to: ${item[2]}`}
              data-indent={item[1]}
            >
              {item[2]}
            </a>
          ))}
        </Scrollspy>
      </LegendContent> : ''}
      <LegendPagination>
        <a data-disabled={!!prev} href={prev.href} title={`Previous article: ${prev.name}`}>
          <img src={docsAssets.arrow} height="18" width="18" alt="Prev" />
        </a>
        <p>{current.name}</p>
        <a data-disabled={!!next} href={next.href} title={`Next article: ${next.name}`}>
          <img src={docsAssets.arrow} height="18" width="18" alt="Next" />
        </a>
      </LegendPagination>
    </Legend >
  );
}

export const DocsContent: React.FC = ({ children }) => (
  <Content>{children}</Content>
)

export const Docs: React.FC = ({ children }) => (
  <Wrapper>
    <Container>
      {children}
    </Container>
  </Wrapper>
);