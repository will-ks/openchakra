import React from 'react'
import SwitchControl from '~chakraui/inspector/controls/SwitchControl'

const FormControlPanel = () => {
  return (
    <>
      <SwitchControl label="Invalid" name="isInvalid" />
      <SwitchControl label="Required" name="isRequired" />
      <SwitchControl label="Disabled" name="isDisabled" />
    </>
  )
}

export default FormControlPanel
