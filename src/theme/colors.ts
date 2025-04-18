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
    DEFAULT: "#FAFAFA",
    dark: "#121212",
    card: {
      DEFAULT: "#FFFFFF",
      dark: "#1E1E1E",
    },
  },
  text: {
    primary: {
      DEFAULT: "#111827",
      dark: "#FFFFFF",
    },
    secondary: {
      DEFAULT: "#4B5563",
      dark: "#D1D5DB",
    },
  },
};
