"use strict";
/* 
    HTML5 and CSS3
    Final Project 1 of 3

    About Skylar Hight

    Starting Date: 05/02/2024
*/
// script for opening a popup window
function openPopup(popupId) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(popupId).style.display = 'block';
}

// script for closing a popup window
function closePopup(popupId) {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById(popupId).style.display = 'none';
}
