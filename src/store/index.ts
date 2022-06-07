import Vuex from 'vuex';
import UserModule from './user/ModuleUser';
import TasksModule from './task/ModuleTasks';
import ResponseModule from './response/ModuleResponse';

const store = new Vuex.Store({
  modules: {
    UserModule,
    TasksModule,
    ResponseModule,
  },
});

export default store;
