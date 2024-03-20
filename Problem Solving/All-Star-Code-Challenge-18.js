//Problem link: https://www.codewars.com/kata/5865918c6b569962950002a1

function str_count(str, char) {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i)===char){
            sum++;
        }
    }
    return sum ;
}
console.log(
str_count("Hello", 'o'), // returns 1
str_count("Hello", 'l'), // returns 2
str_count("", 'z'), // returns 0
);