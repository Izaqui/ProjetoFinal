import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Cadastro from '../pages/Cadastro';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Router from './router';


export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Router path="/"  exact component={Home} />
            <Router path="/cadastro"  component={Cadastro} />
            <Router path="/dashboard" isPrivate component={Dashboard} />


          </Switch>
        </BrowserRouter>
    );
}