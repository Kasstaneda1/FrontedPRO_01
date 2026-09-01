import "./styles.css";
function Button({name, type}) {
  return <button className="button_component" type={type}>{name}</button>;
}
export default Button;