import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function foo() {
  axios.get("http://localhost/api/users/user")
    .then((r) => {
      console.log(r.data);
    }).catch((e) => {
      console.log(e.status);
    });
}

function App() {
  foo();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;