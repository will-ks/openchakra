import React, { memo } from 'react'
import { useForm } from '~hooks/useForm'
import { Select } from '@chakra-ui/react'
import FormControl from '~chakraui/inspector/controls/FormControl'
import usePropsSelector from '~hooks/usePropsSelector'
import SizeControl from '~chakraui/inspector/controls/SizeControl'
import SwitchControl from '~chakraui/inspector/controls/SwitchControl'
import TextControl from '~chakraui/inspector/controls/TextControl'

const InputPanel = () => {
  const { setValueFromEvent } = useForm()

  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')

  return (
    <>
      <SizeControl label="Size" options={['sm', 'md', 'lg']} value={size} />
      <TextControl label="Value" name="value" />
      <TextControl label="Placeholder" name="placeholder" />

      <FormControl htmlFor="variant" label="Variant">
        <Select
          id="variant"
          onChange={setValueFromEvent}
          name="variant"
          size="sm"
          value={variant || ''}
        >
          <option>outline</option>
          <option>unstyled</option>
          <option>flushed</option>
          <option>filled</option>
        </Select>
      </FormControl>

      <SwitchControl label="Invalid" name="isInvalid" />
      <SwitchControl label="Read Only" name="isReadOnly" />
      <SwitchControl label="Full width" name="isFullWidth" />
    </>
  )
}

export default memo(InputPanel)
