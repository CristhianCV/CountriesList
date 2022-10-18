import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { Component } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import CountryDetail from "./pages/country-detail";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/navbar";
import ThemeContext, { themes } from "./context/theme-context";

const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    );
  }
}

export default App;
