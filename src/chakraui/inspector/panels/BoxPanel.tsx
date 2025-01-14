import React, { memo } from 'react'
import ColorsControl from '~chakraui/inspector/controls/ColorsControl'

const BoxPanel = () => (
  <ColorsControl
    withFullColor
    label="Color"
    name="backgroundColor"
    enableHues
  />
)

export default memo(BoxPanel)
