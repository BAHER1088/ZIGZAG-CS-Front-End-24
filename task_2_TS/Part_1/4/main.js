// Create Class Here
var Player = /** @class */ (function () {
    function Player(name, type, level, vip) {
        if (vip === void 0) { vip = false; }
        this.name = name;
        this.type = type;
        this.level = typeof level === "string" ? parseInt(level) : level;
        this.vip = vip;
    }
    Player.prototype.details = function () {
        var vipStatus = this.vip ? "VIP " : "";
        return "".concat(vipStatus).concat(this.name, ", Type Is ").concat(this.type, " Level Is ").concat(this.level);
    };
    return Player;
}());
// Do Not Edit The Code Below
var player1 = new Player("Osama", "Mage", 90, true);
var player2 = new Player("Shady", "Archer", "85", false);
var player3 = new Player("Amr", "Fighter", 50, true);
var player4 = new Player("Mahmoud", "Assassin", 77);
console.log(player1.details()); // VIP Osama, Type Is Mage Level Is 90
console.log(player2.details()); // Shady, Type Is Archer Level Is 85
console.log(player3.details()); // VIP Amr, Type Is Fighter Level Is 50
console.log(player4.details()); // Mahmoud, Type Is Assassin Level Is 77
