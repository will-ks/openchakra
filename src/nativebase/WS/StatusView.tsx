import { Box, Column, Row } from 'native-base'
import React from 'react'

export const StatusView: React.FC = () => {
  return (
    <Box width="100%" padding="10px">
      <Row space={5}>
        <Column>Worker:</Column>
        <Column>CurrentWorker.userName</Column>
      </Row>
      <Row space={5}>
        <Column>Task:</Column>
        <Column>Task.label</Column>
      </Row>
    </Box>
  )
}
