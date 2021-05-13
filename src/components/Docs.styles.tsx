import tw, { css, styled } from 'twin.macro';

export const Wrapper = styled.section(() => [
  tw`bg-white font-sans`,
]);

export const Container = styled.div(() => [
  tw`container-max flex flex-wrap py-6 lg:(flex-nowrap py-12)`,
]);

export const Navigation = styled.aside(() => [
  tw`hidden lg:block self-start sticky top-28 w-56`,
  css`
    h2 {
      ${tw`mt-0 font-bold text-lg`}
    }

    h3 {
      ${tw`mt-8 font-bold text-xs uppercase`}
    }

    a, summary {
      ${[
      tw`py-1 font-medium text-sm text-black opacity-60 cursor-pointer outline-none hocus:opacity-100`,
      tw`transition duration-100 ease-in-out`,
    ]}
    }

    a {
      ${tw`block no-underline`}
    }

    details {
      ${tw`-ml-3`}

      a {
        ${tw`ml-1 pl-6 border-0 border-l-2 border-solid border-gray-400`}
      }
    }
  `
]);

export const Legend = styled.aside(() => [
  tw`self-start sticky top-28 w-full lg:w-64`,
]);

export const LegendContent = styled.aside(() => [
  tw`hidden lg:block w-full p-4 bg-gray-100 rounded-lg`,
  css`
    h2 {
      ${tw`mt-0 font-bold text-xs uppercase`}
    }

    a {
      ${[
      tw`block w-fit my-2.5 last:mb-0 text-sm text-black no-underline opacity-60 hocus:opacity-100`,
      tw`transition duration-100 ease-in-out`,
    ]}
    }
  `
]);

export const LegendPagination = styled.aside(() => [
  tw`flex items-center pt-8 lg:py-4`,
  css`
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;  
      overflow: hidden;

      ${tw`flex-1 px-2 font-medium text-xs text-center text-gray-500`}
    }

    a {
      ${[
      tw`flex justify-center items-center h-8 w-8 bg-gray-100 hocus:bg-black rounded-lg`,
      tw`transition duration-200 ease-in-out`,
      css`
        &:last-child {
          img {
            transform: scaleX(-1);
          }
        }

        &:hover, &:focus {
          img {
            filter: invert(1);
          }
        }

        img {
          ${tw`transition duration-200 ease-in-out`}
        }
      `
    ]}
    }
  `
]);

export const Content = styled.section(() => [
  tw`lg:(flex-1 -mt-4 px-7)`,
  css`
    h1, h2, h3, h4, h5, h6 {
      ${tw`font-bold my-4`}
    }

    h1 {
      ${tw`text-3xl`}
    }

    h2 {
      ${tw`text-2xl`}
    }

    h3 {
      ${tw`text-xl`}
    }

    h4 {
      ${tw`text-lg`}
    }

    h5 {
      ${tw`text-base`}
    }

    h6, p, a {
      ${tw`text-sm`}
    }

    p, a {
      ${tw`mb-4 last:mb-0 leading-6`}
    }

    a {
      ${tw`inline-block w-fit underline`}
    }

    hr {
      ${tw`mb-4`}
    }

    code {
      ${tw`mr-1 px-2 py-1 font-bold whitespace-nowrap bg-gray-100 rounded`}
    }

    blockquote {
      ${tw`ml-0 my-4 pl-4 py-2 text-base border-0 border-l-4 border-solid border-gray-200`}
    }

    p {
      code {
        ${tw`text-xs`}
      }
    }

    img {
      ${tw`w-full rounded-lg`}
    }
  `
]);
