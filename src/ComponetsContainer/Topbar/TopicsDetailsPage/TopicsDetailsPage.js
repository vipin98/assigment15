import React from 'react';
import classes from './TopicsDetailsPage.module.css';
import { Link} from 'react-router-dom';
import axios from 'axios';
import {getBackendData } from '../../../Apicalls/api'

class TopicsDetails extends React.Component{
       state={
           TopicsData:[],
           Topics:[],
           name:""
       }
       componentDidMount(){
        const Selecteduser = this.props.match.params.topicId
        getBackendData ()
        .then( response =>{
            this.setState({TopicsData : response[0].topicsDetailsPage})
          
           console.log(response)
        })
        .catch(err =>{
            console.log('cardData failed!!!')
        })
    }

     dataHandel = ()=>{
        const data1 = this.state.TopicsData
        const Selecteduser = this.props.match.params.topicId
        // const data3 = data1[Selecteduser]
        const data4 = data1.map(item =>{
            if( item.id == Selecteduser){
                return (
                    <div className={classes.TopicCardWrapper}>
                    <div className={classes.TopicCardContent}>
                        <div className={classes.TopicCardThumbnail}>
                            <img src={item.logo}
                             width="80" height="80" alt="edyoda_img"/>
                        </div>
                    </div>
                    <div className={classes.TopicCardContent}>
                        <div className={classes.TopicCardCardName}>
                            Pythone
                        </div>
                        <div className={classes.TopicCardamount}>
                           {item.score}
                        </div>
                    </div>
          </div>  
                )
            }
        })
        return data4

     }
     data = ()=>{
        const data1 = this.state.TopicsData
        const Selecteduser = this.props.match.params.topicId
        // const data3 = data1[Selecteduser]
        const data4 = data1.map(item =>{
            if( item.id == Selecteduser){
             return(  item.topic.map((items, pos)=>{
                return(
        
                <h1 className={classes.Mainheading}  > {pos+1}).{items}<span className={classes.MainheadingSpan} >
                        {item.status}</span>   </h1>
                    
              
                )
               })
                
             )
            }
        })
        
       return data4
     }
    render(){
        const data1 = this.state.Topics
        // const data2 = this.props.match.params.topicId
        // const data3 = data1[data2]
        // const data4 = this.state.Topics
        console.log(data1)
        return(
            <div className={classes.TopicsDetailsMainContainer}>
                <div className={classes.TopicsDetailsWrapper}>
                    <div className={classes.TopicCard}>
                <div className={classes.TopicCardContainer}>      
                  {this.dataHandel()}
                 </div>        
                  </div>
                   <div className={classes.TopicsDescriptionWrap}>
                   
                  <Link to="/ProblemListing">
                  <div className={classes.TopicsDescription}>
                     <h1 className={classes.TopicsDescriptionBox} > {this.data()}</h1>
                     
                  </div>
                  </Link>
                  </div>
                </div>
            </div>
        )
    }
    }
   

export default TopicsDetails;