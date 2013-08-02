function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log("hi, "+ who.name) ;

}
var vas = new User("Вася");
var pet = new User("Петя");

vas.hello(pet);

