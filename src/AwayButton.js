import React from 'react';
import "./App.css";


export default function AwayButton(props) {
        console.log('AwayButton props', props);

   return ( 
   
        <div className="awayButtons">
          <button onClick={props.TigerTouchDown} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={props.TigerFieldGoal} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick={props.resetTigerScore} className="awayButtons__fieldGoal">Restart Away Score</button>

        </div>

   )
};