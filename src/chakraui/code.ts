import isBoolean from 'lodash/isBoolean'
import filter from 'lodash/filter'
import icons from '~iconsList'
import { propNames } from '@chakra-ui/react'
import { IComponent, IComponents } from '~core/Ocho'
import { buildBlock, buildComponents } from '~utils/code'

const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const formatCode = async (code: string) => {
  let formattedCode = `// 🚨 Your props contains invalid code`

  const prettier = await import('prettier/standalone')
  const babylonParser = await import('prettier/parser-babylon')

  try {
    formattedCode = prettier.format(code, {
      parser: 'babel',
      plugins: [babylonParser],
      semi: false,
      singleQuote: true,
    })
  } catch (e) {}

  return formattedCode
}

type GenerateComponentCode = {
  component: IComponent
  components: IComponents
  componentName?: string
  forceBuildBlock?: boolean
}

export const generateComponentCode = ({
  component,
  components,
  componentName,
  forceBuildBlock,
}: GenerateComponentCode) => {
  let code = buildBlock({
    component,
    components,
    forceBuildBlock,
  })

  code = `
const ${componentName} = () => (
  ${code}
)`

  return code
}

const getIconsImports = (components: IComponents) => {
  return Object.keys(components).flatMap((name) => {
    return Object.keys(components[name].props)
      .filter((prop) => prop.toLowerCase().includes('icon'))
      .filter((prop) => !!components[name].props[prop])
      .map((prop) => components[name].props[prop])
  })
}

export const generateCode = async (components: IComponents) => {
  let code = buildBlock({ component: components.root, components })
  let componentsCodes = buildComponents(components)
  const iconImports = [...new Set(getIconsImports(components))]

  const imports = [
    ...new Set(
      Object.keys(components)
        .filter((name) => name !== 'root')
        .map((name) => components[name].type),
    ),
  ]

  code = `import React from 'react';
import {
  ChakraProvider,
  ${imports.join(',')}
} from "@chakra-ui/react";${
    iconImports.length
      ? `
import { ${iconImports.join(',')} } from "@chakra-ui/icons";`
      : ''
  }

${componentsCodes}

const App = () => (
  <ChakraProvider resetCSS>
    ${code}
  </ChakraProvider>
);

export default App;`

  return await formatCode(code)
}
