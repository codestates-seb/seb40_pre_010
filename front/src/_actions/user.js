// 아톰을 만들기 위해서는 import가 필요
import { atom } from 'recoil';

// 아톰 만들기 시작
export const userState = atom({
  key: 'userState',
  default: null,
});
