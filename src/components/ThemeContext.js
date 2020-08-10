import React from "react";
import Brightness4 from "@material-ui/icons/Brightness4";
import Brightness7 from "@material-ui/icons/Brightness7";

const navbarDarkTheme = "#2b3743";
const navbarLightTheme = "#FFFFFF";

const fontColorDarkTheme = "#f9f9fa";
const fontColorLightTheme = "#0e1112";

const backgroundDarkTheme = "#202d36";
const backgroundLightTheme = "#fafafa";

const controlBackgroundDarkTheme = "#2b3743";
const controlBackgroundLightTheme = "#ffffff";

// const navbarHeight = 70;

export const themes = {
  dark: {
    name: "dark",
    buttonText: "Light",
    icon: <Brightness7 />,
    palette: {
      primary: {
        main: navbarDarkTheme,
      },
      text: {
        primary: fontColorDarkTheme,
      },
      background: {
        default: backgroundDarkTheme,
      },
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          borderColor: "#555",
          background: controlBackgroundDarkTheme,
          color: fontColorDarkTheme,
          "&:hover $notchedOutline": {
            borderColor: "#555",
          },
          "& $notchedOutline": {
            borderColor: "#555",
          },
          "&$focused $notchedOutline": {
            borderColor: "#555",
            borderWidth: 1,
          },
        },
      },
      MuiCard: {
        root: {
          background: navbarDarkTheme,
          border: "none",
        },
      },
    },
  },
  light: {
    name: "light",
    buttonText: "Dark",
    icon: <Brightness4 />,
    palette: {
      primary: {
        main: navbarLightTheme,
      },
      text: {
        primary: fontColorLightTheme,
      },
      background: {
        default: backgroundLightTheme,
      },
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          borderColor: "#bbb",
          background: controlBackgroundLightTheme,
          color: fontColorLightTheme,
          "&:hover $notchedOutline": {
            borderColor: "#bbb",
          },
          "& $notchedOutline": {
            borderColor: "#bbb",
          },
          "&$focused $notchedOutline": {
            borderColor: "#bbb",
            borderWidth: 1,
          },
        },
      },
      MuiCard: {
        root: {
          background: navbarLightTheme,
          border: "none",
        },
      },
    },
  },
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export default ThemeContext;
