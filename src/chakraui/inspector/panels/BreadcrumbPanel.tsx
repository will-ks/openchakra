import React, { memo } from 'react'
import TextControl from '~chakraui/inspector/controls/TextControl'

const BreadcrumbPanel = () => {
  return (
    <>
      <TextControl name="separator" label="Separator" />
      <TextControl name="spacing" label="Spacing" />
    </>
  )
}

export default memo(BreadcrumbPanel)
