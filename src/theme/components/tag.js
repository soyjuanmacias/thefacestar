const Tag = {
    variants: {
        soft: {
            container: {
                color: "brand.1000",
                rounded: "xl",
                bg: "brand.150",
                _dark: {
                    color: "bg.dark",
                    bg: "brand.250",
                },
            },
        },
        default: {
            container: {
                color: "white",
                rounded: "xl",
                bg: "brand.1000",
                _dark: {
                    color: "bg.dark",
                    bg: "brand.1000",
                },
            },
        },
        inactive: {
            container: {
                color: "gray.750",
                bg: "gray.250",
                rounded: "xl",
                _dark: {
                    color: "gray.400",
                    bg: "gray.850",
                },
            },
        },
        high: {
            container: {
                color: "white",
                rounded: "xl",
                bg: "priority.1000",
                _dark: {
                    color: "bg.dark",
                },
            },
        },
        medium: {
            container: {
                color: "white",
                rounded: "xl",
                bg: "priority.medium",
                _dark: {
                    color: "bg.dark",
                },
            },
        },
        low: {
            container: {
                color: "white",
                rounded: "xl",
                bg: "priority.low",
                _dark: {
                    color: "bg.dark",
                },
            },
        },
        entity: {
            container: {
                color: "white",
                rounded: "xl",
                bg: "gray.1000",
                _dark: {
                    bg: "gray.850",
                    color: "white",
                },
            },
        },
        open: {
            container: {
                color: "white",
                rounded: "xl",
                bg: "brand.1000",
                _dark: {
                    color: "bg.dark",
                },
            },
        },
        closed: {
            container: {
                color: "white",
                rounded: "xl",
                bg: "gray.750",
                _dark: {
                    color: "bg.dark",
                },
            },
        },
        pending: {
            container: {
                color: "bg.dark",
                rounded: "xl",
                bg: "priority.250",
                _dark: {
                    color: "bg.dark",
                },
            },
        },
    },
    sizes: {
        md: {
            container: {
                py: 1,
                px: 2,
            },
        },
    },
    defaultProps: {
        size: "md",
    },
};

export default Tag;
