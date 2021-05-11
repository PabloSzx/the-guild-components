import React from "react";

interface ILink {
  active?: boolean
  href: string
  label?: string
  title: string
}

interface IImage {
  alt: string
  src: string
}

interface IVideo {
  src: string
  placeholder: string
}

export interface IHeaderProps {
  accentColor: string
  activeLink: string
  sameSite?: boolean
  themeSwitch?: boolean
}

export interface ISubheaderProps {
  product: {
    title: string
    description: string
    image: IImage
  }
  activeLink: string
  links: ILink[]
  cta: ILink
}

export interface IHeaderModalProps {
  title: string
  modalOpen: boolean
  onCancelModal: (state?: boolean) => void
}

export interface IFooterProps {
  sameSite?: boolean
}

export interface IModalProps {
  title: string
  description?: string | ILink
  image?: IImage
  visible: boolean
  placement: 'top' | 'center' | 'bottom'
  onCancel: (state?: boolean) => void
}

export interface ISearchBarProps {
  accentColor: string
  title: string
  placeholder: string
}

export interface IFeatureListProps {
  title?: string
  items: {
    title: string
    description: string
    image: IImage,
  }[]
}
export interface IInfoListProps {
  title?: string
  items: {
    title: string
    description: string
    link?: ILink
  }[]
}
export interface IHeroVideoProps {
  title: string
  description: string
  flipped?: boolean
  link?: ILink
  video: IVideo
}
export interface IHeroIllustrationProps {
  title: string
  description: string
  flipped?: boolean
  link?: ILink
  image: IImage
}
export interface IHeroGradientProps {
  title: string
  description: string
  colors?: string[]
  version?: string
  link?: ILink
  image: IImage
}

export interface IHeroMarketplaceProps {
  title: string
  description: string
  link: ILink
}

export interface ICardsColorfulProps {
  cards: {
    title: string
    description: string
    category: string
    color: string
    link: ILink
  }[]
}

export interface IMarketplaceItemProps {
  title: string
  description: string
  modal: {
    header: {
      image: IImage
      description: string | ILink
    }
    content: string
  }
  update: string
  stars: number
  image: IImage
  link: ILink
}

export interface IMarketplaceItemsProps {
  icon: string 
  items: IMarketplaceItemProps[] | null
  setCurrentItem: (state: IMarketplaceItemProps) => void
  handleModal: (state: boolean) => void
}

export interface IMarketplaceListProps {
  title?: string
  placeholder: string | React.ReactElement
  pagination: number
  items: IMarketplaceItemProps[] | null
}

export interface IMarketplaceSearchProps {
  title: string
  placeholder: string
}