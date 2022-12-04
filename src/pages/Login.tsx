import { useNavigate } from "react-router-dom";
import LoginBtn from "@components/molecules/LoginBtn";
import { ATMLayout } from "@components/templates/ATMLayout";

const Login = () => {
  const navigate = useNavigate();
  return (
    <ATMLayout>
      <div className={WrapperStyle}>
        <LoginBtn
          type="고객"
          onClick={() => {
            navigate("/main");
          }}
        />
        <LoginBtn
          type="관리자"
          onClick={() => {
            navigate("/analysis");
          }}
        />
      </div>
    </ATMLayout>
  );
};

export default Login;

const WrapperStyle = "gap-4 h-full flex justify-center items-center";
