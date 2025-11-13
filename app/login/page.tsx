import { memo } from "react";
import LoginForm from "../../features/auth/components/LoginForm";

const Login = () => {
  return (
    <div>
      <h2>
        <LoginForm />
      </h2>
    </div>
  );
};

export default memo(Login);
