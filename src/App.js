import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import classes from './App.module.css';
import Topbar from './ComponetsContainer/Topbar/Topbar';
import Practice from './ComponetsContainer/Topbar/PracticeArenaPage/practice';
import Footer from './ComponetsContainer/Topbar/Footer/Footer';
import ProblemListing from './ComponetsContainer/Topbar/ProblemListingPage/ProblemListingPage';
import TopicsDetails from './ComponetsContainer/Topbar/TopicsDetailsPage/TopicsDetailsPage';
import ClassroomPage from './ComponetsContainer/Topbar/ClassroomPage/ClassroomPage';
import ProgramDetails from './ComponetsContainer/Topbar/ProgramDetailsScreen/ProgramDetailsScreen';
import sessionPlanPage from './ComponetsContainer/Topbar/SessionPlanPage/sessionPlanPage';
import sessionRecording from './ComponetsContainer/Topbar/sessionRecordingPage/sessionRecording';
import GradesPage from './ComponetsContainer/Topbar/GradesPage/GradesPage';
import CurriculumPage from './ComponetsContainer/Topbar/CurriculumPage/CurriculumPage'

function App() {
  return (
    
   <BrowserRouter>
    <div className={classes.App}>
   <Topbar/>
   <Switch>
      <Route exact path="/" component={Practice}/>
      <Route exact path="/ProblemListing" component={ ProblemListing}/>
      <Route exact path="/TopicsDetails/:topicId" component={ TopicsDetails}/>
      <Route exact path="/ClassroomPage" component={ ClassroomPage }/>
      <Route exact path="/ProgramDetails" component={ ProgramDetails }/>
      <Route exact path="/sessionPlanPage" component={ sessionPlanPage}/>
      <Route exact path="/sessionRecording" component={ sessionRecording}/>
      <Route exact path="/GradesPage" component={ GradesPage}/>
      <Route exact path="/CurriculumPage" component={ CurriculumPage}/>
     </Switch>
   
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
