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
import InputPanel from '~chakraui/inspector/panels/InputPanel'
import RadioPanel from '~chakraui/inspector/panels/RadioPanel'
import RadioGroupPanel from '~chakraui/inspector/panels/RadioGroupPanel'
import SelectPanel from '~chakraui/inspector/panels/SelectPanel'
import ListPanel from '~chakraui/inspector/panels/ListPanel'
import ListItemPanel from '~chakraui/inspector/panels/ListItemPanel'
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
import {
  buildAccordion,
  buildAlert,
  buildBreadcrumb,
  buildFormControl,
  buildInputGroup,
  buildList,
} from '~core/models/composer/builder'
import React from 'react'
import {
  ComponentDefDefault,
  ComponentDefs,
  IComponent,
  StylePanelsDef,
} from '~core/ComponentDefinitions'
import AccordionPreview, {
  AccordionButtonPreview,
  AccordionItemPreview,
  AccordionPanelPreview,
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
import { ComponentType } from '~core/ComponentDefinitions'
// using ChildrenControl following original Panel.tsx logic
// import TextPanel from "~components/inspector/panels/styles/TextPanel";

// Style panels displayed by StylesPanel set styleProps on the currently selected
// component. Here we can se what properties should be set. The key is the abstract name
// of the property, the value is the actual value to set. be default the two are the same
// for chakraui
const foouiStylePanels: StylePanelsDef = {
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

const foouiComponentDefDefaults: ComponentDefDefault = {
  previewComponents: {
    simple: {
      component: PreviewContainer,
      applyTo: ['Badge'],
    },
    simpleWrapped: {
      component: PreviewContainer,
      props: {
        isBoxWrapped: true,
      },
      applyTo: ['Foo'],
    },
    withChildren: {
      component: WithChildrenPreviewContainer,
      props: {
        enableVisualHelper: true,
      },
      applyTo: ['Box'],
    },
    withChildrenWrapped: {
      component: WithChildrenPreviewContainer,
      props: {
        isBoxWrapped: true,
        enableVisualHelper: true,
      },
      applyTo: [],
    },
  },

  // The main component which displays stylePanels configured below
  stylePanelComponent: StylesPanel,

  // The default style panel configuration to use for components, which do not specify and
  // explicit configuration
  stylePanelDef: foouiStylePanels,

  // When a component is hovered with the mouse in the Editor, add to props to make it highglight. Eg. boxShadow
  calcComponentHoverStyle: (
    component: IComponent,
    props: any,
    focusInput: boolean,
  ) => {
    return {
      ...props,
      boxShadow: `${focusInput ? '#ffc4c7' : '#4FD1C5'} 0px 0px 0px 2px inset`,
    }
  },

  // When a component is selected in the Editor, add to props to make it "selected". Eg. border
  calcComponentVisualHelperStyle: (component: IComponent, props: any) => {
    return {
      ...props,
      border: `1px dashed #718096`,
      padding: props.p || props.padding ? props.p || props.padding : 4,
    }
  },
}

const foouiComponentDefs: ComponentDefs = {
  Badge: {
    component: Chakra['Badge'],
    inspectorComponent: BadgePanel,
    previewDefaultProps: {
      children: 'Badge name',
      variant: 'subtle',
    },
  },
  Foo: {
    component: () => <div>foo</div>,
    inspectorComponent: () => (
      <>
        <div>foo!</div>
        <div>foo!</div>
        <div>foo!</div>
        <div>foo!</div>
        <div>foo!</div>
      </>
    ),
    previewDefaultProps: {},
  },
  Box: {
    component: Chakra['Box'],
    inspectorComponent: BoxPanel,
  },
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

export { foouiComponentDefs, foouiComponentDefDefaults }
