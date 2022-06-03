export interface IUserState {
  loginForm: {
    email: string;
    password: string;
  },
  registerForm: {
    email: string;
    password: string;
    name: string;
  },
  user: {
    _id: string;
    name: string;
    email: string;
    token: string;
  },
  loggedIn: boolean;
}
