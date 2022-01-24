import React from 'react'
import { Box, Heading, Row, Button } from 'native-base'

export const InstructionInteractions: React.FC = () => {
  return (
    <Box width="100%" padding="10px">
      <Row justifyContent="center">
        <Heading size="lg">Press OK if successful or FAIL if failed</Heading>
      </Row>
      <Row justifyContent="center" space={5}>
        <Button
          backgroundColor={'light.100'}
          _text={{ color: 'black' }}
          size={'lg'}
        >
          OK
        </Button>
        <Button
          backgroundColor={'light.100'}
          _text={{ color: 'black' }}
          size={'lg'}
        >
          FAIL
        </Button>
      </Row>
    </Box>
  )
}
