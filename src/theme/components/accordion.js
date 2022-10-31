import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const ticket = definePartsStyle((props) => {
    return {
        container: {
            bg: "white",
            boxShadow: '-1px 0px 40px rgb(0 0 0 / 5%)',
            borderRadius: "4",
            mb: "2",
            border: 'none',
        },
        button: {
            borderRadius: "4",
            px:"6",
            py: "5",
            // color: "gray.1000",
            _hover: {
                bg: 'white',
                // color: "red.600",
            },
            _focus: {
                // color: "blue.500",
            },
        },
    };
});

const variants = {
    ticket,
};

const Accordion = defineMultiStyleConfig({
    variants,
    defaultProps: {
        size: "md",
        variant: "ticket",
    },
});

export default Accordion;