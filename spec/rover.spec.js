const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  // TEST 7
  test("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover();
    let defaults;
    if (rover.position === "position" && rover.mode === "NORMAL" && rover.generatorWatts === 110)
    {
      defaults = true;
    }
    else {
      defaults = false;
    }
    expect(defaults).toBe(true);
  });

  // TEST 8
  test("response returned by receiveMessage contains the name of the message", function(){
    let rover = new Rover();
    let command = new Command("Order", "March")
    let message = new Message("Bobby", command)
    let name = rover.receiveMessage(message);
    expect(message.name).toBe("Bobby");
  });
  //TEST 9
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let rover = new Rover(384948);
    let modeChange = new Command("MODE_CHANGE", "LOW_POWER")
    let move = new Command("MOVE", 84784);
    let commands = [modeChange, move];
    let message = new Message("Bobby", commands)
    let names = rover.receiveMessage(message);
    expect(names.results.length).toBe(commands.length);
  });

  // TEST 10
  test("responds correctly to the status check command", function(){
    let rover = new Rover(98382);
    let statusCheck = new Command("STATUS_CHECK");
    let commands = [statusCheck];
    let message = new Message("bobby", commands);
    let names = rover.receiveMessage(message);
    expect(names.results[0].roverStatus.position).toBe(rover.position);
  });

  //TEST 11
  test("responds correctly to the mode change command", function(){
    let rover = new Rover(98382);
    let modeChange = new Command("MODE_CHANGE", "LOW_POWER");
    let commands = [modeChange];
    let message = new Message("Mode Change", commands);
    let names = rover.receiveMessage(message);
    // console.log(response.results[1].roverStatus.mode);
    expect(names.results[0].roverStatus.mode).toBe(rover.mode);
  });

  //TEST 12
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function(){
    let rover = new Rover(98382);
    let lowPower = new Command("MODE_CHANGE", "LOW_POWER");
    let move = new Command("MOVE", 98482);
    let commands = [lowPower, move];
    let message = new Message("CHANGE + MOVE", commands);
    let names = rover.receiveMessage(message);
    expect(names.results[1].completed).toBe(false);

  });

  //TEST 13
  test("responds with the position for the move command", function() {
    let rover = new Rover(98382);
    let move = new Command("MOVE", 98482);
    let commands = [move];
    let message = new Message("MOVE", commands);
    let names = rover.receiveMessage(message);
    expect(rover.position).toBe(move.value);


  });
    //command(commandType, value);
    //message(name, Object containg commands)
    //rover.receiveMessage(message)

    /*Command: A type of object containing a commandType property. commandType is one of the given strings in the table below. Some commandTypes are coupled with a value property, but not all. Every Command object is a single instruction to be delivered to the rover.
Message: A Message object has a name and contains several Command objects. Message is responsible for bundling the commands from mission control and delivering them to the rover.
Rover: An object representing the mars rover. This class contains information on the rover’s position, operating mode, and generatorWatts. It also contains a function, receiveMessage that handles the various types of commands it receives and updates the rover’s properties.*/
 
  // 7 tests here!

});
