import "./styles.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button";
function Feedback() {
  const [count, setCount] = useState(0);

  const onDislike = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
    toast.warning("Minus - 1 Like");
  };

  const onLike = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
    toast.success("Plus + 1 Like");
  };

  const onReset = () => {
    setCount(0);
    toast.info("Reset all Like");
  };

  console.log("Rendering(updating) component Feedback", count);

  return (
    <div className="feedback_wrapper">
      <div className="feedback_button">
        <Button name="Like" type="button" onClick={onLike} />
      </div>
      <p className="feedback_count">{count}</p>
      <div className="feedback_button">
        <Button name="Dislike" type="button" onClick={onDislike} />
      </div>
      <div className="feedback_button">
        <Button name="Reset" type="button" onClick={onReset} />
      </div>
    </div>
  );
}
export default Feedback;
