'use strict';
// command to read mac users directory;
var fs = require("fs");

fs.readdir('/users', (err,data) => {
    console.log(data);
})

// command to read windows c drive;

fs.readdir('c:/', (err,data) => {
  console.log(data);
})
