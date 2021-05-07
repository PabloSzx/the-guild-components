
import tw, { css, styled } from 'twin.macro';

export const Wrapper = styled.section(() => [
  tw`bg-white font-sans`,
]);

export const Container = styled.div(() => [
  tw`container-min py-12`,
]);

export const Title = styled.h2(() => [
  tw`mt-0 mb-4 font-bold text-2xl md:text-3xl`,
]);

export const Placeholder = styled.div(() => [
  tw`flex items-center justify-center h-24 w-full bg-gray-100 rounded-lg`
]);

export const Table = styled.table(() => [
  tw`w-full border-collapse`,
]);

export const TableHeading = styled.thead(() => [
  css`
    th {
      ${tw`px-2 font-semibold text-left text-xs text-gray-300 uppercase whitespace-nowrap`}
    }
  `
]);

export const TableBody = styled.tbody(() => []);

export const TableItem = styled.tr(() => [
  tw`font-medium text-xs text-gray-500 border-0 border-b border-solid border-gray-300`,
  css`
    td {
      ${tw`px-2`}
      &:nth-child(2),
      &:nth-child(3) {
        ${tw`whitespace-nowrap`}
      }

      div {
        ${tw`flex items-center`}
      }

      img {
        ${tw`my-4 mr-4`}
      }

      h3 {
        ${tw`m-0 text-lg text-black`}
      }

      p {
        ${tw`m-0`}
      }

      button {
        ${[
      tw`flex justify-center items-center h-11 w-11 font-sans text-2xl text-gray-800 bg-gray-200 border-0 rounded-lg cursor-pointer`,
      tw`hover:opacity-50 transition duration-300 ease-in-out`,
    ]}

        img {
          ${tw`w-5 m-0 transform -rotate-90`}
        }
      }
    }
  `
]);