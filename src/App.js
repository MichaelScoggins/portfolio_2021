import React, { useState, useRef, useEffect } from "react";
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
import { debounce } from "./utilities/helpers";

function App() {
  const [open, setOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <nav id="burger-icon-and-menu" ref={node}>
            <div
              id="burger-container"
              className="md:hidden z-30 right-0 top-7 fixed rounded"
              style={{ width: "20%" }}
            >
              <Burger open={open} setOpen={setOpen} />
            </div>
            <Menu open={open} setOpen={setOpen} />
          </nav>
          <div id="html-container">
            <div
              id="nav-container"
              className="pb-20"
              style={{
                top: visible ? "0" : "-60px",
                transition: "top .6s",
              }}
            >
              <NavBar visible={visible} />
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
