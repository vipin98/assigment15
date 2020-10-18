import React from 'react';
import classes from './ProgramDetailsScreen.module.css';
import {Link} from 'react-router-dom';
import {getBackendData} from '../../../Apicalls/api'


class ProgramDetails extends React.Component {
    state ={
        ProgramData :[]
    }
    componentDidMount(){
        getBackendData()
        .then( response =>{
            this.setState({ProgramData : response[0].programDetailsScreen.modules})
            console.log( response[0].programDetailsScreen.modules)
           
        })
        .catch(err =>{
            console.log('cardData failed!!!')
        })
    }

    module = ()=>{
        const data = this.state.ProgramData
       const data1= data.map(item =>{
            return(
                <div className={classes.ProgramDetailsModulesCardWrap}>
                <Link to="/CurriculumPage">
            <div>
                <img className={classes.ProgramDetailsModulesThumbnail} 
                src={item.thumbnail} width="60" height="50" />
            </div>
            <h1 className={classes.ProgramDetailsModulesTitle}>{item.title}</h1>
            <div>
                <img src={item.avatar}  width="20" height="40"/>
            <span>{item.name}</span>
            </div>
            <p>{item.duration}</p>
            </Link>
            </div>
            )
        })
       
       return data1
    }
    render(){return(
        <div className={classes.ProgramDetailsContainer}>
        <div className={classes.ProgramDetailsCardContainer} >
       <div className={classes.ProgramDetailsCardWrap}>
            <img className={classes.ProgramDetailsThumbnail} src="https://assessments.edyoda.com/static/images/Only-Image.jpg" alt="Video Thumbnail" />
            <div  className={classes.ProgramDetailsThumbnailWrap}>
                <h1 className={classes.ProgramDetailsTitle}> Program Progress</h1>
               <div className={classes.ProgramDetailsScore}>
                <div>
                    <p>1</p>
                    <h4>Class Rank</h4>
                </div>
                <div>
                    <p>90.0%</p>
                    <h4>Avg Score</h4>
                </div>
                <div>
                    <p>90.0</p>
                    <h4>SHS</h4>
                </div>
                </div>
                <h1 className={classes.ProgramDetailsTitle}> Modules</h1>
                <div className={classes.ProgramDetailsModuleContainer}> {this.module()}</div>
              
            </div>
          
            
            
        </div>
        
      
        </div>
  </div>
    )
}}
    

export default ProgramDetails;