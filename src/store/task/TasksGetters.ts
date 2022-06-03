import { ITasksState } from './TasksTypes';

export default {
  getTasks: (state: ITasksState) => state.tasks,
  getTaskForm: (state: ITasksState) => state.taskForm,
};
