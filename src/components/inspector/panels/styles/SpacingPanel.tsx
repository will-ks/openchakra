import React, { memo } from 'react'
import TextControl from '~chakraui/inspector/controls/TextControl'
import PaddingPanel from "~components/inspector/panels/styles/PaddingPanel";
import {StylePanelProps} from "~components/inspector/panels/styles/types";

const SpacingPanel: React.FC<StylePanelProps> = ({
  isRoot,
  panelDef
}) => {
  return (
    <>
      <PaddingPanel type="margin" isRoot={isRoot} panelDef={panelDef}/>
      <PaddingPanel type="padding" isRoot={isRoot} panelDef={panelDef}/>
    </>
  )
}

export default memo(SpacingPanel)
