//ANCHOR push,pop,shift,unshift
//NOTE push เพิ่มต่อท้ายสมาชิกใน Array
const data = [10, 20, 30];
console.log(data);
data.push(40);
data.push(...[50, 60, 70]);
data.push([80, 90]);
console.log(data);
//NOTE pop นำเอาสมาชิกตัวท้ายสุดออกมาจาก Array
data.pop();
console.log(data);
data.pop();
console.log(data);
//NOTE shift นำข้อมูลใน Array ตัวแรกออกไป
data.shift();
console.log(data);
//NOTE unshift เพิ่ิมข้อมูลสมาชิก Array โดยแทรกอยู่ด้านหน้า
data.unshift(10);
console.log(data);
