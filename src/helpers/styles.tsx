import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
	body {
		margin: 0 !important;
    padding: 0 !important;
	}
`

export const GlobalStyles: React.FC = () => (
  <>
    <CustomStyles />
    <BaseStyles />
  </>
)
