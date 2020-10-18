import React from 'react';
import classes from './sessionRecording.module.css';

function sessionRecording(){
    return(
        <div className={classes.sessionRecordingContainer}>
           <div className={classes.sessionRecordingContainerWrap}>
           <iframe  className={classes.Recordingvideo} src="https://i.vimeocdn.com/video/965600640.webp?mw=1200&mh=675"></iframe> 
           </div>
        </div>
    )
} 
export default sessionRecording;