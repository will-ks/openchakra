import React from 'react'
import { Box, InputRightAddon } from '@chakra-ui/react'
import { useInteractive } from '~hooks/useInteractive'
import { IComponent } from '~core/ComponentDefinitions'

const InputRightAddonPreview: React.FC<{ component: IComponent }> = ({
  component,
}) => {
  const { props, ref } = useInteractive(component)
  const boxProps: any = {}

  return (
    <Box {...boxProps} ref={ref}>
      <InputRightAddon {...props} />
    </Box>
  )
}

export default InputRightAddonPreview
