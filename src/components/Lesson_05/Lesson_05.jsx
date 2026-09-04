import "./styles.css";
import { useState } from "react";
import Button from "../Button/Button";
function Lesson_05() {
  const [menu, setMenu] = useState([]);

  const addToMenu = (title) => {
    setMenu([...menu, title]);
  };

  return (
    <div className="menu_wrapper">
      <p className="menu_title">Menu</p>
      <div className="menu_buttons">
        <Button name="Burger" onClick={() => addToMenu("Burger")} />
        <Button name="Fries" onClick={() => addToMenu("Fries")} />
        <Button name="Cola" onClick={() => addToMenu("Cola")} />
        <Button name="Salad" onClick={() => addToMenu("Salad")} />
        <Button name="Ketchup" onClick={() => addToMenu("Ketchup")} />
        <Button name="Ice-cream" onClick={() => addToMenu("Ice-cream")} />
      </div>
      <div className="menu_card">
        <p className="menu_card_title">Ingredients</p>
        <p className="menu_card_items">{menu.join(", ")}</p>
      </div>
    </div>
  );
}
export default Lesson_05;
