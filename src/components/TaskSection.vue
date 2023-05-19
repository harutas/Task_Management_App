<template>
  <div class="mx-3">
    <v-card width="250" class="pa-1">
      <!-- セクション名 -->
      <v-text-field
        v-model="sectionName"
        @input="$emit('input', $event, section.sectionId)"
        label="Section"
        hide-details="false"
      ></v-text-field>
      <task-card
        v-on:delete-task="deleteTask"
        v-on:change-task-title="changeTaskTitle"
        v-on:change-task-content="changeTaskContent"
        v-on:toggle-can-edit="toggleCanEdit"
        v-on:toggle-is-done="toggleIsDone"
        v-on:toggle-is-favorite="toggleIsFavorite"
        :sectionName="sectionName"
        :section="section"
        v-for="task in section.taskArray"
        :task="task"
        :key="task.taskId"
      >
      </task-card>
      <div class="d-flex justify-space-between px-3 py-2">
        <v-icon @click="createTask" class="btn btn-outline-primary">
          mdi-plus
        </v-icon>
        <v-icon
          @click="$emit('delete-section', section.sectionId)"
          class="btn btn-outline-primary"
        >
          mdi-delete
        </v-icon>
      </div>
    </v-card>
  </div>
</template>

<script>
import TaskCard from './TaskCard.vue';
import { Task } from '/src/task.js';

export default {
  name: 'TaskSection',

  components: {
    TaskCard,
  },

  props: {
    section: Object,
  },

  data() {
    return {
      taskId: 1,
      sectionName: this.section.sectionName,
    };
  },

  methods: {
    createTask() {
      let newTask = new Task(
        this.section.sectionId,
        this.taskId,
        '',
        '',
        true,
        false,
        false,
      );
      this.taskId++;
      this.$emit('create-task', this.section.sectionId, newTask);
    },

    deleteTask(sectionId, taskId) {
      return this.$emit('delete-task', sectionId, taskId);
    },

    changeTaskTitle($event, sectionId, taskId) {
      return this.$emit('change-task-title', $event, sectionId, taskId);
    },

    changeTaskContent($event, sectionId, taskId) {
      return this.$emit('change-task-content', $event, sectionId, taskId);
    },

    toggleCanEdit(canEdit, sectionId, taskId) {
      return this.$emit('toggle-can-edit', canEdit, sectionId, taskId);
    },

    toggleIsDone(isDone, sectionId, taskId) {
      return this.$emit('toggle-is-done', isDone, sectionId, taskId);
    },

    toggleIsFavorite(isFavorite, sectionId, taskId) {
      return this.$emit('toggle-is-favorite', isFavorite, sectionId, taskId);
    },
  },

  computed: {
    currSectionName() {
      return this.sectionName;
    },
  },
};
</script>
