import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from '~chakraui/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import { StylePanelProps } from '~components/inspector/panels/styles/types'
import { targetStyleProp } from '~core/Ocho'
import TextControl from '~chakraui/inspector/controls/TextControl'

const FlexPanel: React.FC<StylePanelProps> = ({ isRoot, panelDef }) => {
  const { setValueFromEvent } = useForm()
  const alignItems = usePropsSelector(targetStyleProp('alignItems', panelDef))
  const flexDirection = usePropsSelector(
    targetStyleProp('flexDirection', panelDef),
  )
  const justifyContent = usePropsSelector(
    targetStyleProp('justifyContent', panelDef),
  )

  return (
    <>
      <TextControl label="flex" name="flex" />
      <FormControl label="Direction">
        <Select
          name={targetStyleProp('flexDirection', panelDef)}
          size="sm"
          value={flexDirection}
          onChange={setValueFromEvent}
        >
          <option>row</option>
          <option>row-reverse</option>
          <option>column</option>
          <option>column-reverse</option>
        </Select>
      </FormControl>

      <FormControl label="Justify content">
        <Select
          name={targetStyleProp('justifyContent', panelDef)}
          size="sm"
          value={justifyContent}
          onChange={setValueFromEvent}
        >
          <option>flex-start</option>
          <option>center</option>
          <option>flex-end</option>
          <option>space-between</option>
          <option>space-around</option>
        </Select>
      </FormControl>

      <FormControl label="Align items">
        <Select
          name={targetStyleProp('alignItems', panelDef)}
          size="sm"
          value={alignItems || ''}
          onChange={setValueFromEvent}
        >
          <option>stretch</option>
          <option>flex-start</option>
          <option>center</option>
          <option>flex-end</option>
          <option>space-between</option>
          <option>space-around</option>
        </Select>
      </FormControl>
    </>
  )
}

export default memo(FlexPanel)
