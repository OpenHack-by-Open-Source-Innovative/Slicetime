import { Common } from "./common";

export interface Task extends Common {
    id : number;
    deadline : number;
    estimatedTime : number;
    tag : string;
    project : string;
    description : string;
}