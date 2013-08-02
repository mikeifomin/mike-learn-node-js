var private = "W";
var phrase = require("./ru")

function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log(phrase.hello+ who.name);
}


console.log("user,js is loaded");

exports.User = User