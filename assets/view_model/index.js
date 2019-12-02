'use strict';

import {timerValueElem, timerResetElem, timerStartElem, timerStopElem} from './controls.js'

const date = new Date();
date.setHours(0,0,0,0);

let intervalId = null;

timerStartElem.onclick = function () {
    if(intervalId){
        return;
    }
    intervalId = setInterval(incrementDateSecond,1000)
};

timerStopElem.onclick = function () {
    if(intervalId){
        clearInterval(intervalId);
        intervalId = null;
    }
};

function incrementDateSecond() {
    date.setSeconds(date.getSeconds() + 1);
    refreshTimerValue();
}

function refreshTimerValue() {
    timerValueElem.innerText = `${myFormat(date.getMinutes())}:${myFormat(date.getSeconds())}`
}

function myFormat(value) {
    return value < 10 ? `0${value}` : value;
}

refreshTimerValue();