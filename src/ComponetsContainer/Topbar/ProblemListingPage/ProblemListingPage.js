import React from 'react';
import classes from './ProblemListingPage.module.css';
import {getBackendData} from '../../../Apicalls/api'

class ProblemListing extends React.Component{
     state ={
          ProblemData:{}
      }
      componentDidMount(){
          getBackendData()
          .then( response =>{
              this.setState({ProblemData : response[0].topicsDetailsPage.pythonDetails})
              console.log(response[0].topicsDetailsPage.pythonDetails)
             
          })
          .catch(err =>{
              console.log('cardData failed!!!')
          })
      }
      render(){ return(
          <div className={classes.ProblemListingMainContainer}>
              <h1 className={classes.ProblemHeading}>Problems</h1>
            <div className={classes.ProblemListingWrap}>
               <div className={classes.ProblemBox}>Problem </div>
               <div className={classes.ProblemBoxContantWrap}>
              <div className={classes.ProblemBoxContant}>
                   <div>Find area and check it is square or not</div>
                   <div>Level : Easy, Max Score : 15</div>
              </div>
              <div className={classes.solveProblemBox}>Solve Problem</div>
               </div>
              
               </div>
               <div className={classes.ProblemListingWrap}>
               <div className={classes.ProblemBox}>Problem 1</div>
               <div className={classes.ProblemBoxContantWrap}>
              <div className={classes.ProblemBoxContant}>
                   <div>Find area and check it is square or not</div>
                   <div>Level : Easy, Max Score : 15</div>
              </div>
              <div className={classes.solveProblemBox}>Solve Problem</div>
               </div>
              
               </div>
               <div className={classes.ProblemListingWrap}>
               <div className={classes.ProblemBox}>Problem 1</div>
               <div className={classes.ProblemBoxContantWrap}>
              <div className={classes.ProblemBoxContant}>
                   <div>Find area and check it is square or not</div>
                   <div>Level : Easy, Max Score : 15</div>
              </div>
              <div className={classes.solveProblemBox}>Solve Problem</div>
               </div>
              
               </div>
            </div>
          
      
      )
  }}
   

export default ProblemListing;