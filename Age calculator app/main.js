const form = document.getElementById('submit');

form.addEventListener('click', function (event) {
    console.log("years");

    event.preventDefault();
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const dayIn = document.getElementById('day');
    const monthIn = document.getElementById('month');
    const yearIn = document.getElementById('year');

    const dayLable = document.getElementById("dayLabel");
    const monthLable = document.getElementById("monthLabel");
    const yearLable = document.getElementById("yearLabel");


    let dayError = '';
    let monthError = '';
    let yearError = '';

    if (!day || !month || !year) {

        if (!day) {
            dayError = 'This field is required';
            dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
            dayLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (!month) {
            monthError = 'This field is required';
            monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
            monthLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (!year) {
            yearError = 'This field is required';
            yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
            yearLable.style.color = 'hsl(0, 100%, 67%)';
        }

    } else {
        if (day < 1 || day > 31) {
            dayError = 'Must be a valid day';
            dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
            dayLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (month < 1 || month > 12) {
            monthError = 'Must be a valid month';
            monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
            monthLable.style.color = 'hsl(0, 100%, 67%)';
        }

        if (year > new Date().getFullYear() || year < 0) {
            yearError = 'Must be in the past';
            yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
            yearLable.style.color = 'hsl(0, 100%, 67%)';
        }
    }

    if (month === 2 && day > 29) {
        dayError = 'Must be a valid date';
        dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
        dayLable.style.color = 'hsl(0, 100%, 67%)';
        monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
        monthLable.style.color = 'hsl(0, 100%, 67%)';
        yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
        yearLable.style.color = 'hsl(0, 100%, 67%)';
    }
    if (((month === 4 || month === 6 || month === 9 || month === 11) && day > 30)) {
        dayError = 'Must be a valid date';
        dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
        dayLable.style.color = 'hsl(0, 100%, 67%)';
        monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
        monthLable.style.color = 'hsl(0, 100%, 67%)';
        yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
        yearLable.style.color = 'hsl(0, 100%, 67%)';
    }

    document.getElementById('dError').innerText = dayError;
    document.getElementById('mError').innerText = monthError;
    document.getElementById('yError').innerText = yearError;

    if (dayError || monthError || yearError) {
        return;
    }
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }
    if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
        days = lastMonth.getDate() - day + today.getDate();
        months--;
    }


    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    dayIn.style.borderColor = 'hsl(0, 1%, 44%)';
    dayLable.style.color = 'hsl(0, 1%, 44%)';
    monthIn.style.borderColor = 'hsl(0, 1%, 44%)';
    monthLable.style.color = 'hsl(0, 1%, 44%)';
    yearIn.style.borderColor = 'hsl(0, 1%, 44%)';
    yearLable.style.color = 'hsl(0, 1%, 44%)';
});
