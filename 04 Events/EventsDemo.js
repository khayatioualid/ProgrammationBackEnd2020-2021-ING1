var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var EventHandler1 = function () {
  console.log("I'm EventHandler1 and i hear a scream!");
}
//Create an event handler:
var EventHandler2 = function () {
    console.log("I'm EventHandler2 and i hear a scream!");
  }
//Create an event handler:
var EventHandler3 = function () {
  console.log("I'm EventHandler3 and i hear a song!");
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', EventHandler1);
eventEmitter.on('scream', EventHandler2);
eventEmitter.on('song', EventHandler3);

//Fire the 'scream' event:
eventEmitter.emit('scream');
eventEmitter.emit('song');