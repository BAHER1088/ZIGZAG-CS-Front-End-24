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
var Game = /** @class */ (function () {
    function Game(title, price) {
        this.title = title;
        this.price = price;
    }
    return Game;
}());
// Start Edit And Fix
var RPG = /** @class */ (function (_super) {
    __extends(RPG, _super);
    function RPG(title, price, rate) {
        var _this = _super.call(this, title, price) || this;
        _this.rate = rate;
        return _this;
    }
    RPG.prototype.getLocation = function () {
        return "Location";
    };
    RPG.prototype.getDiscount = function () {
        return "Discount";
    };
    return RPG;
}(Game));
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action(title, price, rate, company) {
        var _this = _super.call(this, title, price) || this;
        _this.rate = rate;
        _this.company = company;
        return _this;
    }
    Action.prototype.getLocation = function () {
        return "Location";
    };
    Action.prototype.getDiscount = function () {
        return "Discount";
    };
    return Action;
}(Game));
// End Edit And Fix
// Do Not Edit
var gameOne = new RPG("Ys", 100, 10);
var gameTwo = new Action("Uncharted", 90, 15, "Sony");
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
console.log(gameOne.rate); // 10
console.log(gameOne.getDiscount()); // "Discount"
console.log(gameOne.getLocation()); // "Location"
console.log(gameTwo.title); // "Uncharted"
console.log(gameTwo.price); // 90
console.log(gameTwo.rate); // 15
console.log(gameTwo.company); // "Sony"
console.log(gameTwo.getDiscount()); // "Discount"
console.log(gameTwo.getLocation()); // "Location"
