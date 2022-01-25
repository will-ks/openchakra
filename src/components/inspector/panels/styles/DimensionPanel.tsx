import React, { memo } from 'react'
import { SimpleGrid, Select } from '@chakra-ui/react'
import FormControl from '~chakraui/inspector/controls/FormControl'
import usePropsSelector from '~hooks/usePropsSelector'
import { useForm } from '~hooks/useForm'
import TextControl from '~chakraui/inspector/controls/TextControl'
import { StylePanelProps } from '~components/inspector/panels/styles/types'
import {
  isStylePropEnabled,
  stylePropDetail,
  targetStyleProp,
} from '~core/ComponentDefinitions'

const DimensionPanel: React.FC<StylePanelProps> = ({ isRoot, panelDef }) => {
  const { setValueFromEvent } = useForm()
  const overflow = usePropsSelector(targetStyleProp('overflow', panelDef))

  return (
    <>
      {isStylePropEnabled('width', panelDef) &&
        isStylePropEnabled('height', panelDef) && (
          <SimpleGrid columns={2} spacing={1}>
            <TextControl
              hasColumn
              label="Width"
              name={targetStyleProp('width', panelDef)}
            />
            <TextControl
              hasColumn
              label="Height"
              name={targetStyleProp('height', panelDef)}
            />
          </SimpleGrid>
        )}

      {isStylePropEnabled('minWidth', panelDef) &&
        isStylePropEnabled('minHeight', panelDef) &&
        isStylePropEnabled('maxWidth', panelDef) &&
        isStylePropEnabled('maxHeight', panelDef) && (
          <SimpleGrid columns={2} spacing={1}>
            <TextControl
              hasColumn
              label="Min W"
              name={targetStyleProp('minWidth', panelDef)}
            />
            <TextControl
              hasColumn
              label="Min H"
              name={targetStyleProp('minHeight', panelDef)}
            />

            <TextControl
              hasColumn
              label="Max W"
              name={targetStyleProp('maxWidth', panelDef)}
            />
            <TextControl
              hasColumn
              label="Max H"
              name={targetStyleProp('maxHeight', panelDef)}
            />
          </SimpleGrid>
        )}

      {isStylePropEnabled('overflow', panelDef) && (
        <FormControl label="Overflow">
          <Select
            size="sm"
            value={overflow || ''}
            onChange={setValueFromEvent}
            name="overflow"
          >
            <>
              {stylePropDetail('overflow', 'config', panelDef) ? (
                (stylePropDetail(
                  'overflow',
                  'config',
                  panelDef,
                )! as string[]).map(op => <option>{op}</option>)
              ) : (
                <>
                  <option>visible</option>
                  <option>hidden</option>
                  <option>scroll</option>
                </>
              )}
            </>
          </Select>
        </FormControl>
      )}
    </>
  )
}

export default memo(DimensionPanel)
