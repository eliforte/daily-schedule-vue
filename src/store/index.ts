import Vuex from 'vuex';
import UserModule from './user/ModuleUser';
import ModuleTasks from './task/ModuleTasks';
import ResponseModule from './response/ModuleResponse';

const store = new Vuex.Store({
  modules: {
    UserModule,
    ModuleTasks,
    ResponseModule,
  },
});

export default store;
