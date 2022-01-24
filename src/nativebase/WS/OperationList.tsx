import React from 'react'
import { Box, Row, Text, List } from 'native-base'

export const OperationList: React.FC = () => {
  return (
    <Box
      borderBottomWidth="1"
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
      width="100%"
    >
      <Row>
        <Text flex="1" bold pl={3.5}>
          Step
        </Text>
        <Text flex="1" bold pr={6}>
          Operation
        </Text>
      </Row>
      <List bgColor="white.100">
        <Row>
          <Text color="coolGray.600" flex={1}>
            Index 1
          </Text>
          <Text flex={1} pr={1} color="coolGray.800">
            Operation 1 Name
          </Text>
        </Row>
        <Row>
          <Text color="coolGray.600" flex={1}>
            Index 2
          </Text>
          <Text flex={1} pr={1} color="coolGray.800">
            Operation 2 Name
          </Text>
        </Row>
      </List>
    </Box>
  )
}
