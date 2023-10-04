import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
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
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/pizzas' element={<Pizzas/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
        </Routes>
      </Layout>
    );
  }
}