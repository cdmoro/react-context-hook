import React, { useReducer, useEffect } from 'react'
import ComponentA from './components/ComponentA'
import { Context, state, reducer } from './store';

import './App.scss';
import { useClasses } from './hooks/useClasses';

function App() {
  const [store, dispatch] = useReducer(reducer, state);
  const themePrefix = 'app--theme-';

  const classes = useClasses([
      'navbar',
      {
      'navbar-light bg-dark': store.dark,
      'bg-light': !store.dark
      }
  ])
  
  useEffect(() => {
    document.body.classList.forEach(className => {
      if (className.startsWith(themePrefix))
        document.body.classList.remove(className)
    })
    document.body.classList.add(`${themePrefix}${store.theme}`)
  }, [store.theme])

  return (
    <Context.Provider
      value={{ store, dispatch }}
    >
      <div className="app">
        <nav className={classes}>
            <button className="navbar-brand btn btn-link">
                useContext useReducer test
            </button>
        </nav>
        <div className="container">
          <div className="circle"></div>
          <ComponentA />
          <ComponentA />
          <ComponentA />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
