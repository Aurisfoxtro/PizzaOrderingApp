import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout.js';
import { Home } from './components/Home.js';

import './custom.css'

import {Pizzas} from './components/Pizza/Pizzas';
import { Create } from './components/Pizza/Create';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home}></Route>
        <Route path='/pizzas' component={Pizzas}></Route>
        <Route path='/create' component = {Create}></Route>
      </Layout>
    );
  }
}