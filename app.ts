import {Univeristy,IbankAccount,Myself,Car,BaseObject,Rectangle} from './module.js'

let obj=new Univeristy("MIU", "Computer Science")
obj.graduation(2017)


let me=new Myself("Chimdi",2000,["Violin", "Cooking"])
me.deposit(3000)
console.log(me) 

let car=new Car("BMW")
car.honk()
console.log(car.acceleration)
car.accelerate(60)
console.log(car.acceleration)
 