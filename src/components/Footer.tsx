import React from 'react';

import {
  Container,
  Copyright,
  Links,
  Line,
  Logo,
  Wrapper,
} from './Footer.styles';

import logoImage from '../static/logos/guild-mono-dark.svg';

const links = [{
  label: 'Twitter',
  title: 'Visit our Twitter',
  href: 'https://twitter.com/TheGuildDev',
}, {
  label: 'LinkedIn',
  title: 'Visit our LinkedIn',
  href: 'https://www.linkedin.com/company/the-guild-software/',
}, {
  label: 'Github',
  title: 'See our Github profile',
  href: 'https://github.com/the-guild-org',
}, {
  label: 'Medium',
  title: 'Read our Medium posts',
  href: 'https://medium.com/the-guild',
}]

export const Footer: React.FC = () => (
  <Wrapper>
    <Container>
      <Line />
      <Copyright>
        Belong anywhere. © The Guild, Inc.
      </Copyright>
      <Logo src={logoImage} alt="The Guild" />
      <Links>
        {links.map(link => (
          <li key={link.label}>
            <a href={link.href} title={link.title} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </Links>
    </Container>
  </Wrapper>
)


