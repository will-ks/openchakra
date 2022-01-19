import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@chakra-ui/theme'
import 'react-color-picker/index.css'
import '@reach/combobox/styles.css'

import { initStore } from '~core/store'
import { ErrorBoundary as BugsnagErrorBoundary } from '~utils/bugsnag'
import AppErrorBoundary from '~components/errorBoundaries/AppErrorBoundary'
import { AppProps } from 'next/app'
import { ComponentDefinitionsProvider } from '~contexts/component-definition'
import {
  nativebaseComponentDefDefaults,
  nativebaseComponentDefs,
} from '~nativebase/componentDefs'
import ComponentDefinitions from '~core/ComponentDefinitions'
import { NativeBaseProvider } from "native-base";

const componentDefs = new ComponentDefinitions(
  nativebaseComponentDefs,
  nativebaseComponentDefDefaults,
)

const Main = ({ Component, pageProps }: AppProps) => (
  <BugsnagErrorBoundary>
    <ComponentDefinitionsProvider definitions={componentDefs}>
      <NativeBaseProvider>
        <ChakraProvider resetCSS theme={theme}>
          <AppErrorBoundary>
            <Component {...pageProps} />
          </AppErrorBoundary>
        </ChakraProvider>
      </NativeBaseProvider>
    </ComponentDefinitionsProvider>
  </BugsnagErrorBoundary>
)
// componentDefs passed to initStore so that it can use previewDefaultProps
export default initStore(componentDefs).withRedux(Main)
