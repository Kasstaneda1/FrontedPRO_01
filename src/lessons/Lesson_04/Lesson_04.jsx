import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import Counter from "../../components/Counter/Counter";
function Lesson_04() {
  return (
    <div className="lesson_04_wrapper">
      <Counter />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
export default Lesson_04;
