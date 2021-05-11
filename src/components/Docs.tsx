import React from 'react';

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
import { IDocsProps } from '../helpers/types';

export const DocsNavigation: React.FC = () => {
  const itemsStart = [...Array(1).keys()];
  const itemsGuides = [...Array(4).keys()];
  const itemsApi = [...Array(2).keys()];

  return (
    <Navigation>
      <h2>Documentation</h2>
      <h3>Getting Started</h3>
      {itemsStart.map(item => (
        <a key={item} href="#">Item {item}</a>
      ))}

      <h3>Guides</h3>
      {itemsGuides.map(item => (
        <a key={item} href="#">Item {item}</a>
      ))}

      <h3>Api Reference</h3>
      {itemsApi.map(item => (
        <a key={item} href="#">Item {item}</a>
      ))}
      <details>
        <summary>Item Nested 1</summary>
        {itemsGuides.map(item => (
          <a key={item} href="#">Item {item}</a>
        ))}
      </details>
      <details>
        <summary>Item Nested 2</summary>
        {itemsApi.map(item => (
          <a key={item} href="#">Item {item}</a>
        ))}
      </details>
    </Navigation>
  );
}

export const DocsLegend: React.FC = () => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const docsAssets = docsThemedAssets(isDarkTheme || false);

  return (
    <Legend>
      <LegendContent>
        <h2>Content</h2>
        <a href="#">Section A</a>
        <a href="#">Section B</a>
        <a href="#">Section C</a>
      </LegendContent>
      <LegendPagination>
        <a href="#">
          <img src={docsAssets.arrow} height="18" width="18" alt="Prev" />
        </a>
        <p>TypeScript GraphQL Files Modules Example</p>
        <a href="#">
          <img src={docsAssets.arrow} height="18" width="18" alt="Next" />
        </a>
      </LegendPagination>
    </Legend>
  );
}

export const DocsContent: React.FC = () => {
  const items = [...Array(10).keys()];

  return (
    <Content>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut blandit, erat non mattis feugiat, nisi sem commodo lacus,
        in vehicula nibh quam vitae metus.
      </p>
      <a href="#">This is a link</a>
      <hr />
      <h2>API Reference</h2>
      <h3><code>useTypeImports</code></h3>
      <p dangerouslySetInnerHTML={{
        __html: `
          Will use <code>import type { }</code> rather than 
          <code>import { }</code> when importing only types. 
          This gives compatibility with TypeScript's 
          "importsNotUsedAsValues": "error" option
        `
      }} />
      <img
        src="https://www.apollographql.com/blog/static/1_4If-QCJPmB6SJV9EyNTsmw-bcd013c4bd08d09d2a2ac86f5e01a9e4.png"
        alt="GraphQL Schema"
      />
      <blockquote dangerouslySetInnerHTML={{
        __html: `
          <strong>Note:</strong> this plugin generates code that intended for 
          <code>apollo-client</code> @ <code>&gt; v3</code> only.
          `
      }} />
      <hr />
      {
        items.map(item => (
          <React.Fragment key={item}>
            <h2>Title {item}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut blandit, erat non mattis feugiat, nisi sem commodo lacus,
              in vehicula nibh quam vitae metus.
          </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut blandit, erat non mattis feugiat, nisi sem commodo lacus,
              in vehicula nibh quam vitae metus.
          </p>
          </React.Fragment>
        ))
      }
    </Content >
  );
}

export const Docs: React.FC<IDocsProps> = () => (
  <Wrapper>
    <Container>
      <DocsNavigation />
      <DocsContent />
      <DocsLegend />
    </Container>
  </Wrapper>
);