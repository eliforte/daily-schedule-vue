interface ITaskItem {
  _id?: string;
  userId?: string;
  title: string;
  description: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date | null;
}

export interface ITasksState {
  taskForm: {
    title: string;
    description: string;
  };
  tasks: ITaskItem[];
}
