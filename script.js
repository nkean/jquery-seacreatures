console.log('Javascript works!');

let clickCounter = 0;

$(document).ready(onReady);

function onReady() {
    console.log('jQuery works!');
    $('#countUpButton').click( clickHandler );
    updateDomCount();
}

function clickHandler() {
    console.log('countUpButton was clicked!');
    clickCounter++;
    console.log(clickCounter);
    updateDomCount();
    addNewCreature();
    clearInputs();
}

function updateDomCount () {
    $('#clickCount').text('Sea Creature Count: ' + clickCounter);
}

function addNewCreature () {
    // output to table

    let creatureNameData = '<td>' + $('#newCreatureName').val() + '</td>';
    let creatureSizeData = '<td>' + $('#newCreatureSize').val() + ' ft</td>';
    let creatureTypeData = '<td>' + $('#newCreatureType').val() + '</td>';
    let creatureSpeedData = '<td>' + $('#newCreatureSpeed').val() + ' mph</td>';

    $('#creatureList').prepend('<tr>' + creatureNameData + creatureSizeData + creatureTypeData + creatureSpeedData + '</tr>')
}

function clearInputs () {
    $('#newCreatureName').clear();
    $('#newCreatureSize').clear();
    $('#newCreatureType').clear();
    $('#newCreatureSpeed').clear();
}