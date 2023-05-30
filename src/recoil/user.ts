// 각 ATM 한 대에 로그인된 계정을 하나의 User로 지칭한다.

import axios from "axios";
import { atom, selector } from "recoil";

export type userInfoType = {
  username: string;
  authority: string;
  atmBranch: string;
  atmId: string;
  accessToken: string;
};

export const enum userAuthority {
  ROLE_ADMIN,
  ROLE_USER,
}
export const userInfoState = atom<userInfoType>({
  key: "userInfoState",
  default: {
    username: "",
    authority: "ROLE_USER",
    atmBranch: "",
    atmId: "",
    accessToken: "",
  }, // default value (aka initial value)
});

export const userInfoAlertState = selector({
  key: "userInfoAlertState",
  get: ({ get }) => {
    const obj = get(userInfoState);
    return obj;
  },
});

export const userInfoSelector = selector<userInfoType>({
  key: "userInfoSelector",
  get: async ({ get }) => {
    const userInfo = get(userInfoState);
    return userInfo;
  },
  set: ({ set }, newValue) => {
    set(userInfoState, newValue);
  },
});

// const getData = ({username,password}:LoginReqType) => {
//     axios.get(`https://fonitor/api/users/login`, {
//         params: { username, password },
//       })
// };

// type LoginReqType = {
//   username: String;
//   password: String;
// };
