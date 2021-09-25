var date = $('#currentDay');
var eventDetails = $('#event');
var saveButton = $('.saveBtn');
var eventTwo = $('#event2');
var eventThree = $('#event3');
var eventFour = $('#event4');
var eventFive = $('#event5');
var eventSix = $('#event6');
var eventSeven = $('#event7');
var eventEight = $('#event8');
var eventNine = $('#event9');
var eventTen = $('#event2');
//DATE
function showDate() {
    var currentDay = moment().format('dddd MMMM Do');
    date.text(currentDay);
}

setInterval(showDate, 0);

function getList() {
    var retrievedObject = JSON.parse(localStorage.getItem('events'));
}

getList();

//SAVE EVENT TO LOCAL STORAGE
saveButton.on('click', function(event) {

    event.preventDefault();

    let toDoList = [];

    var thingOne = {
        comment: eventDetails.val()
    }
    toDoList.push(thingOne);

    var time2 = {
        comment: eventTwo.val()
    }
    toDoList.push(time2);

    var time3 = {
        comment: eventThree.val()
    }
    toDoList.push(time3);
    
    var time4 = {
        comment: eventFour.val()
    }
    toDoList.push(time4);

    var time5 = {
        comment: eventFive.val()
    }
    toDoList.push(time5);

    var time6 = {
        comment: eventSix.val()
    }
    toDoList.push(time6);

    var time7 = {
        comment: eventSeven.val()
    }
    toDoList.push(time7);

    var time8 = {
        comment: eventEight.val()
    }
    toDoList.push(time8);

    var time9 = {
        comment: eventNine.val()
    }
    toDoList.push(time9);

    var myJSON = JSON.stringify(toDoList);

    localStorage.setItem('events', myJSON);
    
    window.alert('Event has been saved to local storage');
});

