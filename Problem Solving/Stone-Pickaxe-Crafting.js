//Problem link: https://www.codewars.com/kata/65c0161a2380ae78052e5731

function pickaxeable(array) {
    let sticks = 0, cobblestones = 0, pickaxes = 0;
    for (let i = 0; i <= array.length; i++) {
        if(array[i]==="Sticks"){
            sticks++;
        }
        if(array[i]==="Cobblestone"){
            cobblestones++;
        }
        if(array[i]==="Wood"){
            sticks+=4; 
        }
        if (cobblestones>=3 && sticks>=2){
            pickaxes++;
            cobblestones-=3;
            sticks-=2;   
        }
    }
    return pickaxes ;
}

console.log (pickaxeable( ["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"])); //Returned: 1
console.log (pickaxeable( ["Wood", "Cobblestone", "Cobblestone", "Cobblestone"])); //Returned: 1
console.log (pickaxeable( [])); //Returned: 0
console.log (pickaxeable( ["Sticks", "Wool", "Cobblestone"])); //Returned: 0
console.log (pickaxeable( ["Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Cobblestone", "Wood"])); //Returned: 2