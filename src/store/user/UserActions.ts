/* eslint-disable no-underscore-dangle */
import { ActionContext } from 'vuex';
import { AxiosResponse, AxiosError } from 'axios';
import { IUserState } from './UserTypes';
import { api } from '../../boot/axios';

export default {
  IfLoggidIn: (store: ActionContext<IUserState, unknown>) => {
    store.state.isLoading = true;
    if (localStorage.getItem('token')) {
      store.state.loggedIn = true;
      store.state.isLoading = false;
    }
    store.state.isLoading = false;
  },
  setIntoStore: (store: ActionContext<IUserState, unknown>, response: AxiosResponse) => {
    store.state.response.message = response.data.message;
    store.state.response.status = response.data.status;
    store.state.user.token = response.data.token;
    store.state.user._id = response.data.user._id;
    store.state.user.name = response.data.user.name;
    localStorage.setItem('token', response.data.token);
  },
  Login: (store: ActionContext<IUserState, unknown>) => {
    store.state.isLoading = true;
    api.post('/login', {
      email: store.state.loginForm.email,
      password: store.state.loginForm.password,
    }).then((response: AxiosResponse) => {
      store.dispatch('setIntoStore', response);
    }).catch((err: AxiosError) => {
      if (err.response) {
        store.state.response.message = err.response.data.message;
        store.state.response.status = true;
      }
      store.state.isLoading = false;
    }).finally(() => {
      store.state.isLoading = false;
    });
  },
  Register: (store: ActionContext<IUserState, unknown>) => {
    store.state.isLoading = true;
    api.post('/users', {
      email: store.state.registerForm.email,
      password: store.state.registerForm.password,
      name: store.state.registerForm.name,
    }).then((response: AxiosResponse) => {
      store.dispatch('setIntoStore', response);
    }).catch((err: AxiosError) => {
      if (err.response) {
        store.state.response.message = err.response.data.message;
        store.state.response.status = true;
      }
      store.state.isLoading = false;
    }).finally(() => {
      store.state.isLoading = false;
    });
  },
};
