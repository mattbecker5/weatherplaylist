//app state
let currentCalendar = {};
let smallCalendarCurrent = {};
let largeCalendarCurrent = {};
let events = {};

//creating calendar

let getDaysInMonth = function(month, year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year, month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
};


//creates a new calandar based on given month and year
function createMonthArray(month, year){
    let totalDays = getDaysInMonth(month, year);
    let d = new Date();
    let currentMonth = {};
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthLong = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    let monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    d.setFullYear(year);
    d.setMonth(month - 1);
    currentMonth = {"monthNum": month, "monthLong":monthLong[d.getMonth()], "monthShort": monthShort[d.getMonth()], "days":[], "year": year};
    for (let i = 0; i < totalDays; i++) {
        d.setDate(i+1);
        currentMonth.days.push({"date":i+1, "weekday": weekDays[d.getDay()]})
    };

    return currentMonth;
};

//the start of the app in time
currentCalendar = createMonthArray(3, 2020);
//console.log(currentCalendar);

//adding div elements to small calendar
function addElementsToCalendarSmall(month, year){
    let newCalendar = createMonthArray(month, year);
    let smallCal = $('.small-calendar');
    $('.create-event-header-month').html(`<h3>${newCalendar.monthLong} ${year}</h3>`)
    let numBufferDays = 0;

    //this is needed to put empty spaces in begging of each month
    if(newCalendar.days[0].weekday === "Monday"){
        numBufferDays = 1;
    };

    if(newCalendar.days[0].weekday === "Tuesday"){
        numBufferDays = 2;
    };

    if(newCalendar.days[0].weekday === "Wednesday"){
        numBufferDays = 3;
    };

    if(newCalendar.days[0].weekday === "Thursday"){
        numBufferDays = 4;
    };

    if(newCalendar.days[0].weekday === "Friday"){
        numBufferDays = 5;
    };

    if(newCalendar.days[0].weekday === "Saturday"){
        numBufferDays = 6;
    };

    for (let i = 0; i < numBufferDays; i++) {
        let button = $('<div>');
        smallCal.append(button);
        button.addClass('small-calendar-dates');
    };

    newCalendar.days.forEach(element => {
        let button = $('<div>');
        smallCal.append(button);
        button.addClass('small-calendar-dates');
        button.html(element.date);
        button.hover(function() {
            $(this).addClass( "small-calendar-hover" );
          }, function() {
            $(this).removeClass( "small-calendar-hover" );
          }
        );
        button.click(function() {
            alert( "Today is " + element.weekday);
        });
    });
};

addElementsToCalendarSmall(currentCalendar.monthNum,  currentCalendar.year);

//adding div elements to large calendar
function addElementsToCalendarLarge(month, year){
    let newCalendar = createMonthArray(month, year);
    let largeCal = $('.large-calendar');
    let header = $('.large-calendar-header');
    header.html(`<h2><i class="far fa-calendar-alt"></i> ${newCalendar.monthLong}, ${year}</h2>`);
    newCalendar.days.forEach(element => {
        let button = $('<div>');
        largeCal.append(button);
        button.addClass('large-calendar-day');
        button.html(element.date);
        button.hover(function() {
            $(this).addClass( "large-calendar-hover" );
          }, function() {
            $(this).removeClass( "large-calendar-hover" );
          }
        );
        button.click(function() {
            alert( "Today is " + element.weekday);
        });
    });
};

addElementsToCalendarLarge(currentCalendar.monthNum,  currentCalendar.year);

//small calendar buttons
$('.create-event-header-previous').click(() => {
    $('.small-calendar-dates').remove();
    let month = currentCalendar.monthNum;
    let year = currentCalendar.year;
    if(currentCalendar.monthNum === 1){
        month = 12;
        year = currentCalendar.year - 1;
    } else {
        month = currentCalendar.monthNum - 1;
    };

    addElementsToCalendarSmall(month, year);
    currentCalendar = createMonthArray(month, year);
});

$('#create-event-submit-btn').click(() => {
    alert("submot");
});
