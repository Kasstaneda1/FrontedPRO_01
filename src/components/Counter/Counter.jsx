import "./styles.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button";
function Counter() {
  //Старый способ
  // let count = 0;
  // const onMinus = () => {
  //   count--;
  //   console.log("Число уменьшено на единицу", count);
  //   toast.info("Число уменьшено на единицу");
  // };

  // const onPlus = () => {
  //   count++;
  //   console.log("Число увеличено на единицу", count);
  //   toast.success("Число увеличено на единицу");
  // };

  // console.log("Count в самом компоненте", count);
  /////////////////////////////////////////////////////////
  // функция Хук useState возвращает нам в переменную state массив из двух элементов:
  // 1 элемент массива state - это состояние которое, мы планируем изменять и показывать на экране (наш счетчик count)
  // 2 элемент массива  - это функция - которая изменяет наше состояние - т.е. первый элемент массива
  
  // без деструктуризации 

  // const state = useState();
  // console.log(state);
  // console.log(state);
  // console.log(state[0]);
  // console.log(state[1]);

  // С деструктуризацией
const [count, setCount] = useState(0);

  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
    toast.info(" - 1");
  };
  const onPlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
    toast.success(" + 1");
  };

  console.log("Rendering(updating) component Counter", count);

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" type="button" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" type="button" onClick={onPlus} />
      </div>
    </div>
  );
}
export default Counter;
