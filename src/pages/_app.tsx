import React from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head'


import { ThemeProvider  } from 'styled-components'
import GlobalStyle from '../styles/globalstyles'
import theme from '../styles/theme'



export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Admin Painel</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />

      </ThemeProvider>
    </>
  )
}
