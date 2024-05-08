import Input from "./Input";
import { isEmail, hasMinLength, isNotEmpty } from "../util/validation"
import { useInput } from "../hooks/useInput";

export default function StateLogin() {
  const { 
    value: emailValue, 
    handleInputChange: handleEmailChange, 
    handleInputBlur: handleEmailBlur,
    hasErrors: emailIsInvalid } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
  const { 
    value: passwordValue, 
    handleInputChange: handlePasswordChange, 
    handleInputBlur: handlePasswordBlur,
    hasErrors: passwordIsInvalid } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();

    if(emailIsInvalid || passwordIsInvalid) return;
    console.log(emailValue, passwordValue);
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={(event) => handleEmailChange(event)}
          value={emailValue}
          error={emailIsInvalid && "Please enter a valid email"}
        />

        <Input id="password"
          label="Password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={(event) => handlePasswordChange(event)}
          value={passwordValue}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
