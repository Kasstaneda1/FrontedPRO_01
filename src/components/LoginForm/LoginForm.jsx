import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
function LoginForm() {
  return (
    <form className="login_form">
      <h2 className="login_form_title">Login form</h2>
      <div className="login_form_fields">
        <Input
          id="login_form_email"
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          id="login_form_password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </div>
      <Button name="Login" type="submit" />
    </form>
  );
}
export default LoginForm;
