import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const accessibleColorMap = {
    yellow: {
        bg: "yellow.400",
        color: "black",
        hoverBg: "yellow.500",
        activeBg: "yellow.600",
    },
    cyan: {
        bg: "cyan.400",
        color: "black",
        hoverBg: "cyan.500",
        activeBg: "cyan.600",
    },
};

const baseStyle = defineStyle({
    borderRadius: "4px",
    fontWeight: "normal",
    _active: {
        // fontWeight: "bold",
    },
    _disabled: {
        cursor: "not-allowed",
        borderColor: "gray.500",
    },
});

const variantSolid = defineStyle((props) => {
    const { colorScheme: c } = props;

    const {
        color = "white",
        hoverBg = `${c}.250`,
        activeBg = `${c}.1000`,
    } = accessibleColorMap[c] ?? {};

    return {
        bg: "brand.1000",
        color: mode(color, `white`)(props),
        _hover: {
            bg: mode(hoverBg, `${c}.300`)(props),
        },
        _disabled: {
            bg: "gray.100",
        },
        _active: {
            bg: mode(activeBg, `${c}.400`)(props),
            fontWeight: "normal",
        },
    };
});

const variantOutline = defineStyle((props) => {
    return {
        border: "1px solid",
        color: mode("gray.1000", "white")(props),
        borderColor: mode("gray.1000", "white")(props),
        ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
            marginEnd: "-1px",
        },
        _hover: {
            bg: mode("gray.250", "gray.850")(props),
        },
        _disabled: {
            bg: "white",
        },
    };
});

const variantGhost = defineStyle((props) => {
    // const { colorScheme: c } = props;

    return {
        color: "gray.1000",
        bg: "transparent",
        _hover: {
            // bg: mode(`${c}.50`, darkHoverBg)(props),
            bg: "gray.100",
        },
        _active: {
            bg: "transparent",
        },
    };
});

const variantSelect = defineStyle((props) => {
    return {
        bg: "transparent",
        px: "6",
        py: "2",
        fontSize: "sm",
        lineHeight: "short",
        borderRadius: "28",
        border: "1px solid",
        borderColor: "gray.850",
        color: mode("gray.1000", `white`)(props),
        _hover: {},
        _disabled: {
            bg: "gray.100",
        },
        _active: {
            fontWeight: "normal",
            color: "white",
            bg: mode("gray.850", "gray.1000")(props),
        },
        _dark: {
            _active: {
              borderColor: 'gray.950',
              bg: 'gray.950',
            }
        },
    };
});

const sizes = {
    lg: defineStyle({
        fontSize: "md",
        lineHeight: "short",
        px: "4",
        py: "3",
    }),
    sm: defineStyle({
        fontSize: "xs",
        lineHeight: "shorter",
        px: "4",
        py: "2",
    }),
};

const variants = {
    solid: variantSolid,
    outline: variantOutline,
    ghost: variantGhost,
    select: variantSelect,
};

const Button = defineStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: {
        size: "lg",
        colorScheme: "brand",
        variant: "solid",
    },
});

export default Button;
