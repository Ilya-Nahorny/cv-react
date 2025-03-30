module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1177px",
        },
      },
      colors: {
        // Light mode colors
        lightBg: "var(--light-color)",

        // Dark mode colors
        darkBgMain: "#1F2937",
        darkBgChild: "#34495E",

        darkTextWhite: "#ffffff",
        darkTextMain: "#D1D5DB",
        darkTextChild: "#9CA3AF",

        darkBorder: "#6B7280",

        darkHref: "#3B82F6",
      },
    },
  },
  plugins: [],
};
