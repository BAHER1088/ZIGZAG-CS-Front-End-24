// Problem Link: https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G

function summation(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    console.log(sum);
}

summation(3);
summation(10);
