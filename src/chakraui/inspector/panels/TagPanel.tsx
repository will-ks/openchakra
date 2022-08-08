import React from 'react'
import { Select } from '@chakra-ui/react'
import { useForm } from '~hooks/useForm'
import SizeControl from '~chakraui/inspector/controls/SizeControl'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import ColorsControl from '~chakraui/inspector/controls/ColorsControl'
import FormControl from '~chakraui/inspector/controls/FormControl'
import usePropsSelector from '~hooks/usePropsSelector'
import SwitchControl from '~chakraui/inspector/controls/SwitchControl'

const TagPanel = () => {
  const { setValueFromEvent } = useForm()

  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')
  const rounded = usePropsSelector('rounded')

  return (
    <>
      <ChildrenControl />
      <SizeControl
        options={['sm', 'md', 'lg']}
        name="size"
        label="Size"
        value={size}
      />
      <FormControl htmlFor="variant" label="Variant">
        <Select
          id="variant"
          onChange={setValueFromEvent}
          name="variant"
          size="sm"
          value={variant || ''}
        >
          <option>solid</option>
          <option>outline</option>
          <option>subtle</option>
        </Select>
      </FormControl>

      <ColorsControl label="Color Scheme" name="colorScheme" />

      <SizeControl name="rounded" label="Border radius" value={rounded} />

      <SwitchControl label="Inline" name="isInline" />
    </>
  )
}

export default TagPanel
