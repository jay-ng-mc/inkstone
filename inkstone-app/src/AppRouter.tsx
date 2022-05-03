import {
  BrowserRouter as Router
} from 'react-router-dom';
import {
  Route,
  Routes
} from 'react-router'

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
import Tutoring from './pages/services/Tutoring';
import GroupSessions from './pages/services/GroupSessions';

export default function RouterPanel() {
  return (
    <div className="appRouter">
      <Router>
        <HeaderWrapper/>
        <div className="mainPage">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/enroll" element={<Enroll/>}/>
          <Route path="/ielts-speaking" element={<IeltsSpeaking/>}/>
          <Route path="/english-conversation" element={<EnglishConversation/>}/>
          <Route path="/tutoring" element={<Tutoring/>}/>
          <Route path="/group-sessions" element={<GroupSessions/>}/>
          {/* <Route path="/writing-service" element={<Placeholder/>}/> */}
          <Route path="/essay-clinic" element={<EssayClinic/>}/>
          <Route path="/about" element={<About/>}/>
          <Route element={<Placeholder/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}