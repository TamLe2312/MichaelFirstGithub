import logo from './logo.svg';
import './App.scss';
import ListToDo from './ToDos/ListToDo';
import MyComponent from './Example/MyComponent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav/Nav';
import Home from './Example/Home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';

import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/about">
              <MyComponent></MyComponent>
            </Route>
            <Route path="/user" exact>
              <ListUser></ListUser>
            </Route>
            <Route path="/user/:id">
              <DetailUser></DetailUser>
            </Route>
          </Switch>

        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
