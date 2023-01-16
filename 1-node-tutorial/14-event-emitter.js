// Event-driven Programming : the flow of the program is at least in part determined by the events that occur when a program is executed

const EventEmitter = require('events'); // call the class EventEmitter from events module

const customEmitter = new EventEmitter(); // create a instance of the class EventEmitter

customEmitter.on('response', (name,id) => { //listen to an event. the name of the evnt is 'response'
    console.log(`Data received ${name} with ${id}`);
});

customEmitter.on('response', () => {
    console.log(`some other logic here`);
});

customEmitter.emit('response','john',34); // emit an event
// I can pass arguments of the callback function of .on method in the emit method
// the order is important : we first listen to the event and only then we emit it