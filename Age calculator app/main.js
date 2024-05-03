function submit() {

    let dayE = document.getElementById("day");
    let monthE = document.getElementById("month");
    let yearE = document.getElementById("year");

    let bDay = dayE.value;
    let bMonth = monthE.value;
    let bYear = yearE.value;

    function calculateAge(day, month, year) {
        const today = new Date();
        let years = today.getFullYear() - year;
        let months = today.getMonth() + 1 - month;
        let days = today.getDate() - day;

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }
        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            days = lastMonth.getDate() - day + today.getDate();
            months--;
        }
        var results = new Array(years, months, days);
        return results;
    }

    results = calculateAge(bDay, bMonth, bYear);

    let daysE = document.getElementById("days");
    let monthsE = document.getElementById("months");
    let yearsE = document.getElementById("years");

    daysE.textContent = results[2];
    monthsE.textContent = results[1];
    yearsE.textContent = results[0];

}

let btn = document.getElementById("submit");
btn.onclick = submit;