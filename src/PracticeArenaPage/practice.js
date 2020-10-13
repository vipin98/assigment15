import React from 'react';
import classes from './practice.module.css'

function Practice (){
    return(
        <div className={classes.page}>

        <h1  className={classes.practiceHeading}>Practice Arena</h1>
        <p className={classes.skillsPara}> All Skills</p>


     <div className={classes.skillCard}>
      <div className={classes.cardContainer}>      
               <div className={classes.cardWrapper}>
                       <div className={classes.cardContent}>
                           <div className={classes.cardThumbnail}>
                               <img src="https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png"
                                width="50" height="50" alt="edyoda_img"/>
                           </div>
                       </div>
                       <div className={classes.cardContent}>
                           <div className={classes.skillCardName}>
                               Python
                           </div>
                           <div className={classes.amount}>
                               101 Units 
                           </div>
                       </div>
             </div>          
       </div>
       <div className={classes.cardContainer}>      
               <div className={classes.cardWrapper}>
                       <div className={classes.cardContent}>
                           <div className={classes.cardThumbnail}>
                               <img src="https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png"
                                width="50" height="50" alt="edyoda_img"/>
                           </div>
                       </div>
                       <div className={classes.cardContent}>
                           <div className={classes.skillCardName}>
                               Python
                           </div>
                           <div className={classes.amount}>
                               101 Units 
                           </div>
                       </div>
             </div>          
       </div>
       <div className={classes.cardContainer}>      
               <div className={classes.cardWrapper}>
                       <div className={classes.cardContent}>
                           <div className={classes.cardThumbnail}>
                               <img src="https://assessments.edyoda.com/uploads/static/images/PYTHON/python_1_OJ7Al4d.png"
                                width="50" height="50" alt="edyoda_img"/>
                           </div>
                       </div>
                       <div className={classes.cardContent}>
                           <div className={classes.skillCardName}>
                               Python
                           </div>
                           <div className={classes.amount}>
                               101 Units 
                           </div>
                       </div>
             </div>          
       </div>
   
     
     
       </div>
    
   </div>
    )
}

export default Practice ;