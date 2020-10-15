import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Employees from './pages/Employees';
import EmployeeDetails from './pages/EmployeeDetails';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/employees" component={Employees}></Route>
          <Route path="/employees/:name:id" component={EmployeeDetails}></Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
