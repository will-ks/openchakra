import React, { memo } from 'react'
import usePropsSelector from '~hooks/usePropsSelector'
import SizeControl from '~chakraui/inspector/controls/SizeControl'
import ColorsControl from '~chakraui/inspector/controls/ColorsControl'
import SwitchControl from '~chakraui/inspector/controls/SwitchControl'

const RadioPanel = () => {
  const size = usePropsSelector('size')

  return (
    <>
      <SizeControl label="Size" options={['sm', 'md', 'lg']} value={size} />
      <ColorsControl name="colorScheme" label="Color Scheme" />
      <SwitchControl label="Checked" name="isChecked" />
      <SwitchControl label="Full width" name="isFullWidth" />
      <SwitchControl label="Invalid" name="isInvalid" />
    </>
  )
}

export default memo(RadioPanel)
