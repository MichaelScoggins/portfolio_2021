module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // removing the rendering of backticks for inline code
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              color: "black",
              fontWeight: "500",
            },
            // changing the color of bullet points from white to purple
            "ul > li::before": {
              content: '""',
              position: "absolute",
              backgroundColor: "purple",
              borderRadius: "50%",
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
