import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'

import { initStore } from '~core/store'
import { ErrorBoundary as BugsnagErrorBoundary } from '~utils/bugsnag'
import AppErrorBoundary from '~components/errorBoundaries/AppErrorBoundary'
import { AppProps } from 'next/app'
import { OchoProvider } from '~contexts/ocho-context'
import { chakrauiOchoConfig } from '~chakraui/componentDefs'
import { Ocho } from '~core/Ocho'

const ocho = new Ocho(chakrauiOchoConfig)

const Main = ({ Component, pageProps }: AppProps) => (
  <BugsnagErrorBoundary>
    <OchoProvider ocho={ocho}>
      <ChakraProvider resetCSS theme={theme}>
        <AppErrorBoundary>
          <Component {...pageProps} />
        </AppErrorBoundary>
      </ChakraProvider>
    </OchoProvider>
  </BugsnagErrorBoundary>
)
// ocho passed to initStore so that it can use previewDefaultProps
export default initStore(ocho).withRedux(Main)
