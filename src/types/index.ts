export interface Task {
  id: string;
  taskTitle: string;
  taskContent: string;
  isEdit: boolean;
  isFavorite: boolean;
  isDone: boolean;
  sectionId: string;
}

export interface Section {
  sectionId: string;
  sectionName: string;
}
