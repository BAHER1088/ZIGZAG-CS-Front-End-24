//Problem link: https://www.codewars.com/kata/5bb0c58f484fcd170700063d

function pillars(pills, distance, width) {
    return ( pills - 2 ) * width + ( pills - 1 ) * distance * 100 ;
}

console.log(pillars(18, 7, 20));