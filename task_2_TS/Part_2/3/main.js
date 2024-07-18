// Write Class Code Here
var Game = /** @class */ (function () {
    function Game(title, price) {
        this.title = title;
        this.price = price;
    }
    Game.prototype.getDiscount = function (discount) {
        console.log("The Discount Is ".concat(discount));
    };
    return Game;
}());
// Do Not Edit Here
var gameOne = new Game("Ys", 100);
var gameTwo = new Game(2064, 100); // There's A Game Called "2064"
console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"
console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"
