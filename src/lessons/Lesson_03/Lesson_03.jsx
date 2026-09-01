import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./styles.css";
function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };
  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No Job",
    hobby: "coocking",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };
  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skate",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };
  const sendRequest = () => {
    console.log("Request sended");
  };

  const sayHi = (fullName) => {
    console.log(`Hi, ${fullName}`)
  }
  return (
    <div className="lesson_03_wrapper">
      <div className="card_conteiner">
        <Card
          firstName={homerSimpson.firstName}
          lastName={homerSimpson.lastName}
          job={homerSimpson.job}
          hobby={homerSimpson.hobby}
          avatar={homerSimpson.avatarURL}
        />
        <Card
          firstName={margeSimpson.firstName}
          lastName={margeSimpson.lastName}
          job={margeSimpson.job}
          hobby={margeSimpson.hobby}
          avatar={margeSimpson.avatarURL}
        />
        <Card
          firstName={bartSimpson.firstName}
          lastName={bartSimpson.lastName}
          job={bartSimpson.job}
          hobby={bartSimpson.hobby}
          avatar={bartSimpson.avatarURL}
        />
      </div>
      <div className="button_control">
        <button onClick={sendRequest} type="button">
          Simple button trigger
        </button>
      </div>
      <div className="button_control">
        <button onClick={() => sayHi("Homer Simpson")} type="button">
          Simple button trigger with arguments
        </button>
      </div>
    </div>
  );
}
export default Lesson_03;
