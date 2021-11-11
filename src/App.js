import logo from './logo.svg';
import './App.css';
import Function from './function.js';
import Class from './class';
import Handle from './handle.js'
import Navbar from './navbar';
import Home from './home';
import Dashboard from './dashboard';
import About from './about';
import Axios from './apicall/axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './form';
import Form1 from './form1';
import Form2 from './form2';
import Task1 from './task1';
import Task2 from './task2';
import Task3 from './task3';



function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/dashboard' exact component={Dashboard}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/axios' exact component={Axios}></Route>
          <Route path='/forms' exact component={Form}></Route>
          <Route path='/form1' exact component={Form1}></Route>
          <Route path='/form2' exact component={Form2}></Route>
          <Route path='/task1' exact component={Task1}></Route>
          <Route path='/task2' exact component={Task2}></Route>
          <Route path='/task3' exact component={Task3}></Route>

       
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
