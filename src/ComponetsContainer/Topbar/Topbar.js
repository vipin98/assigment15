import React from 'react';
import classes from './Topbar.module.css';
import {Link} from 'react-router-dom';

function Topbar (){
    return(
        <div className={classes.Topbar} >
        <div className={classes.leftSection}>
     <div className={classes.leftSectionmenu} >
     <img src="https://assessments.edyoda.com/static/images/logo.png" width="200" height="40" alt="edyoda-logo"/> </div> 
     <div className={classes.leftSectionmenu}> <Link to="/"> Practice Arena</Link></div>
     <div className={classes.leftSectionmenu}> <Link to="/ClassroomPage"> Classroom</Link></div>
      <div className={classes.leftSectionmenu}> <a href="https://recruitcrm.io/jobs/EdYoda_jobs">View Jobs</a></div>
      </div>
      <div className={classes.rightSection}>
      <div className={classes.rightSectionmenu}><i class="fas fa-bell"></i> <span className={classes.count}>2</span>
      </div>
      <div className={classes.rightSectionmenu}>Admin <i class="fas fa-caret-down"></i></div>
      </div>
      </div>
    )
}

export default Topbar