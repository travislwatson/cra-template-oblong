import { React } from 'oblong'
import './App.css'
import { Logo } from './Logo'

export const App = () => (
  <div className="App">
    <header className="App-header">
      <Logo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        className="App-link"
        href="https://github.com/traviswatsonws/oblong"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Oblong
      </a>
    </header>
  </div>
)
