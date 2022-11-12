import './Option.css';
import React from "react";


function Option (props) {

  const [disable, setDisable] = React.useState(false);


  const ask = (text) => {

    setDisable(true);

    var answer = prompt(props.genre + " for $" + text.value + "...\n" + text.question + "?");

    if (answer === "2") {
      
      alert("Correct!");
      
      var current = parseInt(document.getElementById("scoreboard").innerHTML.substring(1));
      document.getElementById("scoreboard").innerHTML = "$" + (parseInt(text.value) + current);
      
      return true;
    
    }

    else { alert("Incorrect!"); return false; }

  }

  return (

    <div className = "Option">
      
      <button className = "Option-button"
              disabled = {disable} onClick = {() => ask(props)}>
                
                ${props.value}
                
      </button>

    </div>

  );

}

export default Option;
