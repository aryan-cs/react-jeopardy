import './Topic.css';
import Option from './Option';

function Topic (props) {

  return (

    <div className = "Column">
      
      {/* topic */}

      <Option genre = {props.genre} value = "100" question = "1 + 1 = "/>
      <Option genre = {props.genre} value = "200" question = "1 + 1 = "/>
      <Option genre = {props.genre} value = "300" question = "1 + 1 = "/>
      <Option genre = {props.genre} value = "400" question = "1 + 1 = "/>
      <Option genre = {props.genre} value = "500" question = "1 + 1 = "/>

    </div>

  );

}

export default Topic;
