import { IComponents } from '~core/Ocho'
import { buildBlock, buildComponents, formatCode } from '~utils/code'

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
