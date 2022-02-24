import templates, { TemplateType } from '~chakraui/templates'

export type OchoConfig = {
  // Component definitions: components, whcih can be dragged onto the editor
  components: ComponentsConfig

  // Generic preview components applicable to multiple components
  previewComponents: PreviewComponentsConfig
  stylesPanelComponent: React.ComponentType<any>
  // The default style panel configuration to use for components, which do not specify an
  // explicit configuration
  stylePanels: StylePanelsConfig

  // Example, onboarding templates
  templates?: {
    [key: string]: IComponents
  }

  generateCode?: (components: IComponents) => Promise<string>

  // When a component is hovered with the mouse in the Editor, add to props to make it highglight. Eg. boxShadow
  calcComponentHoverStyle: (
    component: IComponent,
    props: any,
    focusInput: boolean,
  ) => any

  // When a component is selected in the Editor, add to props to make it "selected". Eg. border
  calcComponentVisualHelperStyle: (component: IComponent, props: any) => any
}

export type ComponentsConfig = {
  [key: string]: ComponentConfig
}

type ComponentDefsType = ComponentsConfig
type ComponentDefsTypeKeys = Extract<keyof ComponentDefsType, string>

// Same as in react-app-env.d.ts
export type ComponentType = ComponentDefsTypeKeys

export type PreviewComponentsConfig = {
  [key: string]: {
    component: React.ComponentType<any>
    applyTo: string[]
    props?: {
      [key: string]: any
    }
  }
}

export type StylePanelsConfig = {
  [key: string]: StylePanelConfig
}

export type StylePanelConfig = {
  title: string
  component: React.ComponentType<any>
  props?: {
    [key: string]: any
  }
  children?: StylePanelsConfig
  // Complex config in case styleProps mapping is not enough/applicable
  config?: {
    [key: string]: any
  }
  styleProps: {
    [key: string]: string | StylePropDetail
  }
}

export type StylePropDetail = {
  targetName: string
  enabled?: boolean
  [key: string]: any
}

export type ComponentConfig = {
  component: React.ComponentType<any>
  inspectorComponent?: React.ComponentType<any>
  // Use a specific StylePanelsDef
  stylePanels?: StylePanelsConfig
  // Override some of the setting of the default StylePanelsDef or the one defiend in
  // stylePanelsDef
  stylePanelsOverride?: StylePanelsConfig
  componentModelBuilder?: BuilderFn
  previewComponent?: React.ComponentType<any>
  previewDefaultProps?: {
    [key: string]: any
  }
  children?: string[]
  isPreset?: boolean
  rootParentType?: ComponentType
  rootDraggable?: boolean // default: true for root elements and false for child elements.
  soon?: boolean
}

export type MenuItem = {
  isPreset?: boolean
  children?: MenuItems
  soon?: boolean
  rootParentType?: ComponentType
}

type MenuItems = Partial<{
  [k in ComponentType]: MenuItem
}>

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

export type BuilderFn = (parent: string, ocho: Ocho) => ComposedComponent

export type ComposerBuilders = {
  [k: string]: BuilderFn
}

/**
 * The main class, which controls the kind of components that are handled by OpenChakra. The ComponentDefinitions
 * provides definition and configuration of these components and an dobject of this class is accessible to all
 * core OpenChakra components and all custom components via useOcho()
 */
class Ocho {
  // Input config
  config: OchoConfig

  // Values derived from config
  componentNames: string[]
  rootComponentNames: string[]
  childComponentNames: string[]
  menuItems: MenuItems
  previewComponents
  rootDraggables
  componentModelBuilders
  inspectorComponents
  previewDefaultProps
  targetComponents
  stylePanels
  templates

  constructor(config: OchoConfig) {
    this.config = config
    this.templates = config.templates
    this.componentNames = this.collectComponentNames()
    this.rootComponentNames = this.collectRootComponentNames()
    this.childComponentNames = this.collectChildComponentNames()
    this.menuItems = this.collectMenuItems()
    this.previewComponents = this.collectPreviewComponents()
    this.rootDraggables = this.collectRootDraggables()
    this.componentModelBuilders = this.collectBuilders()
    this.inspectorComponents = this.collectInspectorComponents()
    this.previewDefaultProps = this.collectPreviewDefaultProps()
    this.targetComponents = this.collectTargetComponents()
    this.stylePanels = this.collectStylePanels()

    console.log('*** componentNames', this.componentNames)
    console.log('*** rootComponentNames', this.rootComponentNames)
    console.log('*** childComponentNames', this.childComponentNames)
    console.log('*** menuItems', this.menuItems)
    console.log('*** previewComponents', this.previewComponents)
    console.log('*** rootDraggables', this.rootDraggables)
    console.log('*** componentModelBuilders', this.componentModelBuilders)
    console.log('*** inspectorComponents', this.inspectorComponents)
    console.log('*** previewDefaultProps', this.previewDefaultProps)
    console.log('*** targetComponents', this.targetComponents)
    console.log('*** stylePanels', this.stylePanels)
  }

  /**
   * Collects all component names available
   */
  collectComponentNames() {
    //: ComponentDefsTypeKeys[]
    return Object.keys(this.config.components).filter(
      (k) => k !== '_Defaults',
    ) as ComponentDefsTypeKeys[]
  }

  /**
   * Collects only root component names
   */
  collectRootComponentNames() {
    // && !defs[name].rootParentType
    const childNames = this.collectChildComponentNames()
    // Roots are everything that is not a child, except those that have children and can act both as root and child
    return Object.keys(this.config.components).filter((k) => {
      return !childNames.includes(k) || this.config.components[k].children
    })
  }

  /**
   * Collects only child components names, ie. components that are bound to a parent component.
   */
  collectChildComponentNames() {
    const childNames = Object.keys(this.config.components).reduce(
      (accum, key) => {
        const obj = this.config.components[key]
        if (obj.children) {
          return [...accum, ...obj.children]
        }
        return accum
      },
      [] as string[],
    )

    return childNames
  }

  /**
   * Generates menuItems structure expected by Sidebar.tsx
   */
  collectMenuItems() {
    const menuItems: MenuItems = {}

    this.rootComponentNames.forEach((name) => {
      const compoDef: ComponentConfig = this.config.components[name]

      // Create root item
      const menuItem: MenuItem = {}
      if (compoDef.rootParentType) {
        menuItem.rootParentType = compoDef.rootParentType
      }
      if (compoDef.soon) {
        menuItem.soon = compoDef.soon
      }
      if (compoDef.isPreset || compoDef.componentModelBuilder) {
        menuItem.isPreset = true
      }

      // Add children
      if (compoDef.children) {
        menuItem.children = {}
        compoDef.children.reduce((accum, childName: string) => {
          const childDef: ComponentConfig = this.config.components[childName]
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

  collectPreviewComponents() {
    const previewComponents: Partial<{
      [k in ComponentType]: {
        previewComponent: React.ComponentType<any>
        component: React.ComponentType<any>
        props?: { [key: string]: any }
      }
    }> = {}

    Object.keys(this.config.components).forEach((compoName) => {
      const compoDef = this.config.components[compoName]

      // Component with its own previewComponent
      if (compoDef.previewComponent) {
        previewComponents[compoName as ComponentType] = {
          previewComponent: compoDef.previewComponent,
          component: this.config.components[compoName].component,
        }
      } else {
        // Find in one of the default previewComponents where compoName appears in the section's
        // applyTo
        const sectionKey = Object.keys(this.config.previewComponents).find(
          (sectionKey) => {
            const section = this.config.previewComponents[sectionKey]
            return section.applyTo.includes(compoName)
          },
        )
        if (!sectionKey) {
          throw Error(`No preview component defined for ${compoName}`)
        }
        const section = this.config.previewComponents[sectionKey]
        previewComponents[compoName as ComponentType] = {
          previewComponent: section.component,
          component: this.config.components[compoName].component,
          props: section.props,
        }
      }
    })

    return previewComponents
  }

  /**
   *
   */
  collectRootDraggables() {
    const draggables: string[] = this.collectRootComponentNames().filter(
      (name) => {
        const obj = this.config.components[name]
        // For roots: if undefined defaults to true
        return obj.rootDraggable === undefined || obj.rootDraggable === true
      },
    )

    // Add meta for roots with children
    draggables.forEach((name) => {
      const obj = this.config.components[name]
      if (obj.children || obj.isPreset || obj.componentModelBuilder) {
        draggables.push(name + 'Meta')
      }
    })

    // Add child compos with explicit rootDraggable=true
    this.collectChildComponentNames().forEach((name) => {
      const obj = this.config.components[name]
      // For children: an explicit true is required
      obj.rootDraggable && draggables.push(name)
    })

    return draggables
  }

  collectBuilders() {
    const builders: Partial<{ [k: string]: BuilderFn }> = {}
    Object.keys(this.config.components).forEach((name) => {
      const obj = this.config.components[name]
      if (obj.componentModelBuilder) {
        builders[name + 'Meta'] = obj.componentModelBuilder
      }
    })

    return builders
  }

  collectInspectorComponents() {
    const inspectorComponents: Partial<{
      [k: string]: React.ComponentType<any>
    }> = {}
    Object.keys(this.config.components).forEach((name) => {
      const obj = this.config.components[name]
      if (obj.inspectorComponent) {
        inspectorComponents[name] = obj.inspectorComponent
      }
    })

    return inspectorComponents
  }

  collectPreviewDefaultProps() {
    const defaultProps: Partial<{ [k: string]: any }> = {}
    Object.keys(this.config.components).forEach((name) => {
      const obj = this.config.components[name]
      let props = obj.previewDefaultProps || {}
      defaultProps[name] = props
    })

    return defaultProps
  }

  collectTargetComponents() {
    const defaultProps: Partial<{ [k: string]: React.ComponentType<any> }> = {}
    Object.keys(this.config.components).forEach((name) => {
      const obj = this.config.components[name]
      defaultProps[name] = obj.component
    })

    return defaultProps
  }

  collectStylePanels() {
    function merge(source: any, target: any) {
      for (const [key, val] of Object.entries(source)) {
        if (val !== null && typeof val === `object`) {
          // @ts-ignore
          target[key] = val
          merge(val, target[key])
        } else {
          target[key] = val
        }
      }
      return target // we're replacing in-situ, so this is more for chaining than anything else
    }

    function cloneObject(obj: any) {
      var clone = {} as any
      for (var i in obj) {
        if (obj[i] != null && typeof obj[i] == 'object')
          clone[i] = cloneObject(obj[i])
        else clone[i] = obj[i]
      }
      return clone
    }

    const stylePanels: Partial<{ [k: string]: StylePanelsConfig }> = {}
    Object.keys(this.config.components).forEach((name) => {
      const obj = this.config.components[name]
      let stylePanelsDef = obj.stylePanels || this.config.stylePanels
      if (obj.stylePanelsOverride) {
        // we will modify stylePanelsDef, so clone it
        stylePanelsDef = cloneObject(stylePanelsDef)
        // Merge the override into the default one
        stylePanelsDef = merge(obj.stylePanelsOverride, stylePanelsDef)
      }
      stylePanels[name] = stylePanelsDef
    })

    return stylePanels
  }

  calcComponentHoverStyle(
    component: IComponent,
    props: any,
    focusInput: boolean,
  ) {
    return this.config.calcComponentHoverStyle(component, props, focusInput)
  }

  calcComponentVisualHelperStyle(component: IComponent, props: any) {
    return this.config.calcComponentVisualHelperStyle(component, props)
  }
}

function isStylePropEnabled(prop: string, panelDef: StylePanelConfig) {
  const propDef = panelDef.styleProps[prop]
  if (!propDef) {
    return true
  }
  if (typeof propDef === 'object') {
    // if explicitly set, then use this value
    if (typeof (propDef as StylePropDetail).enabled !== 'undefined') {
      return (propDef as StylePropDetail).enabled
    }
    // .. otherwise default to true
  }
  return true
}

function targetStyleProp(prop: string, panelDef: StylePanelConfig) {
  const propDef = panelDef.styleProps[prop]
  if (!propDef) {
    return prop
  }
  if (typeof propDef === 'object') {
    return (propDef as StylePropDetail).targetName
  }
  return propDef
}

function stylePropDetail(
  prop: string,
  detail: string,
  panelDef: StylePanelConfig,
) {
  const propDef = panelDef.styleProps[prop]
  if (!propDef) {
    return null
  }
  if (typeof propDef === 'object') {
    return propDef[detail]
  }
  return null
}

export { Ocho, isStylePropEnabled, targetStyleProp, stylePropDetail }
