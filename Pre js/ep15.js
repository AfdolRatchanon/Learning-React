//ANCHOR Array Filter
//NOTE call back function , return สร้าง Array ใหม่
const data = [10, 20, 30, 40, 50];
const result = data.filter((e) => {
   return e > 20;
});
console.log(result);

const data1 = [
   { name: "ก้อง", salary: 25000, department: "โปรแกรมเมอร์" },
   { name: "โจโจ้", salary: 30000, department: "การตลาด" },
   { name: "นัท", salary: 10000, department: "ฝึกงาน" },
   { name: "เบล", salary: 50000, department: "การตลาด" },
   { name: "จอย", salary: 10000, department: "ฝึกงาน" },
];

const employee = data1.filter((e) => {
   return e.salary > 10000;
});
console.log(employee);
