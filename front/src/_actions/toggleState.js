import { atom } from 'recoil';

// 아톰 만들기 시작
export const toggleState = atom({
  key: 'toggleState',
  default: false,
});
