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
import Placeholder from './pages/placeholder/Placeholder';
import './AppRouter.scss'

export default function RouterPanel() {
  return (
    <div className="appRouter">
      <Router>
        <Header/>
        <div className="mainPage">
        <Switch>
          <Route path="/ielts-speaking">
            <IeltsSpeaking/>
          </Route>
          <Route path="/writing-service">
            <Placeholder/>
          </Route>
          <Route path="/essay-clinic">
            <Placeholder/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}