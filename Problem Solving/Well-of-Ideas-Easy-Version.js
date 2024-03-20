//Problem link: https://www.codewars.com/kata/57f222ce69e09c3630000212

function ideas(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i]==="good"){
            sum++;
        }
    }
    if (sum===0){return 'Fail!';}
    else if (sum>2){ return 'I smell a series!';}
    else { return 'Publish!';}
}

console.log (ideas(["bad","bad","bad","bad","bad","bad","bad"])); //no good ... outputs Fail!
console.log (ideas(["good","bad","bad","bad","bad","bad","bad"])); //1 good ... outputs Publish!
console.log (ideas(["good","good","bad","bad","bad","bad","bad"])); //2 good ... outputs Publish!
console.log (ideas(["good","good","good","bad","bad","bad","bad"])); //3 good ... outputs I smell a series!
