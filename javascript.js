var date = $('#currentDay');
var eventDetails = $('#event');
var saveButton = $('.saveBtn');
var first = $('9am');

//DATE
function showDate() {
    var currentDay = moment().format('dddd MMMM Do');
    date.text(currentDay);
}

setInterval(showDate, 0);

//SAVE EVENT TO LOCAL STORAGE
saveButton.on('click', function(event) {

    event.preventDefault();

    var thingOne = {
        comment: eventDetails.val()
    }
    console.log(thingOne);

    localStorage.setItem('9am', JSON.stringify(thingOne));
    
    window.alert('Event has been saved to local storage');
    getNine();
});

