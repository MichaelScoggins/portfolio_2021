import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <div id="html-container">
            <div id="nav-container" className="pb-20">
              <NavBar />
            </div>
            <div id="body-container">
              <Switch>
                <Route component={Home} path="/" exact />
                <Route component={About} path="/about" />
                <Route component={SinglePost} path="/post/:slug" />
                <Route component={Post} path="/post" />
                <Route component={Project} path="/project" />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
