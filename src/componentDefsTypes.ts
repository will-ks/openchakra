import {ComponentType} from "~componentDefs";

export interface IComponent {
  children: string[]
  type: ComponentType
  parent: string
  id: string
  props: any
  rootParentType?: ComponentType
  componentName?: string
}

export interface IComponents {
  [name: string]: IComponent
}

export interface IPreviewProps {
  component: IComponent
}

export interface ComponentItemProps {
  id: string
  label: string
  type: ComponentType
  isMoved?: boolean
  isChild?: boolean
  isMeta?: boolean
  soon?: boolean
  rootParentType?: ComponentType
}


export type ComposedComponent = {
  components: IComponents
  root: string
  parent: string
}

export type BuilderFn = (parent: string) => ComposedComponent

export type ComposerBuilders = {
  [k: string]: BuilderFn
}

export type MetaComponentType =
  | 'FormControlMeta'
  | 'AccordionMeta'
  | 'ListMeta'
  | 'AlertMeta'
  | 'InputGroupMeta'
  | 'BreadcrumbMeta'
