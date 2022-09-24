import { Link } from "react-router-dom";
import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button>Login</Button>
      <div className={styles.footerText}>
        <span>Don't have an account? </span>
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default LoginForm;
