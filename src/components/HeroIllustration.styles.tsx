import tw, { css, styled } from 'twin.macro';

interface IStyleProps {
  flipped?: boolean
}

export const Wrapper = styled.section(() => [
  tw`bg-white font-sans`
])

export const Container = styled.div(({ flipped }: IStyleProps) => [
  tw`box-border container flex flex-wrap items-center py-8`,
  tw`lg:(flex-nowrap justify-center)`,
  flipped && tw`lg:flex-row-reverse`
]);

export const Illustration = styled.div(({ flipped }: IStyleProps) => [
  tw`flex h-auto w-full mb-6 bg-white`,
  tw`lg:(h-96 w-2/5 mb-0)`,
  css`
    img {
      ${tw`w-full max-w-xl`}
    }
  `,
  flipped ? tw`lg:ml-8` : tw`lg:mr-8`
]);

export const Info = styled.div(() => [
  tw`mb-6 lg:mb-0`,
  css`
    h2 {
      ${tw`max-w-sm m-0 font-bold text-2xl md:text-3xl`}
    }

    p {
      ${tw`max-w-md mt-1 mb-3 text-base text-gray-500`}
    }

    a {
      ${[
      tw`w-max mt-auto text-sm text-light-blue no-underline hover:opacity-50`,
      tw`transition duration-300 ease-in-out`
    ]}
    }
  `,
]);