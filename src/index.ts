import {
  StylePanelsConfig,
  StylePanelConfig,
  ComponentsConfig,
  PreviewComponentsConfig,
  ComposedComponent,
  OchoConfig,
  ComponentConfig,
  Ocho,
  IPreviewProps,
  IComponent,
  ComposerBuilders,
  ComponentType,
  BuilderFn,
  IComponents,
  ComponentItemProps,
  MenuItem,
  isStylePropEnabled,
  targetStyleProp,
  stylePropDetail,
  StylePropDetail,
} from '~core/Ocho'

import { useOcho, OchoProvider } from '~contexts/ocho-context'

import {
  useInspectorState,
  InspectorProvider,
  useInspectorUpdate,
} from '~contexts/inspector-context'

import Editor from '~components/editor/Editor'
import ComponentPreview from '~components/editor/ComponentPreview'
import PreviewContainer from '~components/editor/PreviewContainer'
import WithChildrenPreviewContainer from '~components/editor/WithChildrenPreviewContainer'
import AppErrorBoundary from '~components/errorBoundaries/AppErrorBoundary'
import EditorErrorBoundary from '~components/errorBoundaries/EditorErrorBoundary'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import ElementListItem from '~components/inspector/elements-list/ElementListItem'
import ElementListItemDraggable from '~components/inspector/elements-list/ElementListItemDraggable'
import ElementsList from '~components/inspector/elements-list/ElementsList'
import InputSuggestion from '~components/inspector/inputs/InputSuggestion'
import BackgroundColorPanel from '~components/inspector/panels/styles/BackgroundColorPanel'
import BorderPanel from '~components/inspector/panels/styles/BorderPanel'
import DimensionPanel from '~components/inspector/panels/styles/DimensionPanel'
import DisplayPanel from '~components/inspector/panels/styles/DisplayPanel'
import EffectsPanel from '~components/inspector/panels/styles/EffectsPanel'
import FlexPanel from '~components/inspector/panels/styles/FlexPanel'
import PaddingPanel from '~components/inspector/panels/styles/PaddingPanel'
import SpacingPanel from '~components/inspector/panels/styles/SpacingPanel'
import TextPanel from '~components/inspector/panels/styles/TextPanel'
import { StylePanelProps } from '~components/inspector/panels/styles/types'
import CustomPropsPanel from '~components/inspector/panels/CustomPropsPanel'
import Panels from '~components/inspector/panels/Panels'
import StylesPanel from '~components/inspector/panels/StylesPanel'
import AccordionContainer from '~components/inspector/AccordionContainer'
import ActionButton from '~components/inspector/ActionButton'
import ChildrenInspector from '~components/inspector/ChildrenInspector'
import Inspector from '~components/inspector/Inspector'
import ParentInspector from '~components/inspector/ParentInspector'
import DragItem from '~components/sidebar/DragItem'
import Sidebar from '~components/sidebar/Sidebar'
import CodePanel from '~components/CodePanel'
import Header from '~components/Header'
import Metadata from '~components/Metadata'
import Composer from '~core/models/composer/composer'
import useClipboard from '~hooks/useClipboard'
import useDispatch from '~hooks/useDispatch'
import { useDropComponent } from '~hooks/useDropComponent'
import { useForm } from '~hooks/useForm'
import { useInteractive } from '~hooks/useInteractive'
import usePropsSelector from '~hooks/usePropsSelector'
import useShortcuts from '~hooks/useShortcuts'
import { getComponents } from '~core/selectors/components'
import { getShowLayout, getShowCode } from '~core/selectors/app'
import { buildBlock, formatCode } from '~utils/code'
import { initStore } from '~core/store'

// Temp imports from chakraui
import ButtonPanel from '~chakraui/inspector/panels/ButtonPanel'
import ImagePanel from '~chakraui/inspector/panels/ImagePanel'
import ListPanel from '~chakraui/inspector/panels/ListPanel'
import ColorPickerControl from '~chakraui/inspector/controls/ColorPickerControl'
import ColorsControl from '~chakraui/inspector/controls/ColorsControl'
import FormControl from '~chakraui/inspector/controls/FormControl'
import GradientControl from '~chakraui/inspector/controls/GradientControl'
import HuesPickerControl from '~chakraui/inspector/controls/HuesPickerControl'
import IconControl from '~chakraui/inspector/controls/IconControl'
import NumberControl from '~chakraui/inspector/controls/NumberControl'
import SizeControl from '~chakraui/inspector/controls/SizeControl'
import SwitchControl from '~chakraui/inspector/controls/SwitchControl'
import TextControl from '~chakraui/inspector/controls/TextControl'
import VariantsControl from '~chakraui/inspector/controls/VariantsControl'

export { Ocho, isStylePropEnabled, targetStyleProp, stylePropDetail }

export type {
  StylePanelsConfig,
  StylePanelConfig,
  ComponentsConfig,
  PreviewComponentsConfig,
  ComposedComponent,
  OchoConfig,
  ComponentConfig,
  IPreviewProps,
  IComponent,
  ComposerBuilders,
  ComponentType,
  BuilderFn,
  IComponents,
  ComponentItemProps,
  MenuItem,
  StylePropDetail,
}

export { useOcho, OchoProvider }
export { useInspectorState, InspectorProvider, useInspectorUpdate }

export {
  Editor,
  ComponentPreview,
  PreviewContainer,
  WithChildrenPreviewContainer,
}
export { AppErrorBoundary, EditorErrorBoundary }
export { ChildrenControl }
export { ElementListItem, ElementListItemDraggable, ElementsList }
export { InputSuggestion }
export {
  BackgroundColorPanel,
  BorderPanel,
  DimensionPanel,
  DisplayPanel,
  EffectsPanel,
  FlexPanel,
  PaddingPanel,
  SpacingPanel,
  TextPanel,
}
export type { StylePanelProps }
export { CustomPropsPanel, Panels, StylesPanel }
export {
  AccordionContainer,
  ActionButton,
  ChildrenInspector,
  Inspector,
  ParentInspector,
}
export { DragItem, Sidebar }
export { CodePanel, Header, Metadata }
export { Composer }
export {
  useClipboard,
  useDispatch,
  useDropComponent,
  useForm,
  useInteractive,
  usePropsSelector,
  useShortcuts,
}
export { getComponents }
export { getShowLayout, getShowCode }
export { buildBlock, formatCode }
export { initStore }

// Temp exports from chakraui
export { ButtonPanel, ImagePanel, ListPanel }
export {
  ColorPickerControl,
  ColorsControl,
  FormControl,
  GradientControl,
  HuesPickerControl,
  IconControl,
  NumberControl,
  SizeControl,
  SwitchControl,
  TextControl,
  VariantsControl,
}
