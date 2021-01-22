import React, { useState, useRef } from "react";
import { useOnClickOutside } from "./hooks";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import { Burger, Menu } from "./components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <div ref={node}>
            <div
              style={{ top: "5%" }}
              className="fixed absolute items-center rounded"
            >
              <Burger open={open} setOpen={setOpen} />
            </div>
            <Menu open={open} setOpen={setOpen} />
          </div>
          <NavBar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={SinglePost} path="/post/:slug" />
            <Route component={Post} path="/post" />
            <Route component={Project} path="/project" />
          </Switch>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
