//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import HomeButton from "./HomeButtons";
import AwayButton from "./AwayButton";
import QuarterButton from "./QuarterButton";
import TopRow from "./TopRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //Step 2: Create a useState and assign it to a 2  variables, remember first is the intial state, 2nd is the function that changes the state
  //Step 3: change the hardcoded values in divs 
  //Step 4: Create click listeners & attach the state setter functions 
  const [tigerScore, setNewTigerScore] = useState(33);
  const [lionScore, setNewLionScore] = useState(34);
  const [quarterScore, changeQuarterScore ] = useState(4)

  const lionTouchDown = e => setNewLionScore(lionScore + 6);
   const lionFieldGoal = e => setNewLionScore(lionScore + 3);

   const TigerTouchDown = e => setNewTigerScore(tigerScore + 3);
  const TigerFieldGoal = e => setNewTigerScore(tigerScore + 6);

  const resetTigerScore = e =>  setNewTigerScore(33);
  const resetLionScore = e => setNewLionScore(34);

  const increaseQuarter = e => changeQuarterScore(quarterScore + 1);
  const decreaseQuarter = e => changeQuarterScore(quarterScore - 1);


   return (

    <div className="container">
      <section className="scoreboard">
            <TopRow tigerScore ={tigerScore}
                    lionScore ={lionScore} />

            <BottomRow 
                    quarterScore={quarterScore} />
      </section>
      <section className="buttons">

            <HomeButton lionScore ={lionScore}
                        setNewLionScore = {setNewLionScore}
                        lionTouchDown={lionTouchDown} 
                        lionFieldGoal={lionFieldGoal} 
                        resetLionScore ={resetLionScore} />

            <AwayButton TigerTouchDown ={TigerTouchDown}
                        TigerFieldGoal = {TigerFieldGoal}
                        resetTigerScore = {resetTigerScore } />

            <QuarterButton increaseQuarter ={increaseQuarter}
                           decreaseQuarter ={decreaseQuarter} />
          
      </section>
    </div>
  );
};

export default App;


// - Break out parts of this component into smaller components and compose multiple components together to make the UI
// - Write a "handler" function in the component that takes in a team name and an amount. This function will then be passed to each button's click handler. It will increment the correct team's score by the passed in amount
// - Play around with the styling and make this project your own! Maybe make it a soccer (non-american football) scoreboard, or a rugby or baseball scoreboard
// - Add a button that changes which quarter the game is in, and then render the state quarter value on the scoreboard
// - Make the entire board fully functional with buttons and state! (If you want to make a timer, you'll have to look into useEffect)
