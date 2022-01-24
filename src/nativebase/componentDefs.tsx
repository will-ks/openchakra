// Core components to display at the end
import * as Chakra from '@chakra-ui/react'
// Specific preview components for core components in editor mode

import AspectRatioPreview from '~chakraui/previews/AspectRatioBoxPreview'
import ButtonPreview from '~chakraui/previews/ButtonPreview'
import PreviewContainer from '~components/editor/PreviewContainer'
import WithChildrenPreviewContainer from '~components/editor/WithChildrenPreviewContainer'
import IconPreview from '~chakraui/previews/IconPreview'
import IconButtonPreview from '~chakraui/previews/IconButtonPreview'
import SelectPreview from '~chakraui/previews/SelectPreview'
import NumberInputPreview from '~chakraui/previews/NumberInputPreview'
import BreadcrumbPreview from '~chakraui/previews/BreadcrumbPreview'
import BreadcrumbItemPreview from '~chakraui/previews/BreadcrumbItemPreview'

// Component specific inspector panels
import ButtonPanel from '~chakraui/inspector/panels/ButtonPanel'
import BadgePanel from '~chakraui/inspector/panels/BadgePanel'
import IconPanel from '~chakraui/inspector/panels/IconPanel'
import ImagePanel from '~chakraui/inspector/panels/ImagePanel'
import BoxPanel from '~chakraui/inspector/panels/BoxPanel'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import AvatarPanel from '~chakraui/inspector/panels/AvatarPanel'
import AvatarGroupPanel from '~chakraui/inspector/panels/AvatarGroupPanel'
import AvatarBadgePanel from '~chakraui/inspector/panels/AvatarBadgePanel'
import CheckboxPanel from '~chakraui/inspector/panels/CheckboxPanel'
import IconButtonPanel from '~chakraui/inspector/panels/IconButtonPanel'
import ProgressPanel from '~chakraui/inspector/panels/ProgressPanel'
import LinkPanel from '~chakraui/inspector/panels/LinkPanel'
import SpinnerPanel from '~chakraui/inspector/panels/SpinnerPanel'
import CloseButtonPanel from '~chakraui/inspector/panels/CloseButtonPanel'
import DividerPanel from '~chakraui/inspector/panels/DividerPanel'
import CodePanel from '~chakraui/inspector/panels/CodePanel'
import TextareaPanel from '~chakraui/inspector/panels/TextareaPanel'
import CircularProgressPanel from '~chakraui/inspector/panels/CircularProgressPanel'
import HeadingPanel from '~chakraui/inspector/panels/HeadingPanel'
import TagPanel from '~chakraui/inspector/panels/TagPanel'
import SimpleGridPanel from '~chakraui/inspector/panels/SimpleGridPanel'
import SwitchPanel from '~chakraui/inspector/panels/SwitchPanel'
import AlertPanel from '~chakraui/inspector/panels/AlertPanel'
import AlertIconPanel from '~chakraui/inspector/panels/AlertIconPanel'
import AlertTitlePanel from '~chakraui/inspector/panels/AlertTitlePanel'
import AlertDescriptionPanel from '~chakraui/inspector/panels/AlertDescriptionPanel'
import FlexPanel from '~components/inspector/panels/styles/FlexPanel'
import StackPanel from '~chakraui/inspector/panels/StackPanel'
import FormControlPanel from '~chakraui/inspector/panels/FormControlPanel'
import TabsPanel from '~chakraui/inspector/panels/TabsPanel'
import InputPanel from '~chakraui/inspector/panels/InputPanel'
import RadioPanel from '~chakraui/inspector/panels/RadioPanel'
import RadioGroupPanel from '~chakraui/inspector/panels/RadioGroupPanel'
import SelectPanel from '~chakraui/inspector/panels/SelectPanel'
import ListPanel from '~chakraui/inspector/panels/ListPanel'
import ListItemPanel from '~chakraui/inspector/panels/ListItemPanel'
import ListIconPanel from '~chakraui/inspector/panels/ListIconPanel'
import AccordionItemPanel from '~chakraui/inspector/panels/AccordionItemPanel'
import AccordionPanel from '~chakraui/inspector/panels/AccordionPanel'
import FormLabelPanel from '~chakraui/inspector/panels/FormLabelPanel'
import FormHelperTextPanel from '~chakraui/inspector/panels/FormHelperTextPanel'
import FormErrorMessagePanel from '~chakraui/inspector/panels/FormErrorMessagePanel'
import GridPanel from '~chakraui/inspector/panels/GridPanel'
import NumberInputPanel from '~chakraui/inspector/panels/NumberInputPanel'
import AspectRatioPanel from '~chakraui/inspector/panels/AspectRatioPanel'
import BreadcrumbPanel from '~chakraui/inspector/panels/BreadcrumbPanel'
import BreadcrumbItemPanel from '~chakraui/inspector/panels/BreadcrumbItemPanel'
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
import AccordionPreview, {
  AccordionButtonPreview,
  AccordionItemPreview,
  AccordionPanelPreview,
  setAccordionWhitelist,
} from '~chakraui/previews/AccordionPreview'
import AlertPreview from '~chakraui/previews/AlertPreview'
import AvatarPreview, {
  AvatarBadgePreview,
  AvatarGroupPreview,
} from '~chakraui/previews/AvatarPreview'
import InputGroupPreview from '~chakraui/previews/InputGroupPreview'
import InputLeftAddonPreview from '~chakraui/previews/InputLeftAddonPreview'
import InputRightAddonPreview from '~chakraui/previews/InputRightAddonPreview'
import { InputRightElementPreview } from '~chakraui/previews/InputRightElement'
import { InputLeftElementPreview } from '~chakraui/previews/InputLeftElement'
import StackPreview from '~chakraui/previews/StackPreview'
import StylesPanel from '~components/inspector/panels/StylesPanel'
import BorderPanel from '~components/inspector/panels/styles/BorderPanel'
import DimensionPanel from '~components/inspector/panels/styles/DimensionPanel'
import EffectsPanel from '~components/inspector/panels/styles/EffectsPanel'
import DisplayPanel from '~components/inspector/panels/styles/DisplayPanel'
import PaddingPanel from '~components/inspector/panels/styles/PaddingPanel'
import TextPanel from '~components/inspector/panels/styles/TextPanel'
import BackgroundColorPanel from '~components/inspector/panels/styles/BackgroundColorPanel'
import SpacingPanel from '~components/inspector/panels/styles/SpacingPanel'
import {
  BuilderFn,
  ComponentDefDefault,
  ComponentDefs,
  ComponentType,
  IComponent,
  StylePanelsDef,
} from '~core/ComponentDefinitions'
import { Button, Box, Row, HStack, Column } from 'native-base'
import { StatusView } from '~nativebase/WS/StatusView'
import { OperationList } from '~nativebase/WS/OperationList'
import { InstructionText } from '~nativebase/WS/InstructionText'
import { InstructionInteractions } from '~nativebase/WS/InstructionInteractions'
// using ChildrenControl following original Panel.tsx logic
// import TextPanel from "~components/inspector/panels/styles/TextPanel";

// Style panels displayed by StylesPanel set styleProps on the currently selected
// component. Here we can se what properties should be set. The key is the abstract name
// of the property, the value is the actual value to set. be default the two are the same
// for chakraui
const nativebaseStylePanels: StylePanelsDef = {
  Layout: {
    title: 'Layout',
    component: DisplayPanel,
    children: {
      FlexPanel: {
        title: 'Flex',
        component: FlexPanel,
        styleProps: {
          alignItems: 'alignItems',
          flexDirection: 'flexDirection',
          justifyContent: 'justifyContent',
        },
      },
    },
    styleProps: {
      display: {
        targetName: 'display',
        options: ['block', 'flex', 'inline', 'grid', 'inline-block'],
      },
    },
  },
  Spacing: {
    title: 'Spacing',
    component: SpacingPanel,
    // PaddingPanel handles both margin and padding, normal styleProps based config is not used
    config: {
      margin: {
        all: 'm',
        left: 'ml',
        right: 'mr',
        bottom: 'mb',
        top: 'mt',
      },
      padding: {
        all: 'p',
        left: 'pl',
        right: 'pr',
        bottom: 'pb',
        top: 'pt',
      },
    },
    styleProps: {},
  },
  Size: {
    title: 'Size',
    component: DimensionPanel,
    styleProps: {
      width: 'width',
      height: 'height',
      minWidth: 'minWidth',
      minHeight: 'minHeight',
      maxWidth: 'maxWidth',
      maxHeight: 'maxHeight',
      // Example of detailed setting: the value maybe disabled
      overflow: {
        targetName: 'overflow',
        enabled: true,
        // configuration of the setting
        options: ['visible', 'scroll', 'visible'],
      },
    },
  },
  Typography: {
    title: 'Typography',
    component: TextPanel,
    styleProps: {
      fontWeight: 'fontWeight',
      fontStyle: 'fontStyle',
      textAlign: 'textAlign',
      fontSize: 'fontSize',
      letterSpacing: 'letterSpacing',
      lineHeight: 'lineHeight',
      color: 'color',
    },
  },
  Backgrounds: {
    title: 'Backgrounds',
    component: BackgroundColorPanel,
    styleProps: {
      backgroundColor: 'backgroundColor',
      bgGradient: 'bgGradient',
    },
  },
  Border: {
    title: 'Border',
    component: BorderPanel,
    styleProps: {
      border: 'border',
      borderRadius: 'borderRadius',
    },
  },
  Effect: {
    title: 'Effect',
    component: EffectsPanel,
    styleProps: {
      opacity: 'opacity',
      boxShadow: 'boxShadow',
    },
  },
}

const nativebaseComponentDefDefaults: ComponentDefDefault = {
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
        'NativeBaseBox',
        'HStack',
        'VStack',
        'WitRow',
        'WitCol',
        'WitScreenView',
        'StatusView',
        'OperationList',
        'InstructionText',
        'InstructionInteractions',
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

  // The main component which displays stylePanels configured below
  stylePanelComponent: StylesPanel,

  // The default style panel configuration to use for components, which do not specify and
  // explicit configuration
  stylePanelDef: nativebaseStylePanels,

  // When a component is hovered with the mouse in the Editor, add to props to make it highglight. Eg. boxShadow
  calcComponentHoverStyle: (
    component: IComponent,
    props: any,
    focusInput: boolean,
  ) => {
    return {
      ...props,
      // Nativebase doesn't support raw boxShadow, it only accepts predifined settings via numebrs
      // so use raw css instead. These work for both chakra and NB.
      // style: {
      //   boxShadow: `${
      //     focusInput ? '#ffc4c7' : '#4FD1C5'
      //   } 0px 0px 0px 2px inset`,
      // },
      // boxShadow: `${
      //     focusInput ? '#ffc4c7' : '#4FD1C5'
      // } 0px 0px 0px 2px inset`,
      borderWidth: 1,
      borderColor: 'cyan.400',
      borderStyle: 'solid',
    }
  },

  // When a component is selected in the Editor, add to props to make it "selected". Eg. border
  calcComponentVisualHelperStyle: (component: IComponent, props: any) => {
    return {
      ...props,
      // Nativebase doesn't support raw border, it only accepts predifined settings via numebrs
      // so use raw css instead. These work for both chakra and NB.
      // style: {
      //   border: `1px dashed #718096`,
      // },
      // NB like styling, because the style above won't work for every NB component, eg. Row.
      borderWidth: '1',
      borderStyle: 'dashed',
      padding: props.p || props.padding ? props.p || props.padding : 4,
    }
  },
}

const nativebaseComponentDefs: ComponentDefs = {
  NativeBaseButton: {
    component: Button,
    inspectorComponent: ButtonPanel,
    previewComponent: ButtonPreview,
    previewDefaultProps: {
      children: 'A NativeBaseButton',
      width: 200,
      mr: 1,
      fontWeight: 'bold',
      bg: 'green.500',
    },
  },
  NativeBaseBox: {
    component: Box,
    inspectorComponent: BoxPanel,
  },
  VStack: {
    component: Column,
    inspectorComponent: BoxPanel,
  },
  HStack: {
    component: Row,
    inspectorComponent: BoxPanel,
  },

  WitRow: {
    component: Row,
    inspectorComponent: BoxPanel,
    previewDefaultProps: {
      height: 200,
      flex: 1,
    },
  },
  WitCol: {
    component: Column,
    inspectorComponent: BoxPanel,
    previewDefaultProps: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
  },
  WitScreenView: {
    component: Box,
    inspectorComponent: BoxPanel,
    previewDefaultProps: {
      width: '100%',
      padding: '10px',
    },
  },
  StatusView: {
    component: StatusView,
    inspectorComponent: BoxPanel,
  },
  OperationList: {
    component: OperationList,
    inspectorComponent: BoxPanel,
  },
  InstructionText: {
    component: InstructionText,
    inspectorComponent: BoxPanel,
  },
  InstructionInteractions: {
    component: InstructionInteractions,
    inspectorComponent: BoxPanel,
  },

  Accordion: {
    component: Chakra['Accordion'],
    previewComponent: AccordionPreview,
    inspectorComponent: AccordionPanel,
    componentModelBuilder: buildAccordion,
    stylePanelsOverride: {
      Backgrounds: {
        title: 'Accordion BG',
        component: BackgroundColorPanel,
        styleProps: {
          backgroundColor: 'bg',
          bgGradient: {
            targetName: 'bgGradient',
            enabled: false,
          },
        },
      },
    },
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

// // TODO: this cannot be moved to AccordionPreview becuase it causes circular dependency
// // because of componentNames
// const ALERT_COMPONENTS = [
//   'Alert',
//   'AlertDescription',
//   'AlertIcon',
//   'AlertTitle',
// ]
//
// const AccordionWhitelist = componentNames.filter(
//   name => !ALERT_COMPONENTS.includes(name),
// )
//
// // Must be called here, AccordionPreview.tsd cannot call functions from here otherwise we have circular
// // dependency
// setAccordionWhitelist(AccordionWhitelist)

export { nativebaseComponentDefs, nativebaseComponentDefDefaults }
