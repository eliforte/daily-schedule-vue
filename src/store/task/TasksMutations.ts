import { ITasksState } from './TasksTypes';

export default {
  setTaskForm: (state: ITasksState, payload: { key: keyof ITasksState['taskForm'], value: string }) => {
    state.taskForm[payload.key] = payload.value;
  },
  setNewTasks: (state: ITasksState, payload: ITasksState['tasks']) => {
    state.tasks = [...state.tasks, ...payload];
  },
};
