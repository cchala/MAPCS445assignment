"use strict";
// "function University(name, dept) {
//     this.name = name;
//     this.dept = dept;
//     this.graduation = function(year) {
//     console.log(`Graduating ${this.dept} ${year} students`);
//     }
//     }
//     var miu = new Univeristy("MIU", "Computer Science");
//     miu.graduation(2019);"
Object.defineProperty(exports, "__esModule", { value: true });
exports.Univeristy = void 0;
// function Univeristy(name:string,dept:string){
//     this.name=name
//     this.dept=dept;
//     this.graduation=function(year:number){
//         console.log(`graduating ${this.dept} ${year} students`)
//     }
// }
var Univeristy = /** @class */ (function () {
    function Univeristy(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    Univeristy.prototype.graduation = function (year) {
        console.log("graduating " + this.dept + " " + year + " students");
    };
    return Univeristy;
}());
exports.Univeristy = Univeristy;
