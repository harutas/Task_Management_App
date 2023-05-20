<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { Task } from '@/types';
import { useTaskStore } from '@/stores/task';

interface Props {
  task: Task;
}

const { deleteTask, toggleIsEdit, toggleIsDone, toggleIsFavorite } =
  useTaskStore();
const props = defineProps<Props>();
const { task } = toRefs(props);
const textarea = ref();
</script>

<template>
  <v-card class="pa-2 my-3">
    <v-text-field v-model="task.taskTitle" label="title" hide-details="auto" />

    <v-textarea
      v-if="task.isEdit"
      ref="textarea"
      v-model="task.taskContent"
      label="Todo"
      outlined
      @blur="toggleIsEdit(task.id)"
    ></v-textarea>
    <p
      v-else
      class="pt-6 px-4 pb-1"
      :style="{ whiteSpace: 'pre-line' }"
      @dblclick="toggleIsEdit(task.id)"
    >
      {{ task.taskContent }}
    </p>

    <v-card-actions class="d-flex justify-end">
      <v-icon color="grey" class="mx-1" @click="toggleIsEdit(task.id)"
        >mdi-note</v-icon
      >

      <v-icon
        v-if="task.isDone"
        color="green"
        class="mx-1"
        @click="toggleIsDone(task.id)"
        >mdi-check-bold</v-icon
      >
      <v-icon v-else color="grey" class="mx-1" @click="toggleIsDone(task.id)"
        >mdi-check-bold</v-icon
      >

      <v-icon
        v-if="task.isFavorite"
        color="yellow"
        class="mx-1"
        @click="toggleIsFavorite(task.id)"
        >mdi-star</v-icon
      >
      <v-icon
        v-else
        color="grey"
        class="mx-1"
        @click="toggleIsFavorite(task.id)"
        >mdi-star</v-icon
      >

      <v-icon color="grey" class="mx-1" @click="deleteTask(task.id)">
        mdi-delete
      </v-icon>
    </v-card-actions>
  </v-card>
  <!-- <v-col>
    <v-card class="pa-2">
      <v-text-field
        v-model="title"
        @input="$emit('change-task-title', $event, section.sectionId, task.taskId)"
        label="title"
        hide-details="false"
      ></v-text-field>
      <div class="text-caption my-2">Section name: {{ sectionName }}</div>

      <v-textarea
        v-if="task.canEdit"
        v-model="content"
        @input="$emit('change-task-content', $event, section.sectionId, task.taskId)"
        label="Write todo"
        outlined
        hide-details="false"
      ></v-textarea>
      <div v-else>{{ content }}</div>

      <v-card-actions class="d-flex justify-end">
        <v-icon @click="$emit('toggle-can-edit', task.canEdit, section.sectionId, task.taskId)" class="mx-1"
          >mdi-note</v-icon
        >

        <v-icon
          v-if="task.isDone"
          @click="$emit('toggle-is-done', task.isDone, section.sectionId, task.taskId)"
          color="green"
          class="mx-1"
          >mdi-check-bold</v-icon
        >
        <v-icon v-else @click="$emit('toggle-is-done', task.isDone, section.sectionId, task.taskId)" class="mx-1"
          >mdi-check-bold</v-icon
        >

        <v-icon
          v-if="task.isFavorite"
          @click="$emit('toggle-is-favorite', task.isFavorite, section.sectionId, task.taskId)"
          color="yellow"
          class="mx-1"
          >mdi-star</v-icon
        >
        <v-icon
          v-else
          @click="$emit('toggle-is-favorite', task.isFavorite, section.sectionId, task.taskId)"
          class="mx-1"
          >mdi-star</v-icon
        >

        <v-icon @click="$emit('delete-task', section.sectionId, task.taskId)" class="mx-1"> mdi-delete </v-icon>
      </v-card-actions>
    </v-card>
  </v-col> -->
</template>
