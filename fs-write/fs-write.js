'use strict';

var fs = require("fs");

var data = {
  fName: "This",
  mName: "Is",
  lName: "A",
  age: "Test"
}

fs.writeFile("dataWrite.json", JSON.stringify(data), (err) => {
  console.log('write finished',err);
});
