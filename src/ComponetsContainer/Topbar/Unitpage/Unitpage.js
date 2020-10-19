import React from "react";
import classes from "./Unitpage.module.css";
import {Link} from 'react-router-dom';
import {getBackendData} from '../../../Apicalls/api'


class Unitpage extends React.Component {
    state ={
       UnitData : [],
       Active : false,
    }
    hendelclick = (e)=>{
        const data3 = e.target.id
        console.log(data3)
           const data2 = parseInt(data3)
           
        const data = this.state.UnitData
       const data1 = data.map((item,i)=>{
           if(i == data3){
               this.setState({Active : !(this.state.Active)})
           }
        //   else  {

        //     this.setState({Active : !(this.state.Active)})
        //   }
    
        return data3
       })
       
   }
    componentDidMount(){
        getBackendData()
        .then( response =>{
            this.setState({UnitData : response[0].curriculumPage})
            console.log( response[0].curriculumPage)
           
        })
        .catch(err =>{
            console.log('cardData failed!!!')
        })
    }
   
    hendelcard = ()=>{
        const data = this.state.UnitData
        const data1 = data.map((item,index)=>{
            return (
                <div key={index}  onClick={this.hendelclick} className={classes.CurriculumPageTopic}>
                <div  id={index}  className={classes.CurriculumPageTopicHead}>
                {item.title} <img  className={[classes.CurriculumPageTopicImg,this.state.Active ===true ?  classes.CurriculumPageTopicImgActive  :null].join(' ')}src="https://assessments.edyoda.com/static/images/chevron.svg"/>
                </div>
              
               <div  className={[classes.CurriculumPageTopicLink,this.state.Active === true ?  classes.CurriculumPageTopicLinkActive:null  ].join(' ')}>
               <Link to="/sessionPlanPage"><p className={classes.CurriculumPageLinks}>Session Plan</p></Link>
                <Link to="/sessionRecording"><p className={classes.CurriculumPageLinks}>Session Recording</p></Link>  
               </div>
                
               </div>
            )
        })
        return data1
    }
   

    render(){
         const data = this.state.Active
        console.log(data)
        return(
            <div className={classes.CurriculumPageContainerWrap}>
            
                <div className={classes.CurriculumPageContainerLeft}>  
               <div className={classes.CurriculumPageAttendence}>
                   <div  className={classes.CurriculumPageAttendenceContant}> 
                     <img  src="https://assessments.edyoda.com/uploads/static/images/module_icon/aws_4QRD91l.png" 
                     width="50" height="50"/>
                    <h3 className={classes.CurriculumPageAttendenceTitle}>Intro to AWS</h3> 
                    </div>
                   <div className={classes.CurriculumPageAttendenceHeading}> Grades : NA</div>
                   <div className={classes.CurriculumPageAttendenceHeading}>Total Attendance : 20.0%</div>
                   <div className={classes.CurriculumPageAttendenceHeading}>Last Week Attendance :20.0%</div>
   
               </div>
               <div className={classes.CurriculumPageModule}>
                   <h2 className={classes.CurriculumPageModuleHeading}>Module Plan</h2>
                   <p className={classes.CurriculumPageModulePara}>Week - 1</p>
               </div>
               </div>
               <div className={classes.CurriculumPageContainerRight}>
              {this.hendelcard()}
                 
               
                  </div>
               </div>
        )
    }
}

export default Unitpage;