var private = "W";

function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("hi, "+ who.name) ;

}


console.log("user,js is loaded")

exports.User = User