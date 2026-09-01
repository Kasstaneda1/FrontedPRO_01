import "./styles.css";
import Button from "../Button/Button";
function Card(props) {
  console.log(props);
  const {firstName, lastName, job, hobby, avatar} = props;
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="User Avatar" />
      <div className="card_info">
        <span className="info_title">Fullname: </span>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div className="card_info">
        <span className="info_title"> Job: </span>
        <p>{job}</p>
      </div>
      <div className="card_info">
        <span className="info_title">Hobby: </span>
        <p>{hobby}</p>
      </div>
      <Button name="Get user info" />
    </div>
  );
}
export default Card;