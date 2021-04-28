import tw, { css, styled } from 'twin.macro';

export const Wrapper = styled.footer(() => [
  tw`bg-white font-sans text-xs`
]);

export const Container = styled.div(() => [
  tw`box-border container flex flex-col flex-wrap md:flex-row justify-between items-center mx-auto pb-4 md:pb-5`,
]);

export const Line = styled.hr(() => [
  tw`w-full border-0 border-t border-solid border-gray-300 m-0 mb-4 md:mb-5`
])

export const Copyright = styled.p(() => [
  tw`flex-1 hidden md:block text-xs text-gray-500`,
]);

export const Logo = styled.img(() => [
  tw`mb-3 md:mb-0 opacity-30`
]);

export const Links = styled.ul(() => [
  tw`flex flex-wrap flex-1 justify-end m-0 p-0 list-none`,
  css`
    li {
      &:not(:first-child) {
        &:before {
          content: "";
          ${tw`first:hidden inline-block align-middle mx-2 h-1 w-1 rounded bg-gray-500`}
        }
      }
    }

    a {
      ${[
      tw`inline-block text-xs text-gray-500 no-underline hover:opacity-50`,
      tw`transition duration-300 ease-in-out`,
    ]}
    }
  `
]);