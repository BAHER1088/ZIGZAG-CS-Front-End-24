class Show {
    constructor(private _title: string) {}
    
    get title(): string {
        return this._title;
    }

    set title(newTitle: string) {
        this._title = newTitle;
    }
}

let tester = new Show("Elzero");

console.log(tester.title); // Property 'title' does not exist on type 'Show'
tester.title = "Osama"; // Property 'title' does not exist on type 'Show'
console.log(tester.title); // Property 'title' does not exist on type 'Show'