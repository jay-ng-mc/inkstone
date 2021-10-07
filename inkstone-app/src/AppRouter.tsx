import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Placeholder from './pages/placeholder/Placeholder';
import Home from './pages/home/Home'
import About from './pages/about/About'
import HeaderWrapper from './components/header/HeaderWrapper'
import Footer from './components/footer/Footer';
import IeltsSpeaking from './pages/services/IeltsSpeaking';
import EssayClinic from './pages/services/EssayClinic';
import './AppRouter.scss'
import Enroll from './pages/enroll/Enroll';
import EnglishConversation from './pages/services/EnglishConversation';
import MathsTutoring from './pages/services/MathsTutoring';
import PhysicsTutoring from './pages/services/PhysicsTutoring';
import GroupSessions from './pages/services/GroupSessions';

export default function RouterPanel() {
  return (
    <div className="appRouter">
      <Router>
        <HeaderWrapper/>
        <div className="mainPage">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/enroll" component={Enroll}/>
          <Route path="/ielts-speaking" component={IeltsSpeaking}/>
          <Route path="/english-conversation" component={EnglishConversation}/>
          <Route path="/maths" component={MathsTutoring}/>
          <Route path="/physics" component={PhysicsTutoring}/>
          <Route path="/group-sessions" component={GroupSessions}/>
          {/* <Route path="/writing-service" component={Placeholder}/> */}
          <Route path="/essay-clinic" component={EssayClinic}/>
          <Route path="/about" component={About}/>
          <Route component={Placeholder}/>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}