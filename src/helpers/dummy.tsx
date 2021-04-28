import featureListImage from '../static/icons/features/envelop-pluggable.svg';
import heroIllustrationImage from '../static/icons/features/envelop-communication.svg';

export const dummyFeatureList = {
  title: "The best and simple features",
  items: [{
    image: {
      alt: 'Toy Brick Icon',
      src: featureListImage
    },
    title: 'Pluggable',
    description: 'Powerful plugin system',
  }, {
    image: {
      alt: 'Gauge Icon',
      src: featureListImage
    },
    title: 'Performant',
    description: 'Use any Node framework, use any execution',
  }, {
    image: {
      alt: 'Toy Brick Icon',
      src: featureListImage
    },
    title: 'Modern',
    description: 'Use all the latest GraphQL Capabilities',
  }]
};

export const dummyInfoList = {
  title: "Get Started",
  items: [{
    title: 'Install GraphQL Envelop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas euismod amet duis quisque semper.',
    link: {
      label: 'Documentation',
      title: 'Read the documentation',
      href: '/docs'
    }
  }, {
    title: 'Github integration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas euismod amet duis quisque semper.',
    link: {
      label: 'Github',
      title: 'View the code',
      href: 'https://github.com/dotansimha/envelop/'
    }
  }, {
    title: 'Let\'s work together',
    description: 'We want to hear from you, our community of fellow engineers.',
    link: {
      label: 'envelop@theguild.dev',
      title: 'Reach us out',
      href: 'mailto:envelop@theguild.dev'
    }
  }]
};

export const dummyHeroVideo = {
  title: "Easy Installation",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque mauris imperdiet nulla vehicula, vitae porttitor massa consequat. Proin semper bibendum aliquam.',
  link: {
    label: 'Documentation',
    title: 'Read the documentation',
    href: '/docs'
  },
  video: {
    src: ''
  },
  flipped: true
};

export const dummyHeroIllustration = {
  title: "Direct communication with your server",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque mauris imperdiet nulla vehicula, vitae porttitor massa consequat. Proin semper bibendum aliquam.',
  link: {
    label: 'Documentation',
    title: 'Read the documentation',
    href: '/docs'
  },
  image: {
    src: heroIllustrationImage,
    alt: 'Illustration'
  },
  flipped: true
};