import "./styles.css";
function Button({name, type, onClick = () => {}}) {
  return (
    <button className="button_component" type={type} onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;