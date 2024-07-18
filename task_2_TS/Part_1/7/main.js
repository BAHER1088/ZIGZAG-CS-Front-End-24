// Create Your Class Here
var Player = /** @class */ (function () {
    function Player(id, title, level) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    Player.prototype.logIn = function () {
        console.log("Logged In");
    };
    Player.prototype.logOut = function (msg) {
        console.log("Logged Out, ".concat(msg));
    };
    return Player;
}());
var player1 = new Player(100, "Elzero", 95);
console.log(player1.id); // 100
console.log(player1.title); // "Elzero"
console.log(player1.level); // 95
player1.logIn(); // Logged In
player1.logOut("Good Bye"); // Logged Out, Good Bye
