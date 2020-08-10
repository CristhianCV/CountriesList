import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThemeContext from "./ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Typography
            color="textPrimary"
            variant="h6"
            className="toolbar-title"
          >
            Where in the world?
          </Typography>
          <Button
            edge="start"
            className="toolbar-button"
            aria-label="menu"
            startIcon={theme.icon}
            onClick={toggleTheme}
          >
            <Typography color="textPrimary">{theme.buttonText} Mode</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
