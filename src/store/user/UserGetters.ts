import { IUserState } from './UserTypes';

export default {
  getUserInfo: (state: IUserState) => state.user,
  getLoginForm: (state: IUserState) => state.loginForm,
  getRegisterForm: (state: IUserState) => state.registerForm,
  getIsLoggedIn: (state: IUserState) => state.user.token !== '',
  getResponseMessage: (state: IUserState): string | null => state.responseMessage,
  getResponseHasError: (state: IUserState): boolean => state.hasError,
  getIsLoading: (state: IUserState): boolean => state.isLoading,
};
