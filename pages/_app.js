import * as React from 'react'
import NextApp from 'next/app'
import '../styles/app.css'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'
import ForceTheme from '../components/force-theme'
import Flag from '../components/flag'
import NProgress from '../components/nprogress'
import Meta from '../components/meta'
import Head from 'next/head'
import Snow from "../components/snow";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta
          as={Head}
          name="Register for Epoch VT!" // site name
          title="Register for Epoch VT!" // page title
          image="https://cloud-bs04w09ot-hack-club-bot.vercel.app/0image.png" // large summary card image URL
        />
        <Flag />
        <NProgress color={'rgba(255, 71, 148, 1)'} />
        <ForceTheme theme="light" />
        <div
          style={{
            position: 'relative',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 1,
              height: '100vh',
              width: '100vw',
              backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0,0.9) 100%), url("https://epoch.hackclub.com/assemble.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              overflowY: 'scroll'
            }}
          >
            <Snow />
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    )
  }
}
