import Composer from '../../core/models/composer/composer'
import { IComponents, Ocho } from '~core/Ocho'

type ComposedComponent = {
  components: IComponents
  root: string
  parent: string
}

export const buildAlert = (parent: string, ocho: Ocho): ComposedComponent => {
  const composer = new Composer(ocho)

  const nodeId = composer.addNode({
    type: 'Alert',
    parent,
  })

  composer.addNode({ type: 'AlertIcon', parent: nodeId })
  composer.addNode({ type: 'AlertTitle', parent: nodeId })
  composer.addNode({ type: 'AlertDescription', parent: nodeId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildBreadcrumb = (
  parent: string,
  ocho: Ocho,
): ComposedComponent => {
  const composer = new Composer(ocho)

  const nodeId = composer.addNode({ type: 'Breadcrumb', parent })
  const itemId = composer.addNode({ type: 'BreadcrumbItem', parent: nodeId })
  composer.addNode({ type: 'BreadcrumbLink', parent: itemId })

  const secondItemId = composer.addNode({
    type: 'BreadcrumbItem',
    parent: nodeId,
  })
  composer.addNode({ type: 'BreadcrumbLink', parent: secondItemId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildFormControl = (
  parent: string,
  ocho: Ocho,
): ComposedComponent => {
  const composer = new Composer(ocho)

  const nodeId = composer.addNode({ type: 'FormControl', parent })

  composer.addNode({ type: 'FormLabel', parent: nodeId })
  composer.addNode({ type: 'Input', parent: nodeId, rootParentType: 'Input' })
  composer.addNode({ type: 'FormHelperText', parent: nodeId })
  composer.addNode({ type: 'FormErrorMessage', parent: nodeId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildAccordion = (
  parent: string,
  ocho: Ocho,
): ComposedComponent => {
  const composer = new Composer(ocho, 'Accordion')

  const nodeId = composer.addNode({ type: 'Accordion', parent })
  const itemId = composer.addNode({ type: 'AccordionItem', parent: nodeId })
  const headerId = composer.addNode({ type: 'AccordionButton', parent: itemId })
  const panelId = composer.addNode({ type: 'AccordionPanel', parent: itemId })

  composer.addNode({ type: 'Text', parent: headerId, rootParentType: 'Text' })
  composer.addNode({ type: 'AccordionIcon', parent: headerId })
  composer.addNode({ type: 'Text', parent: panelId, rootParentType: 'Text' })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildList = (parent: string, ocho: Ocho): ComposedComponent => {
  const composer = new Composer(ocho, 'List')

  const nodeId = composer.addNode({ type: 'List', parent })
  composer.addNode({ type: 'ListItem', parent: nodeId })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

export const buildInputGroup = (
  parent: string,
  ocho: Ocho,
): ComposedComponent => {
  const composer = new Composer(ocho, 'Input')

  const nodeId = composer.addNode({ type: 'InputGroup', parent })
  composer.addNode({
    type: 'InputLeftAddon',
    parent: nodeId,
    props: { children: 'Email' },
  })
  composer.addNode({ type: 'Input', parent: nodeId })

  const elementId = composer.addNode({
    type: 'InputRightElement',
    parent: nodeId,
  })
  composer.addNode({
    type: 'Icon',
    parent: elementId,
    props: { name: 'email' },
  })

  const components = composer.getComponents()

  return {
    components,
    root: nodeId,
    parent,
  }
}

// handled by componentDefs.tsx, componentDefsTypes.ts

// type BuilderFn = (parent: string) => ComposedComponent
//
// type ComposerBuilders = {
//   [k: string]: BuilderFn
// }
//
// const builders: ComposerBuilders = {
//   AlertMeta: buildAlert,
//   FormControlMeta: buildFormControl,
//   AccordionMeta: buildAccordion,
//   ListMeta: buildList,
//   InputGroupMeta: buildInputGroup,
//   BreadcrumbMeta: buildBreadcrumb,
// }
//
// export default builders
