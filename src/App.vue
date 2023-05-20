<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TaskCard from '@/components/TaskCard.vue';
import TaskSection from '@/components/TaskSection.vue';
import AddSectionButton from '@/components/button/AddSectionButton.vue';
import { useTaskStore } from '@/stores/task';

const { sections } = storeToRefs(useTaskStore());
</script>

<template>
  <v-app>
    <div class="d-flex flex-nowrap overflow-auto pb-3">
      <div class="d-flex flex-column">
        <div class="mx-3">
          <AddSectionButton />
        </div>
        <div class="d-flex align-start my-2">
          <TaskSection
            v-for="section in sections"
            :key="section.sectionId"
            :section="section"
          />
        </div>
      </div>
    </div>
  </v-app>

  <!-- <TaskCard /> -->
  <!-- <v-app>
    <div class="d-flex flex-nowrap overflow-auto pb-3">
      <div class="d-flex flex-column">
        <div class="d-flex">
          <v-form ref="form" class="d-flex">
            <v-text-field v-model="sectionName" label="Section" required class="ma-3"> </v-text-field>
            <v-btn class="mt-5" @click="createSection"> ADD SECTION </v-btn>
          </v-form>
        </div>
        <div class="d-flex align-start">
          <task-section
            v-on:delete-section="deleteSection(index)"
            v-on:create-task="createTask"
            v-on:delete-task="deleteTask"
            v-on:input="changeSectionName"
            v-on:change-task-title="changeTaskTitle"
            v-on:change-task-content="changeTaskContent"
            v-on:toggle-can-edit="toggleCanEdit"
            v-on:toggle-is-done="toggleIsDone"
            v-on:toggle-is-favorite="toggleIsFavorite"
            v-for="(section, index) in sectionArray"
            :section="section"
            :key="section.sectionId"
          ></task-section>
        </div>
      </div>
    </div>
  </v-app> -->
</template>
