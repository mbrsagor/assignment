import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
