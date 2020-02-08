import React, { useReducer, useEffect } from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Context, state, reducer, setTheme } from "./store";
import { useClasses } from "./hooks/useClasses";

import Home from "./pages/Home";
import About from "./pages/About";

import "./App.scss";

const useRouteGuard = () => {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
};

function App() {
  const [store, dispatch] = useReducer(reducer, state);
  const themePrefix = "app--theme-";
  useRouteGuard();

  const classes = useClasses([
    "navbar navbar-expand-lg",
    {
      "navbar-light bg-dark": store.dark,
      "bg-light": !store.dark
    }
  ]);

  useEffect(() => {
    document.body.classList.forEach(className => {
      if (className.startsWith(themePrefix))
        document.body.classList.remove(className);
    });
    document.body.classList.add(`${themePrefix}${store.theme}`);
  }, [store.theme]);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="app">
        <nav className={classes}>
          <button className="navbar-brand btn btn-link">
            useContext useReducer test
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          <div
            title="Action with default value"
            className="circle"
            onClick={() => dispatch(setTheme())}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
