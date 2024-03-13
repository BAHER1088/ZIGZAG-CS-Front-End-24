// Problem Link: https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B

function printEvenNumbers(N) {
    let found = false;
    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            console.log(i);
            found = true;
        }
    }
    if (!found) {
        console.log(-1);
    }
}

printEvenNumbers(10);
printEvenNumbers(5);