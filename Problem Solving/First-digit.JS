// Problem Link: https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P

function checkFirstDigit(X) {
    let firstDigit = parseInt(X.toString()[0]);

    if (firstDigit % 2 === 0) {
        console.log("EVEN");
    } else {
        console.log("ODD");
    }
}

checkFirstDigit(4569);
checkFirstDigit(3569);
