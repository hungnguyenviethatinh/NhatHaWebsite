import Projects from './Projects';

export default class TypeProjects{
    name : String;
    project : Projects[];
    constructor(name:String,project : Projects[]){
        this.name=name;
        this.project=project;
    }
}