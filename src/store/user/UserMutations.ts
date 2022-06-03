import { IUserState } from './UserTypes';

export default {
  setLoggedIn(state: IUserState, payload: boolean) {
    state.loggedIn = payload;
  },
  setLoginForm(state: IUserState, payload: { key: keyof IUserState['loginForm'], value: string }) {
    state.loginForm[payload.key] = payload.value;
  },
  setRegisterForm(state: IUserState, payload: { key: keyof IUserState['registerForm'], value: string }) {
    state.registerForm[payload.key] = payload.value;
  },
};
