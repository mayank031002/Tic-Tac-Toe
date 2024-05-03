import { useState } from "react";
import '../index.css'
function Player({ initialName, symbol ,isActive,onChangeName}) {
  const [playerName,setPlayerName]=useState(initialName)
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    //bad practice
    // setIsEditing(!isEditing);
    //good practice
    setIsEditing((editing)=> !editing)
    //means we are currently editing the name 
    if(isEditing)
    onChangeName(symbol,playerName);
  }
  function handleChange(event){
    setPlayerName(event.target.value);
  }
  let editablePlayerName=<span className="player-name">{playerName}</span>;
  let btnCaption='Edit';
  if(isEditing){
    editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>;
    btnCaption='Save';
  }
  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  );
}
export default Player;





























//the reality of love is very few gets true love ans most of them
//even though are serious dont consider marriage even thought 
//the girl or boy is very good
//the main problem is respect in society 


//My story
