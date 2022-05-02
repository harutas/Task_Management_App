export class Task{
    constructor(sectionId, taskId, title, content, canEdit, isDone, isFavorite){
        this.sectionId = sectionId;
        this.taskId = taskId;
        this.title = title;
        this.content = content;
        this.canEdit = canEdit;
        this.isDone = isDone;
        this.isFavorite = isFavorite;
    }

    static createDefaultTask(sectionId){
        let defaultTask = new Task(sectionId, 0, "", "", true, false, false);
        let taskArray = [];
        taskArray.push(defaultTask);
        return taskArray;
    }
}

export class Section {
    constructor(sectionId, sectionName){
        this.sectionId = sectionId;
        this.sectionName = sectionName;
        this.taskArray = Task.createDefaultTask(sectionId);
    }
}