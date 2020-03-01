import React from 'react';
import "./App.css";

 export default function HomeButton(props) {
        console.log('Home Button props', props);
    return (

        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ props.lionTouchDown} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ props.lionFieldGoal} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={ props.resetLionScore} className="homeButtons__fieldGoal">Restart Home Score</button>
       
        </div>
    )



}
