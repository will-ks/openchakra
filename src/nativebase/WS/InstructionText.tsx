import { Box, Column, Row, Text } from 'native-base'
import React from 'react'

export const InstructionText: React.FC = () => {
  return (
    <Box width="100%" padding="10px">
      <Text flex={1} pr={1} color="coolGray.800" size={40}>
        Instruction Text
      </Text>
    </Box>
  )
}
