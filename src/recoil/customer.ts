// 한 대의 ATM에서 서비스를 이용하는 각각을 Customer로 지칭한다

import { atom, selector } from "recoil";

type customerInfoType = {
  customerId: String;
  isVictim: boolean; // [TODO] basisType과의 정돈 필요
  video: String;
  imgs: String[];
};

export const customerInfoState = atom<customerInfoType>({
  key: "customerInfoState",
  default: { customerId: "", isVictim: false, video: "", imgs: [] },
});

export const customerInfoAlertState = selector({
  key: "customerInfoAlertState",
  get: ({ get }) => {
    const obj = get(customerInfoState);
    return obj;
  },
});
export const customerInfoSelector = selector({
  key: "customerIdSelector",
  get: ({ get }) => {
    const state = get(customerInfoState);
    return state;
  },
});
