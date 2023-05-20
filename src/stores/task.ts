import { Section, Task } from '@/types';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useTaskStore = defineStore({
  id: 'task',
  state: () => {
    return {
      sections: [] as Section[],
      tasks: [] as Task[],
    };
  },

  getters: {
    getSectionTasks(state) {
      return (sectionId: string) => {
        return state.tasks.filter((t) => t.sectionId === sectionId);
      };
    },
  },

  actions: {
    addSection() {
      const sectionId = nanoid();
      const newSection: Section = {
        sectionId: sectionId,
        sectionName: '',
      };
      const defaultTask: Task = {
        id: nanoid(),
        taskTitle: '',
        taskContent: '',
        isEdit: true,
        isFavorite: false,
        isDone: false,
        sectionId: sectionId,
      };
      this.sections.push(newSection);
      this.tasks.push(defaultTask);
    },

    deleteSectionBySectionId(sectionId: string) {
      this.sections = this.sections.filter((section: Section) => {
        return section.sectionId !== sectionId;
      });
    },

    deleteTaskBySectionId(sectionId: string) {
      this.tasks = this.tasks.filter((task: Task) => {
        return task.sectionId !== sectionId;
      });
    },

    addTask(task: Task) {
      this.tasks.push(task);
    },

    deleteTask(taskId: string) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskId;
      });
    },

    toggleIsEdit(taskId: string) {
      const task = this.tasks.find((task) => {
        return task.id === taskId;
      });
      if (task !== undefined) {
        task.isEdit = !task.isEdit;
      }
    },

    toggleIsDone(taskId: string) {
      const task = this.tasks.find((task) => {
        return task.id === taskId;
      });
      if (task !== undefined) {
        task.isDone = !task.isDone;
      }
    },

    toggleIsFavorite(taskId: string) {
      const task = this.tasks.find((task) => {
        return task.id === taskId;
      });
      if (task !== undefined) {
        task.isFavorite = !task.isFavorite;
      }
    },
  },
});
