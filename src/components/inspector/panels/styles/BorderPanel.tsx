import React, { memo } from 'react'
import TextControl from '~chakraui/inspector/controls/TextControl'
import { StylePanelProps } from '~components/inspector/panels/styles/types'
import { isStylePropEnabled, targetStyleProp } from '~core/Ocho'

const BackgroundColorPanel: React.FC<StylePanelProps> = ({
  isRoot,
  panelDef,
}) => {
  return (
    <>
      {isStylePropEnabled('border', panelDef) && (
        <TextControl
          name={targetStyleProp('border', panelDef)}
          label="Border"
        />
      )}
      {isStylePropEnabled('borderRadius', panelDef) && (
        <TextControl
          name={targetStyleProp('borderRadius', panelDef)}
          label="Border radius"
        />
      )}
    </>
  )
}

export default memo(BackgroundColorPanel)
