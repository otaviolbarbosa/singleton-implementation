function StateSingleton() {
  if (StateSingleton.instance) {
    return StateSingleton.instance;
  }
    
  this.state = {};

  this.set = function(prop, value) {
    this.state[prop] = value;
  }

  this.get = function(prop) {
    return this.state[prop];
  }

  StateSingleton.instance = this;
}

const state1 = new StateSingleton();
const state2 = new StateSingleton();

console.log(state1 === state2); // return true

state1.set('name', 'Otavio Barbosa');

console.log(state1.get('name')); // return Otavio Barbosa
console.log(state2.get('name')); // return Otavio Barbosa
