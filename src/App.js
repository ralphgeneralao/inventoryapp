import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import Orders from './components/orders/Orders'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
export default class App extends Component {
  render() {
    return (
      <Router>
        <AppBar position='static'>
          <Tabs>
            <Tab label='Products' to='/products' component={Link} />
            <Tab label='Categories' to='/categories' component={Link} />
            <Tab label='Orders' to='/orders' component={Link} />
          </Tabs>
        </AppBar>
        <Switch>
          <Route exact path='/' />
          <Route path='/products'><Products /></Route>
          <Route path='/categories'><Categories /></Route>
          <Route path='/orders'><Orders /></Route>
        </Switch>
      </Router>
    );
  }
}
