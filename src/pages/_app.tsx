import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'

import { createStoreConfig, RootState } from '~core/store'
import AppErrorBoundary from '~components/errorBoundaries/AppErrorBoundary'
import { AppProps } from 'next/app'
import { OchoProvider } from '~contexts/ocho-context'
import { chakrauiOchoConfig } from '~chakraui/componentDefs'
import { Ocho } from '~core/Ocho'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { init } from '@rematch/core'
import storage from 'redux-persist/lib/storage'
import { persistStore } from 'redux-persist'

const ocho = new Ocho(chakrauiOchoConfig)

const Main = ({ Component, pageProps }: AppProps) => (
  <OchoProvider ocho={ocho}>
    <ChakraProvider resetCSS theme={theme}>
      <AppErrorBoundary>
        <Component {...pageProps} />
      </AppErrorBoundary>
    </ChakraProvider>
  </OchoProvider>
)
// ocho passed to initStore so that it can use previewDefaultProps

function initStore(ocho: Ocho) {
  // @ts-ignore
  const makeStore: MakeStore<RootState> = () => init(createStoreConfig(ocho))
  return createWrapper<RootState>(makeStore)
}

export default initStore(ocho).withRedux(Main)
