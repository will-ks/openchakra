import { useSelector } from 'react-redux'
import { RootState } from '~core/store'
import { useInspectorUpdate } from '~contexts/inspector-context'
import { useEffect } from 'react'
import { useOcho } from '~contexts/ocho-context'
import { ComponentType } from '~core/Ocho'

const usePropsSelector = (propsName: string) => {
  const { addActiveProps } = useInspectorUpdate()
  const ocho = useOcho()

  const getDefaultFormProps = (type: ComponentType) => {
    const previewProps = ocho.previewDefaultProps[type]
    const defaultProps = ocho.targetComponents[type]!.defaultProps
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
