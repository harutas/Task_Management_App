<template>
    <v-app>
        <div class="d-flex flex-nowrap overflow-auto pb-3">
            <div class="d-flex flex-column">
                <div class="d-flex">
                    <v-form
                    ref="form"
                    class="d-flex"
                    >
                        <v-text-field
                          v-model="sectionName"
                          label="Section"
                          required
                          class="ma-3"
                        >
                        </v-text-field>
                        <v-btn
                          class="mt-5"
                          @click="createSection"
                        >
                          ADD SECTION
                        </v-btn>
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
                    :key="section.sectionId"></task-section>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
import TaskSection from './components/TaskSection.vue';
import {Section} from '/src/task.js';

export default {
    name: 'App',

    components: {
        TaskSection
    },

    data(){
        return {
            sectionId : 0,
            sections : [],
            sectionName : ""
        } 
    },

    methods : {
        createSection(){
            let section = new Section(this.sectionId, this.sectionName);
            this.sectionId++;
            console.log(this.sections);
            return this.sections.push(section);
        },

        deleteSection(index){
            this.$delete(this.sections, index);
        },

        changeSectionName($event, sectionId){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            identifiedSection.sectionName = $event;
        },

        createTask(sectionId, taskObj){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            identifiedSection.taskArray.push(taskObj);
        },

        deleteTask(sectionId, taskId){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            const taskArr = identifiedSection.taskArray;
            for (let i = 0; i < taskArr.length; i++){
                if (taskArr[i].taskId === taskId) {
                    taskArr.splice(i, 1);
                }
            }
        },

        changeTaskTitle($event, sectionId, taskId){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            const taskArr = identifiedSection.taskArray;
            for (let i = 0; i < taskArr.length; i++){
                if (taskArr[i].taskId === taskId) {
                    taskArr[i].title = $event;
                }
            }
        },

        changeTaskContent($event, sectionId, taskId){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            const taskArr = identifiedSection.taskArray;
            for (let i = 0; i < taskArr.length; i++){
                if (taskArr[i].taskId === taskId) {
                taskArr[i].content = $event;
                }
            }
        },

        toggleCanEdit(canEdit, sectionId, taskId){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            const taskArr = identifiedSection.taskArray;
            for (let i = 0; i < taskArr.length; i++){
                if (taskArr[i].taskId === taskId) {
                taskArr[i].canEdit = !canEdit;
                }
            }
        },

        toggleIsDone(isDone, sectionId, taskId){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            const taskArr = identifiedSection.taskArray;
            for (let i = 0; i < taskArr.length; i++){
                if (taskArr[i].taskId === taskId) {
                    taskArr[i].isDone = !isDone;
                }
            }
        },

        toggleIsFavorite(isFavorite, sectionId, taskId){
            const identifiedSection = this.sections.find(section => section.sectionId === sectionId);
            const taskArr = identifiedSection.taskArray;
            for (let i = 0; i < taskArr.length; i++){
                if (taskArr[i].taskId === taskId) {
                taskArr[i].isFavorite = !isFavorite;
                }
            }
        },
    },

    computed : {
        sectionArray(){
            return this.sections;
        }
    }
};
</script>
