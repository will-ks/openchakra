import React, { memo } from 'react'
import { Accordion } from '@chakra-ui/react'

import PaddingPanel from '~components/inspector/panels/styles/PaddingPanel'
import DimensionPanel from '~components/inspector/panels/styles/DimensionPanel'
import BorderPanel from '~components/inspector/panels/styles/BorderPanel'
import DisplayPanel from '~components/inspector/panels/styles/DisplayPanel'
import TextPanel from '~components/inspector/panels/styles/TextPanel'
import AccordionContainer from '~components/inspector/AccordionContainer'
import ColorsControl from '~components/inspector/controls/ColorsControl'
import GradientControl from '~components/inspector/controls/GradientControl'
import EffectsPanel from './styles/EffectsPanel'
import ChildrenInspector from '~components/inspector/ChildrenInspector'
import ParentInspector from '~components/inspector/ParentInspector'
import CustomPropsPanel from './CustomPropsPanel'
import BackgroundColorPanel from "~components/inspector/panels/styles/BackgroundColorPanel";
import {StylePanelsDef} from "~componentDefs";

interface Props {
  isRoot: boolean
  showChildren: boolean
  parentIsRoot: boolean,
  stylePanels: StylePanelsDef
}

const StylesPanel: React.FC<Props> = ({
  isRoot,
  showChildren,
  parentIsRoot,
  stylePanels
}) => {

  let panels = []
  if (isRoot) {
    const panelDef = stylePanels["Backgrounds"]
    const BgComp = panelDef.component

    panels.push(
      <AccordionContainer title={panelDef.title}>
        <BgComp isRoot={isRoot} panelDef={panelDef}/>
      </AccordionContainer>
    )
  }
  else {
    Object.keys(stylePanels).map(key => {
      const panelDef = stylePanels[key]
      const Panel = panelDef.component
      panels.push(
        <AccordionContainer title={panelDef.title}>
          <Panel isRoot={isRoot} panelDef={panelDef}/>
        </AccordionContainer>
      )

    })
  }

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {!isRoot && (
        <AccordionContainer title="Custom props">
          <CustomPropsPanel/>
        </AccordionContainer>
      )}

      {!isRoot && !parentIsRoot && (
        <AccordionContainer title="Parent">
          <ParentInspector/>
        </AccordionContainer>
      )}

      {showChildren && (
        <AccordionContainer title="Children">
          <ChildrenInspector/>
        </AccordionContainer>
      )}

      {panels}
    </Accordion>
  )
}
export default memo(StylesPanel)
