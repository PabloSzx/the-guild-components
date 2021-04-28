import React from 'react';

import {
  Wrapper,
  Container,
  Info,
  Video
} from './HeroVideo.styles';

import { IHeroVideoProps } from './types';

export const HeroVideo: React.FC<IHeroVideoProps> = ({ title, description, link, video, flipped }) => (
  <Wrapper>
    <Container flipped={flipped}>
      <Info>
        {title && <h2>{title}</h2>}
        <p>{description}</p>
        {link && <a href={link.href} title={link.title}>{link.label}</a>}
      </Info>
      <Video flipped={flipped}>
        <video src={video.src} />
      </Video>
    </Container>
  </Wrapper>
);