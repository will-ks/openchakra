import React, { memo } from 'react'

import {IComponent} from "~core/ComponentDefinitions";
import {useComponentDefinitions} from "~contexts/component-definition";

const Panels: React.FC<{ component: IComponent; isRoot: boolean }> = ({
  component,
  isRoot,
}) => {
  const componentDefs = useComponentDefinitions()
  const { type } = component

  if (isRoot) {
    return null
  }

  const InspectorComponent = componentDefs.inspectorComponents[type]
  if (InspectorComponent) {
    return <InspectorComponent/>
  }
  return null
}

export default memo(Panels)
