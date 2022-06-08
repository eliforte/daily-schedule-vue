import Vuex from 'vuex';
import UserModule from './user/ModuleUser';
import TasksModule from './task/ModuleTasks';

const store = new Vuex.Store({
  modules: {
    UserModule,
    TasksModule,
  },
});

export default store;
