import { IUserState } from './UserTypes';

export default {
  getUserInfo: (state: IUserState) => state.user,
  getLoginForm: (state: IUserState) => state.loginForm,
  getRegisterForm: (state: IUserState) => state.registerForm,
  getResponse: (state: IUserState) => state.response,
  getIsLoading: (state: IUserState) => state.isLoading,
  getIsLoggedIn: (state: IUserState) => state.user.token !== '',
};
