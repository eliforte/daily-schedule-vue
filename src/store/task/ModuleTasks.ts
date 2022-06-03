import state from './TasksState';
import getters from './TasksGetters';
import mutations from './TasksMutations';
import actions from './TasksActions';

const ModuleTasks = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default ModuleTasks;
