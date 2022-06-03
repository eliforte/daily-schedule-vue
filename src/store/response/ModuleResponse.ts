import state from './ResponseState';
import getters from './ResponseGetters';
import mutations from './ResponseMutations';

const ModuleResponse = {
  namespaced: true,
  state,
  getters,
  mutations,
};

export default ModuleResponse;
