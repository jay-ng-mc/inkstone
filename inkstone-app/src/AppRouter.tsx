import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home/Home'
import About from './pages/about/About'
import Header from './components/header/Header'

export default function RouterPanel() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}