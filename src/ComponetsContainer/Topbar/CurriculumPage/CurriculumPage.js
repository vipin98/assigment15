import React from 'react';
import classes from './curriculumPage.module.css';
import {Link} from 'react-router-dom';
import GradesPage from '.././GradesPage/GradesPage';
import Unitpage from '../Unitpage/Unitpage'

class CurriculumPage extends React.Component{
    state ={
     Unit : true,
     Grade : false,
    }
    hendelclickUnit = ()=>{
 this.setState({Unit: !(this.state.Unit)})
 this.setState({Grade: !(this.state.Grade)})
 
    }
    hendelclickGrade=() =>{
        this.setState({Grade: !(this.state.Grade)})
        this.setState({Unit: !(this.state.Unit)})
    }
   
    Displaydata = ()=>{
        const dataState = this.state.Unit
        if(dataState == true){
            return(
                <Unitpage/>
            )
        }
        else {
            return <GradesPage/>
        }
    }

    render(){return(
        <div className={classes.CurriculumPageContainer}>
            <div className={classes.CurriculumPageContainerBtn}>
            <button className={classes.CurriculumPageContainerBtnColor} onClick={this.hendelclickUnit}>Unit</button>
              <button onClick={this.hendelclickGrade}>Grades</button>
            </div>
             
           {this.Displaydata()}
        </div>
    );
}}
    

 export default CurriculumPage;