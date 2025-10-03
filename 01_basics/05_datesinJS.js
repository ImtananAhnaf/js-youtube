let myDate = new Date()
console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toLocaleString());

let d =  new Date()
console.log(d.toDateString());//shows date only (no time)
console.log(d.toISOString());//to ISO standard (used in APIs and databses)
console.log(d.toJSON());//same as ISO but used when want to convert an object into JSON
console.log(d.toLocaleDateString());

