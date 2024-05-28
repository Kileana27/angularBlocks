import { Skill } from "./skill.model";

export class Developer {
    constructor(
        readonly lastname: string,
        readonly firstname: string,
        readonly age: number,
        readonly gender: string,
        readonly bio: string,
        readonly skills: Skill[],
    ) { }

}