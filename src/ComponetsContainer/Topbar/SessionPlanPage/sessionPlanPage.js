import React from 'react';
import classes from './sessionPlanPage.module.css';
import {getBackendData} from '../../../Apicalls/api'

class sessionPlanPage extends React.Component{
    state ={
        sessionPlanData:[],
        TopicData:[]
    }
    componentDidMount(){
        getBackendData()
        .then( response =>{
            this.setState({ sessionPlanData : response[0].sessionPlanPage})
            this.setState({ TopicData : response[0].sessionPlanPage.topics})
            console.log(response[0].sessionPlanPage.topics)
           
        })
        .catch(err =>{
            console.log('cardData failed!!!')
        })
    }

    session = ()=>{
       
        const data = this.state.TopicData.map(item =>{
        return <p>{item}</p>
        })
        return data
    }
    
    render(){
       
        return (
            <div className={classes.sessionPlanPageContainer}>
                <div className={classes.sessionPlanPageContainerWrap}>
                       <h1 className={classes.sessionPlanPageMainHeading}>Session Plan</h1>
                       <h2 className={classes.sessionPlanPageHeading}>Topics:</h2>
                       {this.session()}
                       <h2 className={classes.sessionPlanPageHeading}>Session Link:</h2>
                        <p>{this.state.sessionPlanData.title}</p>
                       <h3 className={classes.sessionPlanPageHeading}>Meeting Password:</h3>
                        <p>{this.state.sessionPlanData.title}</p>
                </div>
            </div>
        )
    }
    }
   
export default sessionPlanPage;