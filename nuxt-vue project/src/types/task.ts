 export interface RawTask {
    id: number;
    title: string;
    category: string;
    isCompleted: boolean;
 }

 export class Task {
    idTask: number;
    title: string;
    category: string;
    isCompleted: boolean;

    constructor(data: RawTask){
        this.idTask= data.id;
        this.title= data.title;
        this.category= data.category;
        this.isCompleted= data.isCompleted
    }

    
 }