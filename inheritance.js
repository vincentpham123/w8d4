Function.prototype.inherits = function(parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype; // bio passed to surrogate proto
    this.prototype = new Surrogate() // child set to instance 
    this.prototype.constructor = this;
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

Child.inherits(Parent);

const test2 = new Child('Anyting', 10);
test2.bio()

console.log(test2.__proto__.__proto__.__proto__);