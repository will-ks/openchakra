import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from '~chakraui/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import FlexPanel from './FlexPanel'
import { StylePanelProps } from '~components/inspector/panels/styles/types'
import { isStylePropEnabled, targetStyleProp } from '~core/ComponentDefinitions'

const DisplayPanel: React.FC<StylePanelProps> = ({ isRoot, panelDef }) => {
  const { setValueFromEvent } = useForm()
  const display = usePropsSelector(targetStyleProp('display', panelDef))
  const FlexPanel = panelDef.children!['FlexPanel']!.component

  return (
    <>
      {isStylePropEnabled('display', panelDef) && (
        <>
          <FormControl label="Display">
            <Select
              size="sm"
              value={display || ''}
              onChange={setValueFromEvent}
              name={targetStyleProp('display', panelDef)}
            >
              <option>block</option>
              <option>flex</option>
              <option>inline</option>
              <option>grid</option>
              <option>inline-block</option>
            </Select>
          </FormControl>

          {display === 'flex' && (
            <FlexPanel
              isRoot={isRoot}
              panelDef={panelDef.children!['FlexPanel']!}
            />
          )}
        </>
      )}
    </>
  )
}

export default memo(DisplayPanel)
