import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World Tâm Lê
        </p>
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
