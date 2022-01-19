import React, { memo } from 'react'
import ColorsControl from '~chakraui/inspector/controls/ColorsControl'
import GradientControl from '~chakraui/inspector/controls/GradientControl'
import { StylePanelProps } from '~components/inspector/panels/styles/types'
import { isStylePropEnabled, targetStyleProp } from '~core/ComponentDefinitions'

const BackgroundColorPanel: React.FC<StylePanelProps> = ({
  isRoot,
  panelDef,
}) => (
  <>
    {isStylePropEnabled('backgroundColor', panelDef) && (
      <ColorsControl
        withFullColor
        label="Color"
        name={targetStyleProp('backgroundColor', panelDef)}
        enableHues
      />
    )}
    {!isRoot && isStylePropEnabled('bgGradient', panelDef) && (
      <GradientControl
        withFullColor
        label="Gradient"
        name={targetStyleProp('bgGradient', panelDef)}
        options={[
          'to top',
          'to top right',
          'to top left',
          'to bottom right',
          'to bottom',
          'to bottom left',
          'to right',
          'to left',
        ]}
        enableHues
      />
    )}
  </>
)

export default memo(BackgroundColorPanel)
