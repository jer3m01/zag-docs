//(bg|text|border)-(primary|secondary|default)-(subtle|bold)

export const semanticTokens = {
  colors: {
    "bg-default-subtle": {
      default: "white",
      _dark: "gray.800",
    },
    "bg-default-bold": {
      default: "gray.100",
      _dark: "gray.700",
    },
    "bg-primary-subtle": "green.500",
    "bg-primary-bold": {
      default: "green.600",
      _dark: "green.400",
    },
    "bg-secondary-subtle": "black",
    "bg-secondary-bold": {
      default: "gray.700",
      _dark: "gray.900",
    },
    "bg-code-block": {
      default: "white",
      _dark: "gray.900",
    },
    "bg-header": {
      default: "whiteAlpha.900",
      _dark: "rgba(26, 32, 44, 0.92)",
    },
    "bg-tertiary-bold": {
      default: "green.100",
      _dark: "green.900",
    },
    "bg-tertiary-subtle": {
      default: "green.50",
      _dark: "green.900",
    },

    "text-default-bold": {
      default: "gray.900",
      _dark: "gray.50",
    },
    "text-default-subtle": {
      default: "gray.600",
      _dark: "gray.400",
    },
    "text-primary-bold": "green.500",
    "text-primary-subtle": {
      default: "green.600",
      _dark: "green.400",
    },

    "border-default-subtle": {
      default: "gray.100",
      _dark: "gray.700",
    },
    "border-default-bold": {
      default: "gray.200",
      _dark: "gray.600",
    },
    "border-primary-subtle": "green.500",
    "border-primary-bold": {
      default: "green.600",
      _dark: "green.400",
    },
  },
}
