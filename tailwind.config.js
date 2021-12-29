module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
    },
    fontFamily: {
      sans: ["Helvetica"],
    },
    fontSize: {
      small: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.375rem"],
      large: ["1.125rem", "1.625rem"],
      16: ["1rem", "1rem"],
      52: ["3.25rem", "3.5rem"],
    },
    extend: {
      animation: {},
      borderRadius: {
        "4px": "4px",
      },
      borderWidth: {
        px: "1px",
      },
      colors: {
        black: "#000000",
      },
      height: {
        header: "80px",
        "1px": "1px",
        "800px": "800px",
      },
      minHeight: {
        "400px": "400px",
      },
      maxWidth: {
        "1400px": "1400px",
        "49/100": "49%%",
      },
      minWidth: {
        "800px": "800px",
      },
      width: {
        "main-sm": "343px",
        "main-md": "720px",
        "main-lg": "960px",
        "1px": "1px",
        "9/10": "90%",
      },
      padding: {
        main: "8px",
        "main-sm": "16px",
        "main-md": "24px",
        "main-lg": "32px",
        "80px": "80px",
      },
      spacing: {
        "10px": "10px",
      },
      lineHeight: {
        20: "1.25rem",
        "22px": "1.375rem",
      },
      maxHeight: {
        "800px": "800px",
      },
      inset: {
        "0px": "0px",
        "-50": "-50px",
      },
      zIndex: {
        1: 1,
        2: 2,
        9: 9,
        9999: 9999,
      },
    },
  },
  variants: {},
  plugins: [],
};
