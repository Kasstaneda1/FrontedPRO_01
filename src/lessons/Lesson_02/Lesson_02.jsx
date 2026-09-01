import Qwerty from "../../components/Button/Button";
import {animal, getIsPlanteaterInfo} from "./data";
import "./styles.css";  
function Lesson_02() {
  return (
  
    <div className="Lesson_02_page_wrapper">
      <div className="animal_card">
        <p className="card_title">Animal Card: {animal.type} </p>
        <img className="avatar" src={animal.avatarURL} alt="Tiger Avatar" />
        <p className="card_info">Name: {animal.fullName} </p>
        <p className="card_info">Age: {animal.age} </p>
        <p className="card_info">Color: {animal.color} </p>
        <p className="card_info">
          Is planteater? {getIsPlanteaterInfo(animal.isPlanteater)} 
          </p>
          <Qwerty />
      </div>
    </div>
  );
}
export default Lesson_02;