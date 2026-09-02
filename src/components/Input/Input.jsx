import "./styles.css";
function Input(props) {
  const { name, type, placeholder, label, id } = props;
  return (
    <div className="input_component">
      <label className="input_label">{label}</label>
      <input
        className="input_input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
