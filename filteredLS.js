var fs = require('fs');
var path = require('path');
var file = fs.readdir(process.argv[2], function (err, list) {
 if (!err) {
 list.forEach( function(file, i){
 if (path.extname(file) === '.' + process.argv[3]) {
 console.log(file);
 }
 });
 }
});