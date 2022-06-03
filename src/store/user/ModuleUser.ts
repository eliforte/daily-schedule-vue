import state from './UserState';
import getters from './UserGetters';
import mutations from './UserMutations';
import actions from './UserActions';

const ModuleUser = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default ModuleUser;
