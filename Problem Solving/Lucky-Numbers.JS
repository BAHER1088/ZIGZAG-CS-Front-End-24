// Problem Link: https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/M

function checkLuckyNumber(N) {
    while (N > 0) {
        let LSD = N % 10;
        if (LSD !== 4 && LSD !== 7) {
            return false;
        }
        N = Math.floor(N / 10);
    }
    return true;
}

function logLuckyNumbers(a, b) {
    let isFound = false;
    for (let i = a; i <= b; i++) {
        if (checkLuckyNumber(i)) {
            console.log(i);
            isFound = true;
        }
    }
    if (!isFound) {
        console.log(-1);
    }
}

logLuckyNumbers(4, 20);
logLuckyNumbers(8, 15);
