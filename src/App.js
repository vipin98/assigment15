import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import classes from './App.module.css';
import Topbar from './Topbar/Topbar';
import Practice from './PracticeArenaPage/practice';
import Footer from './Footer/Footer';
import ProblemListing from './ProblemListingPage/ProblemListingPage';
import TopicsDetails from './TopicsDetailsPage/TopicsDetailsPage'

function App() {
  return (
    
   <BrowserRouter>
    <div className={classes.App}>
   <Topbar/>
   <Switch>
      <Route exact path="/" component={Practice}/>
      <Route exact path="/ProblemListing" component={ ProblemListing}/>
      <Route exact path="/TopicsDetails" component={ TopicsDetails}/>
     </Switch>
   
    <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
