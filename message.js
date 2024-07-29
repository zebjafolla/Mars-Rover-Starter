const Command = require('./command.js')
class Message {
   constructor(name, commands){
      this.name = name
      if (typeof name != "string")
      {
         throw Error("Name must be a string in the first parameter.");
      }
      
      this.commands = commands;
   };
};
let command1 = new Command("move", "yell");
let command2 = new Command("hipcheck", "Punch");
let commands = [command1, command2];

let message = new Message("Move", commands);
// console.log(message.commands[0].commandType + message.commands[1].commandType);

      

   // Write code here!


module.exports = Message;