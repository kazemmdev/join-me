import { Button, InputContainer, InputField, InputLabel } from "../../utils/styles";
import styles from "./index.module.scss";

const RegisterForm = () => {
  return (
    <form className={styles.form}>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField type="email" id="email" />
      </InputContainer>
      <section className={styles.section}>
        <InputContainer>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <InputField type="text" id="firstname" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <InputField type="text" id="lastname" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField type="password" id="password" />
      </InputContainer>
      <Button className={styles.button}>Register Me</Button>
    </form>
  );
};

export default RegisterForm;
