// add this to use strict mode
"use strict";

x = 9; //this line will be error, it needs to declared first
tampilkanAngka(); //this line will be error, it needs to declared first

function tampilkanAngka() {
  var x = 9;
  console.log(x);
}

// so, there is no hoisting again