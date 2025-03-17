"using strict";

/*
    HTML5 and CSS3
    Final Project 1 of 3

    About Skylar Hight

    Starting Date: 04/29/2044
*/
/* Execute the function to run and display the countdown clock */
runClock();
setInterval(runClock, 1000); // Use the function reference directly

/* Function to create and run the countdown clock */
function runClock() {
    /* Store the current date */
    var currentDay = new Date();

    /* Calculate the days left until June 27th */
    var targetDate = new Date(currentDay.getFullYear(), 5, 27);
    var difference = targetDate - currentDay;
    var daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

    /* Calculate the hours left in the current day */
    var hrsLeft = (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);

    /* Calculate the minutes and seconds left in the current hour */
    var minsLeft = (hrsLeft % 1) * 60;
    var secsLeft = (minsLeft % 1) * 60;

    /* Display the time left until June 27th */
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hours").textContent = Math.floor(hrsLeft);
    document.getElementById("minutes").textContent = Math.floor(minsLeft);
    document.getElementById("seconds").textContent = Math.floor(secsLeft);
}
