var date = $('#currentDay');

function showDate() {
    var currentDay = moment().format('dddd MMMM Do');
    date.text(currentDay);
}

setInterval(showDate, 0);