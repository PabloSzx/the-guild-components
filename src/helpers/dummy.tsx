import featureListImage from '../static/icons/features/envelop-pluggable.svg';
import heroIllustrationImage from '../static/illustrations/envelop-communication.svg';
import heroGradientImage from '../static/illustrations/envelop-hero.svg';
import subheaderImage from '../static/logos/products/envelop.svg';

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

export const dummyHeroGradient = {
  title: "A GraphQL server framework for improved developer experience",
  description: 'Use any Node framework and any GraphQL feature, with the easiest plugins system - A new framework by The Guild',
  link: {
    label: 'Get started',
    title: 'Learn more about GraphQL Envelop',
    href: '/get-started'
  },
  version: '1.0.7',
  colors: ['#FF34AE', "#1CC8EE"],
  image: {
    src: heroGradientImage,
    alt: 'Illustration'
  }
};

export const dummySubheader = {
  product: {
    title: 'Envelop',
    description: 'Modern GraphQL Framework',
    image: {
      src: subheaderImage,
      alt: 'Envelop',
    }
  },
  activeLink: '/',
  links: [{
    label: 'Home',
    title: 'Visit our Homepage',
    href: '/',
    active: false,
  }, {
    label: 'Marketplace',
    title: 'Browse the marketplace',
    href: '/marketplace',
    active: false,
  }, {
    label: 'Features',
    title: 'Discover Envelop\'s features',
    href: '/features',
    active: false,
  }, {
    label: 'API & Doc',
    title: 'Learn more about Envelop',
    href: '/docs',
    active: false,
  }, {
    label: 'Github',
    title: 'See our Github profile',
    href: 'https://github.com/dotansimha/envelop',
    active: false,
  }],
  cta: {
    label: 'Get started',
    title: 'Learn more about Envelop',
    href: '/get-started'
  },
};