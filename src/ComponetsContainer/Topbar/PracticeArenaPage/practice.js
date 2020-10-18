import React from 'react';
import classes from './practice.module.css';
import {Link} from 'react-router-dom';
import {getBackendData} from '../../../Apicalls/api'

class  Practice extends React.Component{
    
    state ={
      CardData:[],
      data : {}
    }
    componentDidMount(){
        getBackendData()
        .then( response =>{
            this.setState({CardData : response[0].homepage})
            console.log(response)
           
        })
        .catch(err =>{
            console.log('cardData failed!!!')
        })
    }
      Card = ()=>{
       const cards =   this.state.CardData.map(item =>{
            return(
               
                <div className={classes.cardContainer}> 
               <Link to={`/TopicsDetails/${item.id}`}>
                <div className={classes.cardWrapper}>
                
                <div className={classes.cardContent}>
                    <div className={classes.cardThumbnail}>
                        <img src={item.thumbnail}
                         width="50" height="50" alt="edyoda_img"/>
                    </div>
                </div>
                <div className={classes.cardContent}>
                    <div className={classes.skillCardName}>
                       {item.title}
                    </div>
                    <div className={classes.amount}>
                        {item.videos}
                    </div>
                </div>
                
      </div>   
      </Link>
      </div>
     
     
             )
          })
        return cards
      }
           
           
    render(){
      
        return(
            <div className={classes.page}>
    
            <h1  className={classes.practiceHeading}>Practice Arena</h1>
            <p className={classes.skillsPara}> All Skills</p>
    
           
         <div className={classes.skillCard}>
               { this.Card()}
           </div>
         
       </div>
        )
    }
    }
   

export default Practice ;