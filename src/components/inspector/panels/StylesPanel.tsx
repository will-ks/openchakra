import React, { memo } from 'react'
import { Accordion } from '@chakra-ui/react'

import AccordionContainer from '~components/inspector/AccordionContainer'
import ChildrenInspector from '~components/inspector/ChildrenInspector'
import ParentInspector from '~components/inspector/ParentInspector'
import CustomPropsPanel from './CustomPropsPanel'
import { StylePanelsDef } from '~core/ComponentDefinitions'

interface Props {
  isRoot: boolean
  showChildren: boolean
  parentIsRoot: boolean
  stylePanels: StylePanelsDef
}

const StylesPanel: React.FC<Props> = ({
  isRoot,
  showChildren,
  parentIsRoot,
  stylePanels,
}) => {
  let panels = []
  if (isRoot) {
    const panelDef = stylePanels['Backgrounds']
    const BgComp = panelDef.component

    panels.push(
      <AccordionContainer title={panelDef.title}>
        <BgComp isRoot={isRoot} panelDef={panelDef} />
      </AccordionContainer>,
    )
  } else {
    Object.keys(stylePanels).map(key => {
      const panelDef = stylePanels[key]
      const Panel = panelDef.component
      panels.push(
        <AccordionContainer title={panelDef.title}>
          <Panel isRoot={isRoot} panelDef={panelDef} />
        </AccordionContainer>,
      )
    })
  }

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {!isRoot && (
        <AccordionContainer title="Custom props">
          <CustomPropsPanel />
        </AccordionContainer>
      )}

      {!isRoot && !parentIsRoot && (
        <AccordionContainer title="Parent">
          <ParentInspector />
        </AccordionContainer>
      )}

      {showChildren && (
        <AccordionContainer title="Children">
          <ChildrenInspector />
        </AccordionContainer>
      )}

      {panels}
    </Accordion>
  )
}
export default memo(StylesPanel)
