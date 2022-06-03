import Vuex from 'vuex';
import UserModule from './user/ModuleUser';

const store = new Vuex.Store({
  modules: {
    UserModule,
  },
});

export default store;
