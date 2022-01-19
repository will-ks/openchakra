import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'

import { wrapper } from '~core/store'
import { ErrorBoundary as BugsnagErrorBoundary } from '~utils/bugsnag'
import AppErrorBoundary from '~components/errorBoundaries/AppErrorBoundary'
import { AppProps } from 'next/app'
import { NativeBaseProvider } from 'native-base'

const Main = ({ Component, pageProps }: AppProps) => (
  <BugsnagErrorBoundary>
    <NativeBaseProvider>
      <ChakraProvider resetCSS theme={theme}>
        <AppErrorBoundary>
          <Component {...pageProps} />
        </AppErrorBoundary>
      </ChakraProvider>
    </NativeBaseProvider>
  </BugsnagErrorBoundary>
)

export default wrapper.withRedux(Main)
