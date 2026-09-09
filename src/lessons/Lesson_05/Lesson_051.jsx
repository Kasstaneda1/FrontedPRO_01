import { v4 } from "uuid";
import { useState } from "react";
import Button from "../../components/Button/Button";
import "./styles1.css";
function Lesson_05() {
  const [order, setOrder] = useState([]);
  const buttonNames = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-cream",
  ];
  const buttons = buttonNames.map((buttonEl) => {
    return (
      <div key={v4()} className="button_control">
        <Button
          name={buttonEl}
          onClick={() => {
            setOrder((prevValue) => [...prevValue, buttonEl]);
          }}
        />
      </div>
    );
  });

   const onDeleteAll = () => {
    setOrder([]);
  };

  const onRemove = (delRemove) => {
    setOrder((prevValue) => {
      return prevValue.filter((firstParametr, index) => index !== delRemove);
    });
  };
  //Представим, что у нас в order храниться массива ["Cola", "Fries", "Burger"]
  // нам нужно из массива ["Cola", "Fries", "Burger"] получить новый массив [<li>Cola</li>, <li>Fries</li>, <li>Burger</li>]
  const orderList = order.map((orderEl, index) => {
    return (
      <li key={v4()} className="order_item">
        {orderEl}
        <Button name="Remove" onClick={() => onRemove(index)} />
      </li>
    );
  });

  console.log(orderList);
  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">
          {/* <div className="button_control">
            <Button
              name="Burger"
              onClick={() => {
                setOrder((prevValue) => [...prevValue, "Burger"]);
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Fries"
              onClick={() => {
                setOrder((prevValue) => [...prevValue, "Fries"]);
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Cola"
              onClick={() => {
                setOrder((prevValue) => [...prevValue, "Cola"]);
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Salad"
              onClick={() => {
                setOrder((prevValue) => [...prevValue, "Salad"]);
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Ketchup"
              onClick={() => {
                // ["Ketchup"] => ["Ketchup", "Ketchup"]
                setOrder((prevValue) => {
                  return [...prevValue, "Ketchup"];
                });
              }}
            />
          </div>
          <div className="button_control">
            <Button
              name="Ice-cream"
              onClick={() => {
                setOrder((prevValue) => [...prevValue, "Ice-cream"]);
              }}
            />
          </div> */}
          {buttons}
        </div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{orderList}</ol>
        {order.length >= 1 && (
          <Button name="Remove all" onClick={onDeleteAll} />
        )}
      </div>
    </div>
  );
}
export default Lesson_05;