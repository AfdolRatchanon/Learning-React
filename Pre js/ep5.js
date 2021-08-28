//ANCHOR Spread Operator

const newArr = [100, 200, 300];
//const data = [10, 20, newArr];
const data = [10, 20, ...newArr]; //กระจายตัวแปรอาเร newArr เข้ามาในตัวแปล data
const newdata = ["newdata"];
newdata.push(...data);
console.log(newdata);
console.log(newdata.length);
