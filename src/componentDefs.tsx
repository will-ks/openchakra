// Core components to display at the end
import * as Chakra from '@chakra-ui/react'

// Specific preview components for core components in editor mode
import AspectRatioPreview from '~components/editor/previews/AspectRatioBoxPreview'
import ButtonPreview from '~components/editor/previews/ButtonPreview'
import PreviewContainer from '~components/editor/PreviewContainer'
import WithChildrenPreviewContainer from '~components/editor/WithChildrenPreviewContainer'
import IconPreview from '~components/editor/previews/IconPreview'
import IconButtonPreview from '~components/editor//previews/IconButtonPreview'
import SelectPreview from '~components/editor/previews/SelectPreview'
import NumberInputPreview from '~components/editor/previews/NumberInputPreview'
import BreadcrumbPreview from '~components/editor//previews/BreadcrumbPreview'
import BreadcrumbItemPreview from '~components/editor//previews/BreadcrumbItemPreview'

// Component specific inspector panels
import ButtonPanel from '~components/inspector/panels/components/ButtonPanel'
import BadgePanel from '~components/inspector/panels/components/BadgePanel'
import IconPanel from '~components/inspector/panels/components/IconPanel'
import ImagePanel from '~components/inspector/panels/components/ImagePanel'
import BoxPanel from '~components/inspector/panels/components/BoxPanel'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import AvatarPanel from '~components/inspector/panels/components/AvatarPanel'
import AvatarGroupPanel from '~components/inspector/panels/components/AvatarGroupPanel'
import AvatarBadgePanel from '~components/inspector/panels/components/AvatarBadgePanel'
import CheckboxPanel from '~components/inspector/panels/components/CheckboxPanel'
import IconButtonPanel from '~components/inspector/panels/components/IconButtonPanel'
import ProgressPanel from '~components/inspector/panels/components/ProgressPanel'
import LinkPanel from '~components/inspector/panels/components/LinkPanel'
import SpinnerPanel from '~components/inspector/panels/components/SpinnerPanel'
import CloseButtonPanel from '~components/inspector/panels/components/CloseButtonPanel'
import DividerPanel from '~components/inspector/panels/components/DividerPanel'
import CodePanel from '~components/inspector/panels/components/CodePanel'
import TextareaPanel from '~components/inspector/panels/components/TextareaPanel'
import CircularProgressPanel from '~components/inspector/panels/components/CircularProgressPanel'
import HeadingPanel from '~components/inspector/panels/components/HeadingPanel'
import TagPanel from '~components/inspector/panels/components/TagPanel'
import SimpleGridPanel from '~components/inspector/panels/components/SimpleGridPanel'
import SwitchPanel from '~components/inspector/panels/components/SwitchPanel'
import AlertPanel from '~components/inspector/panels/components/AlertPanel'
import AlertIconPanel from '~components/inspector/panels/components/AlertIconPanel'
import AlertTitlePanel from '~components/inspector/panels/components/AlertTitlePanel'
import AlertDescriptionPanel from '~components/inspector/panels/components/AlertDescriptionPanel'
import FlexPanel from '~components/inspector/panels/styles/FlexPanel'
import StackPanel from '~components/inspector/panels/components/StackPanel'
import FormControlPanel from '~components/inspector/panels/components/FormControlPanel'
import TabsPanel from '~components/inspector/panels/components/TabsPanel'
import InputPanel from '~components/inspector/panels/components/InputPanel'
import RadioPanel from '~components/inspector/panels/components/RadioPanel'
import RadioGroupPanel from '~components/inspector/panels/components/RadioGroupPanel'
import SelectPanel from '~components/inspector/panels/components/SelectPanel'
import ListPanel from '~components/inspector/panels/components/ListPanel'
import ListItemPanel from '~components/inspector/panels/components/ListItemPanel'
import ListIconPanel from '~components/inspector/panels/components/ListIconPanel'
import AccordionItemPanel from '~components/inspector/panels/components/AccordionItemPanel'
import AccordionPanel from '~components/inspector/panels/components/AccordionPanel'
import FormLabelPanel from '~components/inspector/panels/components/FormLabelPanel'
import FormHelperTextPanel from '~components/inspector/panels/components/FormHelperTextPanel'
import FormErrorMessagePanel from '~components/inspector/panels/components/FormErrorMessagePanel'
import GridPanel from '~components/inspector/panels/components/GridPanel'
import NumberInputPanel from '~components/inspector/panels/components/NumberInputPanel'
import AspectRatioPanel from '~components/inspector/panels/components/AspectRatioPanel'
import BreadcrumbPanel from '~components/inspector/panels/components/BreadcrumbPanel'
import BreadcrumbItemPanel from '~components/inspector/panels/components/BreadcrumbItemPanel'
import { BreadcrumbLink } from '@chakra-ui/react'
import {
  buildAccordion,
  buildAlert,
  buildBreadcrumb,
  buildFormControl,
  buildInputGroup,
  buildList,
} from '~core/models/composer/builder'
import React from 'react'
import { BuilderFn, MetaComponentType } from '~componentDefsTypes'
import AccordionPreview, {
  AccordionButtonPreview,
  AccordionItemPreview,
  AccordionPanelPreview,
  setAccordionWhitelist,
} from '~components/editor/previews/AccordionPreview'
import AlertPreview from '~components/editor/previews/AlertPreview'
import AvatarPreview, {
  AvatarBadgePreview,
  AvatarGroupPreview,
} from '~components/editor/previews/AvatarPreview'
import InputGroupPreview from '~components/editor/previews/InputGroupPreview'
import InputLeftAddonPreview from '~components/editor/previews/InputLeftAddonPreview'
import InputRightAddonPreview from '~components/editor/previews/InputRightAddonPreview'
import { InputRightElementPreview } from '~components/editor/previews/InputRightElement'
import { InputLeftElementPreview } from '~components/editor/previews/InputLeftElement'
import StackPreview from '~components/editor/previews/StackPreview'
// using ChildrenControl following original Panel.tsx logic
// import TextPanel from "~components/inspector/panels/styles/TextPanel";
import { Button } from 'native-base'

type ComponentDefDefault = {
  previewComponents: {
    [key: string]: {
      component: React.ComponentType<any>
      applyTo: string[]
      props?: {
        [key: string]: any
      }
    }
  }
}

type ComponentDef = {
  component: React.ComponentType<any>
  inspectorComponent?: React.ComponentType<any>
  componentModelBuilder?: BuilderFn
  previewComponent?: React.ComponentType<any>
  previewDefaultProps?: {
    [key: string]: any
  }
  children?: string[]
  rootParentType?: ComponentType
  rootDraggable?: boolean // default: true for root elements and false for child elements.
  soon?: boolean
}

type ComponentDefs = {
  [key: string]: ComponentDef
}

const componentDefDefaults: ComponentDefDefault = {
  previewComponents: {
    simple: {
      component: PreviewContainer,
      applyTo: [
        'Badge',
        'Image',
        'Text',
        'Link',
        'Spinner',
        'Checkbox',
        'Textarea',
        'CircularProgress',
        'Heading',
        'Switch',
        'FormLabel',
        'FormHelperText',
        'FormErrorMessage',
        'TabPanel',
        'Tab',
        'Input',
        'Radio',
        'ListItem',
        'BreadcrumbLink',
      ],
    },
    simpleWrapped: {
      component: PreviewContainer,
      props: {
        isBoxWrapped: true,
      },
      applyTo: [
        'NativeBaseButton',
        'AlertIcon',
        'Progress',
        'CloseButton',
        'AccordionIcon',
        'Code',
        'ListIcon',
        'Divider',
        'AlertDescription',
        'AlertTitle',
        'InputRightAddon',
        'InputLeftAddon',
        'Tag',
      ],
    },
    withChildren: {
      component: WithChildrenPreviewContainer,
      props: {
        enableVisualHelper: true,
      },
      applyTo: [
        'Box',
        'SimpleGrid',
        'Flex',
        'FormControl',
        'Tabs',
        'List',
        'TabList',
        'TabPanels',
        'Grid',
        'Center',
        'Container',
      ],
    },
    withChildrenWrapped: {
      component: WithChildrenPreviewContainer,
      props: {
        isBoxWrapped: true,
        enableVisualHelper: true,
      },
      applyTo: ['RadioGroup', 'Stack', 'InputGroup'],
    },
  },
}

const componentDefs = {
  NativeBaseButton: {
    component: Button,
    inspectorComponent: ButtonPanel,
    // previewComponent: ButtonPreview,
    previewDefaultProps: {
      children: 'A NativeBaseButton',
      width: 200,
      mr: 1,
      fontWeight: 'bold',
      bg: 'green.500',
    },
  },
  Accordion: {
    component: Chakra['Accordion'],
    previewComponent: AccordionPreview,
    inspectorComponent: AccordionPanel,
    componentModelBuilder: buildAccordion,
    children: [
      'Accordion',
      'AccordionItem',
      'AccordionButton',
      'AccordionPanel',
      'AccordionIcon',
    ],
  },
  AccordionItem: {
    component: Chakra['AccordionItem'],
    previewComponent: AccordionItemPreview,
    inspectorComponent: AccordionItemPanel,
    rootDraggable: true, // child, but still want to include in rootDraggables
  },
  AccordionButton: {
    component: Chakra['AccordionButton'],
    previewComponent: AccordionButtonPreview,
  },
  AccordionPanel: {
    component: Chakra['AccordionPanel'],
    previewComponent: AccordionPanelPreview,
  },
  AccordionIcon: {
    component: Chakra['AccordionIcon'],
  },
  Alert: {
    component: Chakra['Alert'],
    previewComponent: AlertPreview,
    inspectorComponent: AlertPanel,
    componentModelBuilder: buildAlert,
    children: ['Alert', 'AlertDescription', 'AlertIcon', '' + 'AlertTitle'],
  },
  AlertDescription: {
    component: Chakra['AlertDescription'],
    inspectorComponent: AlertDescriptionPanel,
    previewDefaultProps: {
      children: 'Alert description',
    },
  },
  AlertIcon: {
    component: Chakra['AlertIcon'],
    inspectorComponent: AlertIconPanel,
  },
  AlertTitle: {
    component: Chakra['AlertTitle'],
    inspectorComponent: AlertTitlePanel,
    previewDefaultProps: {
      children: 'Alert title',
      mr: 1,
      fontWeight: 'bold',
    },
  },
  AspectRatio: {
    component: Chakra['AspectRatio'],
    previewComponent: AspectRatioPreview,
    inspectorComponent: AspectRatioPanel,
  },
  AvatarGroup: {
    component: Chakra['AvatarGroup'] as React.ComponentType,
    previewComponent: AvatarGroupPreview,
    inspectorComponent: AvatarGroupPanel,
    previewDefaultProps: {
      spacing: -3,
      max: 3,
      size: 'md',
      form: {
        display: 'flex',
      },
    },
    rootParentType: 'Avatar',
  },
  Avatar: {
    component: Chakra['Avatar'],
    previewComponent: AvatarPreview,
    inspectorComponent: AvatarPanel,
  },
  AvatarBadge: {
    component: Chakra['AvatarBadge'],
    previewComponent: AvatarBadgePreview,
    inspectorComponent: AvatarBadgePanel,
    previewDefaultProps: {
      bg: 'green.500',
      boxSize: '1.25rem',
      borderColor: 'white',
    },
    rootParentType: 'Avatar',
  },
  Badge: {
    component: Chakra['Badge'],
    inspectorComponent: BadgePanel,
    previewDefaultProps: {
      children: 'Badge name',
      variant: 'subtle',
    },
  },
  Box: {
    component: Chakra['Box'],
    inspectorComponent: BoxPanel,
  },
  Breadcrumb: {
    component: Chakra['Breadcrumb'],
    previewComponent: BreadcrumbPreview,
    inspectorComponent: BreadcrumbPanel,
    componentModelBuilder: buildBreadcrumb,
    previewDefaultProps: {
      form: {
        separator: '/',
      },
    },
    children: ['BreadcrumbItem', 'BreadcrumbLink'],
  },
  BreadcrumbItem: {
    component: Chakra['BreadcrumbItem'],
    previewComponent: BreadcrumbItemPreview,
    inspectorComponent: BreadcrumbItemPanel,
  },
  BreadcrumbLink: {
    component: Chakra['BreadcrumbLink'],
    previewDefaultProps: {
      children: 'Lorem Ipsum',
    },
  },
  Button: {
    component: Chakra['Button'],
    previewComponent: ButtonPreview,
    inspectorComponent: ButtonPanel,
    previewDefaultProps: {
      children: 'Button text',
      variant: 'solid',
      size: 'md',
    },
  },
  Center: {
    component: Chakra['Center'],
  },
  Container: {
    component: Chakra['Container'],
  },
  Checkbox: {
    component: Chakra['Checkbox'],
    inspectorComponent: CheckboxPanel,
    previewDefaultProps: {
      children: 'Label checkbox',
      isReadOnly: true,
      isChecked: false,
    },
  },
  CircularProgress: {
    component: Chakra['CircularProgress'],
    inspectorComponent: CircularProgressPanel,
    previewDefaultProps: {
      size: '48px',
      value: 60,
      min: 0,
      max: 100,
    },
  },
  CloseButton: {
    component: Chakra['CloseButton'],
    inspectorComponent: CloseButtonPanel,
    previewDefaultProps: {
      size: 'md',
    },
  },
  Code: {
    component: Chakra['Code'],
    inspectorComponent: CodePanel,
    previewDefaultProps: {
      children: 'Code value',
    },
  },
  Divider: {
    component: Chakra['Divider'],
    inspectorComponent: DividerPanel,
    previewDefaultProps: {
      borderColor: 'blackAlpha.500',
    },
  },
  Flex: {
    component: Chakra['Flex'],
    inspectorComponent: FlexPanel,
    previewDefaultProps: {
      form: {
        display: 'flex',
      },
    },
  },
  FormControl: {
    component: Chakra['FormControl'],
    inspectorComponent: FormControlPanel,
    componentModelBuilder: buildFormControl,
    children: [
      'FormControl',
      'FormLabel',
      'FormHelperText',
      'FormErrorMessage',
    ],
  },
  FormLabel: {
    component: Chakra['FormLabel'],
    inspectorComponent: FormLabelPanel,
    previewDefaultProps: {
      children: 'Label',
    },
  },
  FormHelperText: {
    component: Chakra['FormHelperText'],
    inspectorComponent: FormHelperTextPanel,
    previewDefaultProps: {
      children: 'Helper message',
    },
  },
  FormErrorMessage: {
    component: Chakra['FormErrorMessage'],
    inspectorComponent: FormErrorMessagePanel,
    previewDefaultProps: {
      children: 'Error message',
    },
  },
  Grid: {
    component: Chakra['Grid'],
    inspectorComponent: GridPanel,
    previewDefaultProps: {
      templateColumns: 'repeat(5, 1fr)',
      gap: 6,
      form: {
        display: 'grid',
      },
    },
  },
  Heading: {
    component: Chakra['Heading'],
    inspectorComponent: HeadingPanel,
    previewDefaultProps: {
      children: 'Heading title',
    },
  },
  Icon: {
    component: Chakra['Icon'],
    inspectorComponent: IconPanel,
    previewComponent: IconPreview,
    previewDefaultProps: {
      icon: 'CopyIcon',
    },
  },
  IconButton: {
    component: Chakra['IconButton'],
    inspectorComponent: IconButtonPanel,
    previewComponent: IconButtonPreview,
    previewDefaultProps: {
      'aria-label': 'icon',
      // @ts-ignore
      icon: 'CopyIcon',
      size: 'md',
    },
  },
  Image: {
    component: Chakra['Image'],
    inspectorComponent: ImagePanel,
    previewDefaultProps: {
      height: '100px',
      width: '100px',
    },
  },
  Input: {
    component: Chakra['Input'],
    inspectorComponent: InputPanel,
  },
  InputGroup: {
    component: Chakra['InputGroup'],
    previewComponent: InputGroupPreview,
    componentModelBuilder: buildInputGroup,
    rootParentType: 'Input',
    children: [
      'InputGroup',
      'Input',
      'InputLeftAddon',
      'InputRightAddon',
      'InputRightElement',
      'InputLeftElement',
    ],
  },
  InputLeftAddon: {
    component: Chakra['InputLeftAddon'],
    inspectorComponent: ChildrenControl,
    previewComponent: InputLeftAddonPreview,
    previewDefaultProps: {
      children: 'left',
    },
  },
  InputRightAddon: {
    component: Chakra['InputRightAddon'],
    inspectorComponent: ChildrenControl,
    previewComponent: InputRightAddonPreview,
    previewDefaultProps: {
      children: 'right',
    },
  },
  InputRightElement: {
    component: Chakra['InputRightElement'],
    previewComponent: InputRightElementPreview,
  },
  InputLeftElement: {
    component: Chakra['InputLeftElement'],
    previewComponent: InputLeftElementPreview,
  },
  Link: {
    component: Chakra['Link'],
    inspectorComponent: LinkPanel,
    previewDefaultProps: {
      children: 'Link text',
    },
  },
  List: {
    component: Chakra['List'],
    inspectorComponent: ListPanel,
    componentModelBuilder: buildList,
    previewDefaultProps: {
      form: {
        styleType: 'none',
      },
    },
    children: ['List', 'ListItem'],
  },
  ListItem: {
    component: Chakra['ListItem'],
    inspectorComponent: ListItemPanel,
    previewDefaultProps: {
      children: 'list',
    },
  },
  // ListIcon was missing from original menuItems and it crashes if added
  // ListIcon: {
  //   component: Chakra['ListIcon'],
  //   inspectorComponent: ListIconPanel,
  // },
  NumberInput: {
    component: Chakra['NumberInput'],
    inspectorComponent: NumberInputPanel,
    previewComponent: NumberInputPreview,
  },
  Progress: {
    component: Chakra['Progress'],
    inspectorComponent: ProgressPanel,
    previewDefaultProps: {
      value: 60,
      min: 0,
      max: 100,
    },
  },
  Radio: {
    component: Chakra['Radio'],
    inspectorComponent: RadioPanel,
    previewDefaultProps: {
      children: 'Radio',
    },
  },
  RadioGroup: {
    component: Chakra['RadioGroup'],
    inspectorComponent: RadioGroupPanel,
    rootParentType: 'Radio',
  },
  SimpleGrid: {
    component: Chakra['SimpleGrid'],
    inspectorComponent: SimpleGridPanel,
    previewDefaultProps: {
      columns: 2,
      spacingX: 1,
      spacingY: 1,
    },
  },
  Spinner: {
    component: Chakra['Spinner'],
    inspectorComponent: SpinnerPanel,
  },
  Select: {
    component: Chakra['Select'],
    inspectorComponent: SelectPanel,
    previewComponent: SelectPreview,
    previewDefaultProps: {
      // @ts-ignore
      icon: 'ChevronDownIcon',
      variant: 'outline',
      size: 'md',
      // @ts-ignore
      form: {
        children: (
          <>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </>
        ),
      },
    },
  },
  Stack: {
    component: Chakra['Stack'],
    inspectorComponent: StackPanel,
    previewComponent: StackPreview,
    previewDefaultProps: {
      spacing: 2,
      form: {
        display: 'flex',
      },
    },
  },
  Switch: {
    component: Chakra['Switch'],
    inspectorComponent: SwitchPanel,
    previewDefaultProps: {
      isChecked: false,
    },
  },
  Tag: {
    component: Chakra['Tag'],
    inspectorComponent: TagPanel,
    previewDefaultProps: {
      children: 'Tag name',
    },
  },
  Text: {
    component: Chakra['Text'],
    inspectorComponent: ChildrenControl, // Panel.tsx uses ChildrenControl instead of TextPanel,
    previewDefaultProps: {
      children: 'Text value',
    },
  },
  Textarea: {
    component: Chakra['Textarea'],
    inspectorComponent: TextareaPanel,
  },
  // Menu: {
  //   soon: true,
  //   component: Chakra["Menu"]
  // },
  // Tab: {
  //   soon: true,
  //   component: Chakra["Tab"],
  //   inspectorComponent: TabsPanel,
  //   previewDefaultProps: {
  //     children: 'Tab'
  //   }
  // },
  // TabPanel: {
  //   soon: true,
  //   component: Chakra["TabPanel"],
  //   previewDefaultProps: {
  //     children: 'Tab'
  //   }
  // },
  // /*"Tabs",
  // "TabList",
  // "TabPanel",
  // "TabPanels"*/
}

// const componentDefsValidation: ComponentDefs = componentDefs

type ComponentDefsType = typeof componentDefs
type ComponentDefsTypeKeys = keyof ComponentDefsType
// Same as in react-app-env.d.ts
export type ComponentType = ComponentDefsTypeKeys

export type MenuItem = {
  children?: MenuItems
  soon?: boolean
  rootParentType?: ComponentType
}

type MenuItems = Partial<
  {
    [k in ComponentType]: MenuItem
  }
>

/**
 * Collects all component names available
 * @param defs
 */
function collectComponentNames(defs: ComponentDefsType) {
  //: ComponentDefsTypeKeys[]
  return Object.keys(defs).filter(
    k => k != '_Defaults',
  ) as ComponentDefsTypeKeys[]
}

/**
 * Collects only root component names
 * @param defs
 */
function collectRootComponentNames(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs
  // && !defs[name].rootParentType
  const childNames = collectChildComponentNames(_defs)
  // Roots are everything that is not a child, except those that have children and can act both as root and child
  return Object.keys(defs).filter(k => {
    return !childNames.includes(k) || defs[k].children
  })
}

/**
 * Collects only child components names, ie. components that are bound to a parent component.
 * @param defs
 */
function collectChildComponentNames(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs
  const childNames = Object.keys(defs).reduce((accum, key) => {
    const obj = defs[key]
    if (obj.children) {
      return [...accum, ...obj.children]
    }
    return accum
  }, [] as string[])

  return childNames
}

/**
 * Generates menuItems structure expected by Sidebar.tsx
 * @param defs
 */
function collectMenuItems(defs: ComponentDefsType) {
  const menuItems: MenuItems = {}

  rootComponentNames.forEach(name => {
    const compoDef: ComponentDef = (defs as ComponentDefs)[name]

    // Create root item
    const menuItem: MenuItem = {}
    if (compoDef.rootParentType) {
      menuItem.rootParentType = compoDef.rootParentType
    }
    if (compoDef.soon) {
      menuItem.soon = compoDef.soon
    }

    // Add children
    if (compoDef.children) {
      menuItem.children = {}
      compoDef.children.reduce((accum, childName: string) => {
        const childDef: ComponentDef = (defs as ComponentDefs)[childName]
        const childMenu: MenuItem = {}

        if (childDef.rootParentType) {
          childMenu.rootParentType = childDef.rootParentType
        }
        if (childDef.soon) {
          childMenu.soon = childDef.soon
        }

        ;(accum as any)[childName] = childMenu
        return accum
      }, menuItem.children as MenuItems)
    }

    ;(menuItems as any)[name] = menuItem
  })

  return menuItems
}

function collectPreviewComponents(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs

  const previewComponents: Partial<
    {
      [k in ComponentType]: {
        previewComponent: React.ComponentType
        component: React.ComponentType
        props?: { [key: string]: any }
      }
    }
  > = {}

  Object.keys(defs).forEach(compoName => {
    const compoDef = defs[compoName]

    // Component with its own previewComponent
    if (compoDef.previewComponent) {
      previewComponents[compoName as ComponentType] = {
        previewComponent: compoDef.previewComponent,
        component: defs[compoName].component,
      }
    } else {
      // Find in one of the default previewComponents where compoName appears in the section's
      // applyTo
      const sectionKey = Object.keys(
        componentDefDefaults.previewComponents,
      ).find(sectionKey => {
        const section = componentDefDefaults.previewComponents[sectionKey]
        return section.applyTo.includes(compoName)
      })
      if (!sectionKey) {
        throw Error(`No preview component defined for ${compoName}`)
      }
      const section = componentDefDefaults.previewComponents[sectionKey]
      previewComponents[compoName as ComponentType] = {
        previewComponent: section.component,
        component: defs[compoName].component,
        props: section.props,
      }
    }
  })

  return previewComponents
}

/**
 *
 * @param defs
 */
function collectRootDraggables(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs
  const draggables: string[] = collectRootComponentNames(
    defs as ComponentDefsType,
  ).filter(name => {
    const obj = defs[name]
    // For roots: if undefined defaults to true
    return obj.rootDraggable === undefined || obj.rootDraggable === true
  })

  // Add meta for roots with children
  draggables.forEach(name => {
    const obj = defs[name]
    if (obj.children) {
      draggables.push(name + 'Meta')
    }
  })

  // Add child compos with explicit rootDraggable=true
  collectChildComponentNames(defs as ComponentDefsType).forEach(name => {
    const obj = defs[name]
    // For children: an explicit true is required
    obj.rootDraggable && draggables.push(name)
  })

  return draggables
}

function collectBuilders(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs

  const builders: Partial<{ [k: string]: BuilderFn }> = {}
  Object.keys(defs).forEach(name => {
    const obj = defs[name]
    if (obj.componentModelBuilder) {
      builders[name + 'Meta'] = obj.componentModelBuilder
    }
  })

  return builders
}

function collectInspectorComponents(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs

  const inspectorComponents: Partial<{ [k: string]: React.ComponentType }> = {}
  Object.keys(defs).forEach(name => {
    const obj = defs[name]
    if (obj.inspectorComponent) {
      inspectorComponents[name] = obj.inspectorComponent
    }
  })

  return inspectorComponents
}

function collectPreviewDefaultProps(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs

  const defaultProps: Partial<{ [k: string]: any }> = {}
  Object.keys(defs).forEach(name => {
    const obj = defs[name]
    let props = obj.previewDefaultProps || {}
    defaultProps[name] = props
  })

  return defaultProps
}

function collectTargetComponents(_defs: ComponentDefsType) {
  const defs = _defs as ComponentDefs

  const defaultProps: Partial<{ [k: string]: React.ComponentType }> = {}
  Object.keys(defs).forEach(name => {
    const obj = defs[name]
    defaultProps[name] = obj.component
  })

  return defaultProps
}

const componentNames = collectComponentNames(componentDefs)
const rootComponentNames = collectRootComponentNames(componentDefs)
const childComponentNames = collectChildComponentNames(componentDefs)
const menuItems: MenuItems = collectMenuItems(componentDefs)
const previewComponents = collectPreviewComponents(componentDefs)
const rootDraggables = collectRootDraggables(componentDefs)
const componentModelBuilders = collectBuilders(componentDefs)
const inspectorComponents = collectInspectorComponents(componentDefs)
const previewDefaultProps = collectPreviewDefaultProps(componentDefs)
const targetComponents = collectTargetComponents(componentDefs)

console.log('*** componentNames', componentNames)
console.log('*** rootComponentNames', rootComponentNames)
console.log('*** childComponentNames', childComponentNames)
console.log('*** menuItems', menuItems)
console.log('*** previewComponents', previewComponents)
console.log('*** componentModelBuilder', componentModelBuilders)
console.log('*** inspectorComponents', inspectorComponents)

// TODO: this cannot be moved to AccordionPreview becuase it causes circular dependency
// because of componentNames
const ALERT_COMPONENTS = [
  'Alert',
  'AlertDescription',
  'AlertIcon',
  'AlertTitle',
]

const AccordionWhitelist = componentNames.filter(
  name => !ALERT_COMPONENTS.includes(name),
)

// Must be called here, AccordionPreview.tsd cannot call functions from here otherwise we have circular
// dependency
setAccordionWhitelist(AccordionWhitelist)

export {
  componentNames,
  rootComponentNames,
  childComponentNames,
  componentDefs,
  menuItems,
  previewComponents,
  rootDraggables,
  componentModelBuilders,
  inspectorComponents,
  previewDefaultProps,
  targetComponents,
}
