import "./styles.css";
import { useState } from "react";
function Homework_05() {
  const [cars, setCars] = useState([
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porsche", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
    { brand: "Tesla", price: 60000, isDiesel: false },
  ]);

  const carCards = cars.map((car) => {
    return (
      <div key={car.brand} className="car_card">
        <p className="car_brand">{car.brand}</p>
        <p className="car_info">Price: {car.price} $</p>
        <p className="car_info">Diesel: {car.isDiesel ? "Yes" : "No"}</p>
      </div>
    );
  });

  return (
    <div className="homework_05_wrapper">
      <h1 className="homework_05_title">Cars</h1>
      <div className="car_cards">{carCards}</div>
    </div>
  );
}
export default Homework_05;
