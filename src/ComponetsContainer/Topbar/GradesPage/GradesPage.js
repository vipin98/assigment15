import React from 'react';
import classes from './GradesPage.module.css';

function GradesPage(){
    return(
        <div className={classes.GradePageContainer}>
           <div className={classes.GradePageContainerWrap}>
           <div className={classes.GradePageCardWrapper}>
                       <div className={classes.GradePageCardContent}>
                           <div className={classes.GradePageCardThumbnail}>
                               <img src="https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png"
                                width="120" height="120" alt="edyoda_img"/>
                           </div>
                       </div>
                       <div className={classes.GradePageCardContent}>
                           <div className={classes.GradePageCardCardName}>
                               Python
                           </div>
                           <div className={classes.GradePageamount}>
                              <div>
                                  <h4>0</h4>
                                  <p>Class Rank</p>
                              </div>
                              <div>
                                  <h4>%</h4>
                                  <p>Avg. Score</p>
                              </div>
                           </div>
                           <h3>No Topics Available</h3>
                       </div>
                       
             </div>  
            
           </div>
        </div>
    )
} 
export default GradesPage;