<script setup lang="ts">
import { toRefs } from 'vue';
import { storeToRefs } from 'pinia';
import { Section, Task } from '@/types';
import { useTaskStore } from '@/stores/task';
import { nanoid } from 'nanoid';
import TaskCard from '@/components/TaskCard.vue';

interface Props {
  section: Section;
}

// const { getSectionTasks} = storeToRefs(useTaskStore());
const {
  addTask,
  deleteSectionBySectionId,
  deleteTaskBySectionId,
  getSectionTasks,
} = useTaskStore();

const props = defineProps<Props>();
const { section } = toRefs(props);

const handleClickAddTaskButton = () => {
  const { sectionId } = section.value;
  const newTask: Task = {
    id: nanoid(),
    taskTitle: '',
    taskContent: '',
    isEdit: true,
    isFavorite: false,
    isDone: false,
    sectionId: sectionId,
  };
  addTask(newTask);
};

const handleClickDeleteSection = () => {
  const { sectionId } = section.value;
  deleteSectionBySectionId(sectionId);
  deleteTaskBySectionId(sectionId);
};
</script>

<template>
  <v-card width="250" class="pa-1 mx-3">
    <!-- section name -->
    <v-text-field
      v-model="section.sectionName"
      label="Section"
      hide-details="auto"
    />

    <!-- task cards -->
    <TaskCard
      v-for="task in getSectionTasks(section.sectionId)"
      :key="task.id"
      :task="task"
    />

    <!-- add task button + delete section button -->
    <div class="d-flex justify-space-between px-3 py-2">
      <v-icon class="btn btn-outline-primary" @click="handleClickAddTaskButton">
        mdi-plus
      </v-icon>
      <v-icon class="btn btn-outline-primary" @click="handleClickDeleteSection">
        mdi-delete
      </v-icon>
    </div>
  </v-card>
</template>
