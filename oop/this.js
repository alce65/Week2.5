/* eslint-disable new-cap */
/* eslint-disable no-new */
// Patrones de ejecución

function foo() {
  console.log(this);
}

// Function pattern

foo();

// Method pattern

const obj1 = {
  name: 'Obj1',
};

obj1.bar = foo;
obj1.bar();

// Constructor pattern

new foo();

// Apply pattern

const obj2 = {
  name: 'Obj2',
};

foo.apply(obj2);

const arrow = () => {
  console.log(this);
};

arrow();
obj1.bar2 = arrow;
obj1.bar2();
new arrow();
