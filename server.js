var user = require('./user');

var vas = new user.User("Вася");
var pet = new user.User("Петя");

vas.hello(pet);

