import React, { memo } from 'react'
import ColorsControl from '~chakraui/inspector/controls/ColorsControl'
import VariantsControl from '~chakraui/inspector/controls/VariantsControl'
import SizeControl from '~chakraui/inspector/controls/SizeControl'
import usePropsSelector from '~hooks/usePropsSelector'
import SwitchControl from '~chakraui/inspector/controls/SwitchControl'
import IconControl from '~chakraui/inspector/controls/IconControl'

const IconButtonPanel = () => {
  const size = usePropsSelector('size')
  const variant = usePropsSelector('variant')

  return (
    <>
      <IconControl name="icon" label="Icon" />
      <SizeControl name="size" label="Size" value={size} />
      <ColorsControl label="Color" name="colorScheme" />
      <SwitchControl label="Loading" name="isLoading" />
      <SwitchControl label="Round" name="isRound" />
      <VariantsControl label="Variant" name="variant" value={variant} />
    </>
  )
}

export default memo(IconButtonPanel)
