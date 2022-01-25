import React, { memo } from 'react'

import { IComponent } from '~core/Ocho'
import { useOcho } from '~contexts/ocho-context'

const Panels: React.FC<{ component: IComponent; isRoot: boolean }> = ({
  component,
  isRoot,
}) => {
  const ocho = useOcho()
  const { type } = component

  if (isRoot) {
    return null
  }

  const InspectorComponent = ocho.inspectorComponents[type]
  if (InspectorComponent) {
    return <InspectorComponent />
  }
  return null
}

export default memo(Panels)
