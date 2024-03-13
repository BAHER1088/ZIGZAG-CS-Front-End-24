// Problem Link: https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K

function findMinMax(A, B, C) {
    let min = Math.min(A, B, C);
    let max = Math.max(A, B, C);

    console.log(`${min} ${max}`);
}

findMinMax(1, 2, 3)
findMinMax(-1, -2, -3);
findMinMax(10, 20, -5);