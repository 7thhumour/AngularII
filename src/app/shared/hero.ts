import { Ihero } from "./ihero";   

type allowNull = number | string | null;

export class Hero implements Ihero {  
    id!: number;                      
    name!: string;  
    age!: allowNull;  
    birthday!: allowNull;
    height!: string;  
    image!: string;
    alive!: boolean;
}