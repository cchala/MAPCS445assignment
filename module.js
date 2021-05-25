"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rectangle = exports.BaseObject = exports.Car = exports.Myself = exports.Univeristy = void 0;
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
var Myself = /** @class */ (function () {
    function Myself(name, money, hobbies) {
        this.name = name,
            this.money = money,
            this.hobbies = hobbies;
    }
    Myself.prototype.deposit = function (value) {
        this.money += value;
    };
    return Myself;
}());
exports.Myself = Myself;
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name,
            this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(this.name + " is saying:Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
exports.Car = Car;
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
exports.BaseObject = BaseObject;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this) || this;
        _this.width = 0;
        _this.length = 0;
        return _this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
exports.Rectangle = Rectangle;
