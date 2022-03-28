import { forwardRef  } from "react";
import { FormControl, FormLabel, Input as ChakraInput, FormErrorMessage} from "@chakra-ui/react";


const InputBase = ({name, label, error = null, ...rest}, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      { !!label && <FormLabel color="purple.800" htmlFor={name}>{label}</FormLabel> }

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="purple.800"
        variant="outline"
        _hover={{
            bgColor: "white.900"
        }}
        size="lg"
        ref={ref}
        {...rest}
        color="black"
      />
      
      {!!error && (
        <FormErrorMessage>{error.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)