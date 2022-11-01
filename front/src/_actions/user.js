// 아톰을 만들기 위해서는 import가 필요
import { atom } from 'recoil';

// 아톰 만들기 시작
export const userState = atom({
  key: 'userState',
  default: null, //인증이 되지 않았을 때
});
