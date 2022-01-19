import { useSelector } from 'react-redux'
import { RootState } from '~core/store'
import { useInspectorUpdate } from '~contexts/inspector-context'
import { useEffect } from 'react'
import {useComponentDefinitions} from "~contexts/component-definition";
import {ComponentType} from "~core/ComponentDefinitions";

const usePropsSelector = (propsName: string) => {
  const { addActiveProps } = useInspectorUpdate()
  const componentDefs = useComponentDefinitions()

  const getDefaultFormProps = (type: ComponentType) => {
    const previewProps = componentDefs.previewDefaultProps[type]
    const defaultProps = componentDefs.targetComponents[type]!.defaultProps
    return { ...defaultProps, ...previewProps?.form }
  }

  useEffect(() => {
    // Register form props name for custom props panel
    addActiveProps(propsName)
  }, [addActiveProps, propsName])

  const value = useSelector((state: RootState) => {
    const component =
      state.components.present.components[state.components.present.selectedId]
    const propsValue = component.props[propsName]

    if (propsValue !== undefined) {
      return propsValue
    }

    if (getDefaultFormProps(component.type)[propsName] !== undefined) {
      return getDefaultFormProps(component.type)[propsName]
    }

    return ''
  })

  return value
}

export default usePropsSelector
