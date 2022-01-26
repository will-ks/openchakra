import { generateId } from '~utils/generateId'
import { ComponentType, IComponents, Ocho } from '~core/Ocho'

type AddNode = {
  type: ComponentType
  parent?: string
  props?: any
  rootParentType?: ComponentType
}

class Composer {
  components: IComponents = {}

  rootComponentType: ComponentType | undefined = undefined

  ocho: Ocho

  constructor(ocho: Ocho, name?: ComponentType) {
    this.ocho = ocho
    if (name) {
      this.rootComponentType = name
    }
  }

  addNode = ({
    type,
    parent = 'root',
    props = {},
    rootParentType,
  }: AddNode): string => {
    const id = generateId()

    if (parent === 'root' && !this.rootComponentType) {
      this.rootComponentType = type
    }
    const localRootParentType = rootParentType || this.rootComponentType

    const { form, ...defaultProps } = this.ocho.previewDefaultProps[type] || {}

    this.components = {
      ...this.components,
      [id]: {
        children: [],
        type,
        parent,
        id,
        props: { ...defaultProps, ...props },
        rootParentType: localRootParentType,
      },
    }

    if (parent !== 'root' && this.components[parent]) {
      this.components[parent].children.push(id)
    }

    return id
  }

  getComponents() {
    return this.components
  }
}

export default Composer
