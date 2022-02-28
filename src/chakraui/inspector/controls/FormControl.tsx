import React, { ReactNode, memo } from 'react'
import {
  FormLabel,
  FormControl as ChakraFormControl,
  Grid,
  Box,
} from '@chakra-ui/react'

type FormControlPropType = {
  label: ReactNode
  children: ReactNode
  htmlFor?: string
  hasColumn?: boolean
}

const FormControl: React.FC<FormControlPropType> = ({
  label,
  htmlFor,
  children,
  hasColumn,
}) => (
  <ChakraFormControl
    mb={3}
    as={Grid}
    display="flex"
    alignItems="center"
    justifyItems="center"
  >
    <FormLabel
      p={0}
      mr={2}
      color="gray.500"
      lineHeight="1rem"
      width={hasColumn ? '2.5rem' : '90px'}
      fontSize="xs"
      htmlFor={htmlFor}
    >
      {label}
    </FormLabel>
    <Box
      display="flex"
      alignItems="center"
      justifyItems="center"
      width={'100%'}
    >
      {children}
    </Box>
  </ChakraFormControl>
)

export default memo(FormControl)
