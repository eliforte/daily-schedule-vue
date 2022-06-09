/* eslint-disable no-underscore-dangle */
import { ActionContext } from 'vuex';
import { AxiosResponse, AxiosError } from 'axios';
import { IUserState } from './UserTypes';
import { api } from '../../boot/axios';

export default {
  IfLoggidIn: (store: ActionContext<IUserState, unknown>): void => {
    store.state.isLoading = true;
    if (localStorage.getItem('token')) {
      store.state.loggedIn = true;
      store.state.user.token = JSON.stringify(localStorage.getItem('token'));
      store.state.isLoading = false;
    }
    store.state.isLoading = false;
  },
  setIntoStore: (store: ActionContext<IUserState, unknown>, response: AxiosResponse): void => {
    store.state.user.token = response.data.token;
    store.state.user._id = response.data._id;
    store.state.user.name = response.data.name;
    localStorage.setItem('token', response.data.token);
  },
  RequestLogin:
  async (store: ActionContext<IUserState, unknown>): Promise<AxiosResponse | AxiosError | void> => {
    store.state.isLoading = true;
    try {
      const request = await api.post('/login', {
        email: store.state.loginForm.email,
        password: store.state.loginForm.password,
      });
      store.dispatch('setIntoStore', request);
      store.state.isLoading = false;
      return request.data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        store.state.responseMessage = error.response.data.message;
        store.state.hasError = true;
        store.state.isLoading = false;
        return error;
      }
      store.state.isLoading = false;
      return error;
    }
  },
  RequestRegister:
  async (store: ActionContext<IUserState, unknown>): Promise<AxiosResponse | AxiosError | void> => {
    store.state.isLoading = true;
    try {
      const request = await api.post('/users', {
        email: store.state.registerForm.email,
        password: store.state.registerForm.password,
        name: store.state.registerForm.name,
      });
      store.dispatch('setIntoStore', request);
      store.state.isLoading = false;
      return request.data;
    } catch (err) {
      const error = err as AxiosError;
      if (error.response) {
        store.state.responseMessage = error.response.data.message;
        store.state.hasError = true;
        store.state.isLoading = false;
        return error;
      }
      store.state.isLoading = false;
      return error;
    }
  },
};
