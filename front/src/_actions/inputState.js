import { atom } from 'recoil';

export const inputState = atom({
  key: 'inputState',
  default: {
    userName: '',
    email: '',
    password: '',
  },
});
