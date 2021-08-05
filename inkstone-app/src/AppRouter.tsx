import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home/Home'
import About from './pages/about/About'
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import IeltsSpeaking from './pages/services/IeltsSpeaking';

export default function RouterPanel() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/ielts-speaking">
          <IeltsSpeaking/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}