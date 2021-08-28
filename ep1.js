//Bolck Scope (let/Constant)
// NOTE การเขียนแบบเดิม

//var ใช้ได้เกินขอบเขต
/*var x = 10;

if (x === 10) {
   var y = 10;
   console.log("y  ใน = " + y);
}
console.log("y นอก = " + y);*/

// NOTE การเขียนแบบ let

let x = 10;
let y = 10;
if (x === 10) {
   let y = 100;
   console.log("y  ใน = " + y);
}
console.log("y นอก = " + y);
