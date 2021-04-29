import tw, { css, styled } from 'twin.macro';
interface IStyleProps {
  accentColor?: string
  isActiveLink?: boolean
  isModalOpen?: boolean
  iconType?: 'close' | 'theme'
}

export const HeaderWrapper = styled.header(() => [
  tw`px-6 py-2 md:py-5 font-sans`,
  tw`dark:bg-gray-900 bg-white`,
  css`
    button:focus:not(:focus-visible) {
      ${tw`outline-none!`}
    }
  `,
]);

export const HeaderContainer = styled.div(() => [
  tw`box-border container flex justify-between items-center px-0`
]);

export const HeaderNav = styled.nav(({ isModalOpen }: IStyleProps) => [
  tw`absolute flex flex-col justify-center`,
  tw`transition-all duration-300 ease-in-out`,
  tw`md:(static flex-row justify-end items-center transition-none)`,
  css`
    z-index: 300; //TODO: Used for Docusaurus, remove when no longer needed.
    @media screen and (max-width: 767px) {
      ${[
      tw`inset-0`,
      !isModalOpen && css`top: -100vh; bottom: 100vh;`
    ]}
    }
  `,
  tw`dark:bg-gray-900 bg-white`
]);

export const HeaderControls = styled.menu(() => [
  tw`flex justify-center m-0 p-0`,
  css`
    button:first-child:not(:only-child) {
      ${tw`hidden md:flex`}
    }
  `
]);

export const HeaderLogo = styled.a(() => [
  css`img {
    ${tw`first:(hidden md:block) last:(md:hidden)`}
  }`,
]);

export const HeaderLink = styled.a(({ accentColor, isActiveLink }: IStyleProps) => [
  tw`flex mx-auto py-3 w-max font-medium text-base text-center no-underline!`,
  tw`sm:(text-lg py-5)`,
  tw`md:(mx-2.5 py-0 text-xs text-left)`,
  tw`transition duration-200 ease-in-out`,
  css`
    img {
      ${tw`pl-1 pb-0.5`}
    }
  `,
  accentColor && css`&:hover {
    color: ${accentColor} !important;
  }`,
  isActiveLink ?
    [
      tw`dark:text-white text-black relative`,
      css`
      :after { 
        content:""; 
        ${tw`absolute left-0 bottom-0 sm:bottom-2.5 md:-bottom-2 h-0.5 w-full dark:bg-white bg-black rounded`}
      }
      `,
    ] : tw`dark:text-gray-400 text-gray-500`
]);

export const HeaderIcon = styled.button(({ iconType }: IStyleProps) => [
  tw`flex md:hidden justify-center items-center p-1.5`,
  tw`bg-transparent border-0 cursor-pointer hover:opacity-70`,
  tw`transition duration-200 ease-in-out`,
  iconType === 'close' && tw`absolute top-6 right-6`,
  iconType === 'theme' && tw`transform scale-125 mt-4 md:(flex transform-none mt-0 ml-3)`,
]);

export const HeaderSide = styled.div(() => [
  tw`flex first:justify-start last:justify-end md:hidden`,
  css`min-width: 3.25rem;`
]);