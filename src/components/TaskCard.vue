<template>
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

<script setup lang="ts">
// export default {
//     name : 'TaskCard',

//     data() {
//         return {
//             title : this.task.title,
//             content : this.task.content,
//         }
//     },

//     props : {
//         task : Object,
//         section : Object,
//         sectionName : String,
//     }
// }
</script>
