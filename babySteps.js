var x = 0;
 process.argv.forEach( function(e, i) {
 if (1 < i) {
 x += +e;
 }
 });
 console.log(x);