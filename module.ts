
import { strict } from "assert/strict";

//Q1
export class Univeristy{
    name:string;
    dept:string
    constructor(name:string,dept:string){
        this.name=name
        this.dept=dept;
}
      graduation(year:number){
            console.log(`graduating ${this.dept} ${year} students`)
}
}
//Q2
export interface IbankAccount{
    money:number,
    deposit(value:number):void
    }
 
 export class Myself implements IbankAccount{
 
        name:string;
        hobbies:string[];
        money: number;
    constructor(name:string,money:number,hobbies:string[]){
          this.name=name,
          this.money=money,
         this.hobbies=hobbies
    }
    deposit(value:number):void{
         this.money+=value;
    }
    }
//Q3
    export class Car{
        name:string;
        acceleration:number;
        constructor(name:string){
            this.name=name,
            this.acceleration=0;
        }
        honk():void{
            console.log(`${this.name} is saying:Toooooooooot!`)
        }
        accelerate(speed:number):void{
            this.acceleration+=speed
        }
     
    }

    //Q4
    export class BaseObject{
        width:number;
        length:number;
        constructor(){
            this.width=0;
            this.length=0;
        }
    }
    export class Rectangle extends BaseObject{
        constructor(){
            super()
            this.width=0;
            this.length=0;
        }
        calcSize():number{
            return this.width * this.length;
        }
    }
       
   
 
   

