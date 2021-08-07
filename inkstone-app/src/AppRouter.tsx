import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Placeholder from './pages/placeholder/Placeholder';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import IeltsSpeaking from './pages/services/IeltsSpeaking';
import EssayClinic from './pages/services/EssayClinic';
import './AppRouter.scss'
import Enroll from './pages/enroll/Enroll';

export default function RouterPanel() {
  return (
    <div className="appRouter">
      <Router>
        <Header/>
        <div className="mainPage">
        <Switch>
          <Route path="/enroll">
            <Enroll/>
          </Route>
          <Route path="/ielts-speaking">
            <IeltsSpeaking/>
          </Route>
          <Route path="/writing-service">
            <Placeholder/>
          </Route>
          <Route path="/essay-clinic">
            <EssayClinic/>
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