import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ATMLayout } from "@components/templates/ATMLayout";
import { userInfoSelector } from "@recoil/user";
import { useRecoilState } from "recoil";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoSelector);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    const inputID = e.currentTarget.inputID.value;
    const inputPW = e.currentTarget.inputPW.value;
    loginUser({
      username: inputID,
      password: inputPW,
    });
  };

  const loginUser = ({ username, password }: LoginReqType) => {
    const params = { username: username, password: password };
    const resp = axios
      .get(`${process.env.REACT_APP_BE_API_END_POINT}/users/login`, {
        params,
      })
      .then((res) => {
        const data = res.data;
        setUserInfo({
          username: data.username,
          authority: data.authority,
          atmBranch: data.atmBranch,
          atmId: data.atmId,
          accessToken: data.accessToken,
        });
        navigatePage(data.authority);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.log("Axios error message: ", error.message);
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      });
    return resp;
  };

  const navigatePage = (authority: string) => {
    if (authority === "ROLE_USER") {
      navigate("/main");
    } else if (authority === "ROLE_ADMIN") {
      navigate("/analysis");
    }
  };
  return (
    <ATMLayout>
      <div className={WrapperStyle}>
        <form className={LoginFormStyle} method="get" onSubmit={handleSubmit}>
          <input
            className={LoginInputStyle}
            name="inputID"
            required
            autoComplete="false"
            autoFocus
            type="text"
          ></input>
          <input
            className={LoginInputStyle}
            name="inputPW"
            required
            autoComplete="false"
            type="password"
          ></input>
          <button className={LoginBtnStyle}>Enter</button>
        </form>
      </div>
    </ATMLayout>
  );
};

export default Login;

const WrapperStyle = "gap-4 h-full flex justify-center items-center";
const LoginFormStyle = "flex flex-col w-60 items-center";
const LoginInputStyle = "h-7 w-80 mb-1";
const LoginBtnStyle = "w-64 text-white bg-gray-900 py-1 px-4 rounded-lg mt-2";
type LoginReqType = {
  username: String;
  password: String;
};
