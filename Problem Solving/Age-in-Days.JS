// Problem Link: https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R

function calculateAge(N) {
    let years = Math.floor(N / 365);
    let months = Math.floor((N % 365) / 30);
    let days = (N-years*365) % 30;

    console.log(years + " years, " + months + " months, " + days + " days");
}

calculateAge(400);
calculateAge(800);
calculateAge(30);
