var Shorten = /** @class */ (function () {
    function Shorten(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
    return Shorten;
}());
var tester = new Shorten(100, "Elzero", "Developer");
console.log(tester.id);
console.log(tester.username);
