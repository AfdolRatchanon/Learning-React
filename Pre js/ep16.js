//ANCHOR Array Reduce ลดข้อมูลใน Array อาจนำมาแปลงค่าตอบกลับออกไป

const data = [10, 20, 30, 40];
const mapData = data.map((e) => 100);
const filterData = data.filter((e) => e > 20);
//NOTE Reduce
//array.reduce((ค่าที่ถูกประมวลผล Value,element)=>{},ค่าเริ่มต้นของ Value)//โครงสร้าง
const result = data.reduce((value, e) => {
   //console.log(e);
   //console.log(value);
   return e + value;
}, 0);

console.log(data);
console.log(mapData);
console.log(filterData);
console.log(result);

const cart = [
   { name: "กระเป๋า", price: 500 },
   { name: "หนังนสือ", price: 900 },
   { name: "กล้อง", price: 5000 },
];

const summation = cart.reduce((value, e) => e.price + value, 0);
console.log(summation);
