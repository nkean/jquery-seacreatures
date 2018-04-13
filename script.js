console.log('Javascript works!');

let clickCounter = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery works!');
    $('#countUpButton').click( clickHandler );
}

function clickHandler() {
    console.log('countUpButton was clicked!');
    clickCounter += 1;
    $('#clickCount').text(clickCounter);
}