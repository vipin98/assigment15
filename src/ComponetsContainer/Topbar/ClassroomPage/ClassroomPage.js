import React from 'react';
import classes from './ClassroomPage.module.css';
import {Link } from 'react-router-dom';
import {getBackendData} from '../../../Apicalls/api'

class ClassroomPage extends React.Component{
    state ={
        ClassroomData:[]
    }
    componentDidMount(){
        getBackendData()
        .then( response =>{
            this.setState({ClassroomData : response[0].classRoomPage})
            // console.log(response[0].classRoomPage)
           
        })
        .catch(err =>{
            console.log('cardData failed!!!')
        })
    }

    Cards = ()=>{
      const card = this.state.ClassroomData.map(item=>{
          return(
            <div className={classes.ClassroomCardWrap}>
            <Link to="/ProgramDetails">
              <img className={classes.Thumbnail} src={item.thumbnail} />
          <h4 className={classes.Title}>{item.title}</h4>
              <h4 className={classes.units}>{item.units}</h4>
              </Link>
          </div>
         
          )
      })
      return card
    }

    render(){
        return(
        <div className={classes.ClassroomPageMainContainer}>
         
            <h1 className={classes.ClassroomHeading}>Classroom</h1>
            <p className={classes.ClassroomPara}>Your Enrolled Courses</p>
            <div className={classes.ClassroomPageCardContainer} >
            
          {this.Cards()}
      </div>
      </div>
    )
}}
    

export default ClassroomPage;