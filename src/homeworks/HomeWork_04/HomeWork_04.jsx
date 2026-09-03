import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { ToastContainer } from "react-toastify";
import Counter from "../../components/Feedback/Feedback";
function HomeWork_04() {
  return (
    <div className="HomeWork_04_wrapper">
      <Counter />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
export default HomeWork_04;