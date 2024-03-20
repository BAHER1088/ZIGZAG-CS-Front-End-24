//Problem link: https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {

    let x ,points=0 ;
    for (let i =0 ; i<games.length ; i++) {
        x= parseInt(games[i][0]);
        y= parseInt(games[i][2]);
        if (x > y){ points+=3;}
        if (x === y){ points+=1;}
    }
    return points;

}

console.log(points(["4:0", "6:2", "5:0", "3:2", "2:2", "1:1", "1:0", "5:1", "5:2", "0:2"]));