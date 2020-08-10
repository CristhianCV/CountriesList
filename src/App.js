import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ThemeContext, { themes } from "./components/ThemeContext";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

export class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      const newTheme =
        this.state.theme.name === themes.dark.name ? themes.light : themes.dark;
      this.setState({
        theme: newTheme,
      });
    };

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    let theme = createMuiTheme({
      palette: {
        ...this.state.theme.palette,
        type: this.state.theme.name,
      },
      overrides: {
        ...this.state.theme.overrides,
      },
    });

    return (
      <BrowserRouter>
        <div className="App">
          <ThemeContext.Provider value={this.state}>
            <ThemeProvider theme={theme}>
              <CssBaseline></CssBaseline>
              <Navbar></Navbar>
              <Switch>
                <Route path="/" exact component={Dashboard}></Route>
                <Route path="/country/:id" component={CountryDetail}></Route>
              </Switch>
            </ThemeProvider>
          </ThemeContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
