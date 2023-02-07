
import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ToastyProvider } from '../src/contexts/Toasty'
import theme from '../src/theme'

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>AnunX</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ToastyProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ToastyProvider>
      </ThemeProvider>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}