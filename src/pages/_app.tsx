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
  chakrauiComponentDefDefaults,
  chakrauiComponentDefs,
} from '~chakraui/componentDefs'
import ComponentDefinitions from '~core/ComponentDefinitions'

const componentDefs = new ComponentDefinitions(
  chakrauiComponentDefs,
  chakrauiComponentDefDefaults,
)

const Main = ({ Component, pageProps }: AppProps) => (
  <BugsnagErrorBoundary>
    <ComponentDefinitionsProvider definitions={componentDefs}>
      <ChakraProvider resetCSS theme={theme}>
        <AppErrorBoundary>
          <Component {...pageProps} />
        </AppErrorBoundary>
      </ChakraProvider>
    </ComponentDefinitionsProvider>
  </BugsnagErrorBoundary>
)
// componentDefs passed to initStore so that it can use previewDefaultProps
export default initStore(componentDefs).withRedux(Main)
