// Problem Link: https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/W

function evaluateExpression(expression) {
    let [A, S, B, Q, C] = expression.split(' ');
    A = parseInt(A);
    B = parseInt(B);
    C = parseInt(C);

    let result;
    if (S === '+') {
        result = A + B;
    } else if (S === '-') {
        result = A - B;
    } else if (S === '*') {
        result = A * B;
    }

    if (result === C) {
        console.log("Yes");
    } else {
        console.log(result);
    }
}

evaluateExpression('5 + 10 = 15');
evaluateExpression('3 - 1 = 2');
evaluateExpression('2 * 10 = 19');