import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts:{
        body: "Roboto",
        heading: "Roboto"
    },
    styles: {
        global:{
            body:{
                bg: 'white.900',
                color: 'white.50'
            }
        }
    }
});