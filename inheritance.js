Function.prototype.inherits = function(parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype.constructor = this;
    this.prototype = new Surrogate()
}

function Parent(name, age) {
    this.name = name;
    this.age = age; 
}

Parent.prototype.bio = function() {
    console.log(this.name +' '+ this.age);
}
const test = new Parent('Bob', 50);
test.bio();

function Child(name, age) {
    Parent.call(this, name, age);
}

Child.inherits(Parent)
const test2 = new Child('Anyting', 10);
test2.bio()

console.log(Child.prototype.constructor);