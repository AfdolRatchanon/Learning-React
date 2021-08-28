//ANCHOR Array Map
//NOTE นำข้อมูลใน Array มา Map ค่า
const number = [10, 20, 30, 40, 50];
/*const result = number.map((element) => {
   return element * 2;
});*/
const result = number.map((element) => element * element);
console.log(result);

const data = ["ฝนตก", "แดดออก", "ฝ้นผ้าคะนอง", "อากาศดี", "หมอกลง"];
const day = data.map((e, i) => {
   return "วันที่ " + i + " " + e;
});
console.log(day);

const data2 = [
   { data: "01/06/2564", weather: "แดดร้อน", temp: 27 },
   { data: "02/06/2564", weather: "ฝนตก", temp: 27 },
   { data: "03/06/2564", weather: "หมอกจัด", temp: 27 },
];
const day1 = data2.map((e) => e.data);
console.log(day1);
