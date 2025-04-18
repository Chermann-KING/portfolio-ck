interface ColorConfig {
  primary: {
    DEFAULT: string;
    dark: string;
    light: string;
  };
  background: {
    DEFAULT: string;
    dark: string;
    card: {
      DEFAULT: string;
      dark: string;
    };
  };
  text: {
    primary: {
      DEFAULT: string;
      dark: string;
    };
    secondary: {
      DEFAULT: string;
      dark: string;
    };
  };
}

export const colors: ColorConfig = {
  primary: {
    DEFAULT: "#7C3AED",
    dark: "#6D28D9",
    light: "#8B5CF6",
  },
  background: {
    DEFAULT: "#FFFFFF",
    dark: "#1A1B1E",
    card: {
      DEFAULT: "#F4F4F5",
      dark: "#2A2B2E",
    },
  },
  text: {
    primary: {
      DEFAULT: "#18181B",
      dark: "#FFFFFF",
    },
    secondary: {
      DEFAULT: "#71717A",
      dark: "#A1A1AA",
    },
  },
};
