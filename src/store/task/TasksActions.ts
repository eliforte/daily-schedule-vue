/* eslint-disable dot-notation */
import { ActionContext } from 'vuex';
import { AxiosResponse, AxiosError } from 'axios';
import { ITasksState } from './TasksTypes';
import { api } from '../../boot/axios';

export default {
  getAllTasks: (store: ActionContext<ITasksState, unknown>) => {
    store.commit('ModuleResponse/setIsLoading', true);
    api.get('/tasks', {
      headers: {
        Authorization: `Bearer ${store.getters['ModuleUser/getToken']}`,
      },
    }).then((response: AxiosResponse) => {
      store.commit('setTasks', response.data);
    }).catch((err: AxiosError) => {
      if (err.response) {
        store.commit('ModuleResponse/setResponseMessage', err.response.data.message);
        store.commit('ModuleResponse/setResponseHasError', true);
      }
      store.commit('ModuleResponse/setIsLoading', false);
    }).finally(() => {
      store.commit('ModuleResponse/setIsLoading', false);
    });
  },
  createTask: (store: ActionContext<ITasksState, unknown>) => {
    store.commit('ModuleResponse/setIsLoading', true);
    api.post('/tasks', {
      title: store.state.taskForm.title,
      description: store.state.taskForm.description,
    }, {
      headers: {
        Authorization: `Bearer ${store.getters['ModuleUser/getToken']}`,
      },
    }).then((response: AxiosResponse) => {
      if (response.status === 201) {
        store.commit('ModuleResponse/setResponseMessage', 'Task created');
        store.commit('ModuleResponse/setResponseHasError', false);
        store.commit('setNewTasks', response.data);
      }
    }).catch((err: AxiosError) => {
      if (err.response) {
        store.commit('ModuleResponse/setResponseMessage', err.response.data.message);
        store.commit('ModuleResponse/setResponseHasError', true);
      }
      store.commit('ModuleResponse/setIsLoading', false);
    }).finally(() => {
      store.commit('ModuleResponse/setIsLoading', false);
    });
  },
  updateTask: (store: ActionContext<ITasksState, unknown>, payload: {
    id: string, title: string, description: string
  }) => {
    store.commit('ModuleResponse/setIsLoading', true);
    api.put(`/tasks/${payload.id}`, {
      title: payload.title,
      description: payload.description,
    }, {
      headers: {
        Authorization: `Bearer ${store.getters['ModuleUser/getToken']}`,
      },
    }).then((response: AxiosResponse) => {
      if (response.status === 200) {
        store.commit('ModuleResponse/setResponseMessage', 'Task updated');
        store.commit('ModuleResponse/setResponseHasError', false);
        store.commit('setNewTasks', response.data);
      }
    }).catch((err: AxiosError) => {
      if (err.response) {
        store.commit('ModuleResponse/setResponseMessage', err.response.data.message);
        store.commit('ModuleResponse/setResponseHasError', true);
      }
      store.commit('ModuleResponse/setIsLoading', false);
    }).finally(() => {
      store.commit('ModuleResponse/setIsLoading', false);
    });
  },
  deleteTask: (store: ActionContext<ITasksState, unknown>, payload: { id: string }) => {
    store.commit('ModuleResponse/setIsLoading', true);
    api.delete(`/tasks/${payload.id}`, {
      headers: {
        Authorization: `Bearer ${store.getters['ModuleUser/getToken']}`,
      },
    }).then((response: AxiosResponse) => {
      if (response.status === 204) {
        store.commit('ModuleResponse/setResponseMessage', 'Task deleted');
        store.commit('ModuleResponse/setResponseHasError', false);
      }
    }).catch((err: AxiosError) => {
      if (err.response) {
        store.commit('ModuleResponse/setResponseMessage', err.response.data.message);
        store.commit('ModuleResponse/setResponseHasError', true);
      }
      store.commit('ModuleResponse/setIsLoading', false);
    }).finally(() => {
      store.commit('ModuleResponse/setIsLoading', false);
    });
  },
};
