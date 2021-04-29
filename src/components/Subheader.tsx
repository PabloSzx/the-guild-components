import React, { useState } from 'react';

import {
  Container,
  Controls,
  CTA,
  Icon,
  Link,
  Logo,
  Navigation,
  Wrapper,
} from './Subheader.styles';

import { ISubheaderProps } from './types';
import { ThemeContext } from '../helpers/theme';
import { headerThemedIcons } from '../helpers/assets';
import { toggleLockBodyScroll } from '../helpers/modals';

export const Subheader: React.FC<ISubheaderProps> = ({ product, activeLink, links, cta }) => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const icons = headerThemedIcons(isDarkTheme || false);

  const handleNav = (state: boolean) => {
    toggleLockBodyScroll(state);
    setMobileNavOpen(state);
  }

  links.map(link => link.active = activeLink.includes(link.href));

  return (
    <Wrapper>
      <Container>
        <Logo href="/" title={`${product.title} - ${product.description}`}>
          <img src={product.image.src} alt={product.image.alt} />
          <span>
            <p>{product.title}</p>
            <p>{product.description}</p>
          </span>
        </Logo>
        <Navigation isModalOpen={mobileNavOpen}>
          <Icon iconType="close" onClick={() => handleNav(false)}>
            <img src={icons.close} height="24" width="24" alt="Menu close icon" />
          </Icon>
          {links.map(link => (
            <Link
              key={link.label}
              title={link.title}
              isActiveLink={link.active}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </Navigation>
        <Controls>
          {cta && (
            <CTA href={cta.href} title={cta.title}>
              {cta.label}
            </CTA>
          )}
          <Icon iconType="open" onClick={() => handleNav(true)}>
            <img src={icons.caretSlim} height="24" width="24" alt="Menu open icon" />
          </Icon>
        </Controls>
      </Container>
    </Wrapper>
  );
};