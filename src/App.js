import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Products from './components/Products'
import Categories from './components/Categories'
import Orders from './components/Orders'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
export default function App() {

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