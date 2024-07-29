const { strictCommands } = require("yargs");
const Command = require("./command.js")
const Message = require("./message.js")

class Rover {
   constructor(position){
      this.position = "position";
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
   receiveMessage = function(message){
      let results = [];
      let roverStatus;
      for(let i = 0; i < message.commands.length; i++)
      {
         let command = message.commands[i];
         if(command.commandType == "STATUS_CHECK")
         {
            // console.log(1);
            results.push({completed: true, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}});
         }
         if(command.commandType == "MODE_CHANGE")
         {
            // console.log(2);
            this.mode = command.value;
            results.push({completed: true, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}});
         }
         if(command.commandType == "MOVE")
         {
            // console.log(3)
            if(this.mode == "LOW_POWER")
            {
               results.push({completed: false, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}})
            }
            else
            {
               // console.log(4);
               this.position = command.value;
               results.push({completed: true, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}})
            }
         }
      }
   return {
      message: message.name,
      results: results
      
   }
   
      // let resourceLimits = "";   
      // return resourceLimits;
   }
}
//TEST 9
//"response returned by receiveMessage includes two results if two commands are sent in the message", function(){
   // let rover = new Rover(83748);
   // let modeChange = new Command("MODE_CHANGE", "LOW_POWER")
   // let move = new Command("MOVE", 84784);
   // let commands = [modeChange, move];
   // let message = new Message("Mode change + move", commands)
   // let names = rover.receiveMessage(message);
   
// TEST 12
// let move = new Command("MOVE", 98482);
// let rover = new Rover(38494)
// let lowPower = new Command("CHANGE_MODE", "LOW_POWER");
// let commands = [lowPower, move];
// let message = new Message("CHANGE + MOVE", commands);
// let names = rover.receiveMessage(message);
// console.log(names.results);
// let rover = new Rover(983382);
// let run = [new Command('STATUS_CHECK')];
// let commands = {run};
// console.log(commands.commandType)
// console.log("-----")
// let message1 = new Message("Perform Status Check", commands)
// let names = rover.receiveMessage(message1);
// for (let item in names.results)
// {
//    console.log(names[0])
// }
// console.log(names.results[0].commandType);

//Test 11

// let rover = new Rover(98382);
//     let modeChange = new Command("MODE_CHANGE", "LOW_POWER");
//     let commands = [modeChange];
//     let message = new Message("Mode Change", commands);
//     let names = rover.receiveMessage(message);
//     console.log(names.results[0].roverStatus.mode);
    


//TEST 10 --RESPONDS CORRECTLY TO THE STATUS CHECK COMMAND
// let statusCheck = new Command("STATUS_CHECK")
// let commands = [statusCheck];
// let message = new Message('RESPONDS CORRECTLY TO THE STATUS CHECK COMMAND', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// console.log("------")
// let response = rover.receiveMessage(message);
// console.log(response.results[0].roverStatus.mode)

//TEST 13 --responds with the position for the move command
// let rover = new Rover(98382);
// let move = new Command("MOVE", 98482);
// let commands = [move];
// let message = new Message("MOVE", commands);
// let names = rover.receiveMessage(message);
// console.log(move.value);
// console.log(rover.position);

// {
//    console.log(item);
// }

// for(let item in response.results)
// {
//    console.log(item);
// }
// console.log(response.results[0].completed);

module.exports = Rover;

// const { strictCommands } = require("yargs");
// const Command = require("./command.js");
// const Message = require("./message.js");

// class Rover {
//    constructor(position) {
//       this.position = position;
//       this.mode = 'NORMAL';
//       this.generatorWatts = "110";
//    }

//    receiveMessage(message) {
//       let results = [];
//       for (let i = 0; i < message.commands.length; i++) {
//          let command = message.commands[i];
//          if (command.commandType === "STATUS_CHECK") {
//             console.log(1);
//             results.push({completed: true});
//             results.push({completed: true, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}});
//          } else if (command.commandType === "MODE_CHANGE") {
//             console.log(2);
//             this.mode = command.value;
//             results.push({completed: true, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}});
//          } else if (command.commandType === "MOVE") {
//             console.log(3);
//             if (this.mode === "LOW_POWER") {
//                results.push({completed: false, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}});
//             } else {
//                console.log(4);
//                this.position = command.value;
//                results.push({completed: true, roverStatus: {position: this.position, mode: this.mode, generatorWatts: this.generatorWatts}});
//             }
//          } else {
//             console.log(5);
//             results.push({completed: false, commandType: command.commandType});
//          }
//       }
      
//       return {
//          message: message.name,
//          results: results
//       };
//    }
// }

// // TEST 12
// let move = new Command("MOVE", 98482);
// let rover = new Rover(38494);
// let lowPower = new Command("MODE_CHANGE", "LOW_POWER");
// let commands = [lowPower, move];
// let message = new Message("CHANGE + MOVE", commands);
// let names = rover.receiveMessage(message);
// console.log(names.results);

// module.exports = Rover;
