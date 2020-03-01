import React from 'react';
import "./App.css";


export default function QuarterButton(props) {

    console.log('Quarter Button props', props);

        return(

            <div className="quarterButtons">
          <button onClick={props.increaseQuarter} className="quarterButtons_increase">Increase Quarter</button>
          <button onClick={props.decreaseQuarter} className="quarterButtons_decrease">Decrease Quarter</button>
        </div>

        )

};