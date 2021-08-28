//join , concat
const data = [100, 200, 300];
//NOTE join คือ แปลง Array เป็น String โครงสร้างของ Array ยังเป็นเหมือนเดิม
const result = data.join();

console.log(data);
console.log(data.join("|")); //ในฟังชั่น join ใส่ตัวขั้นระหว่างข้อมูล
console.log(result);

//NOTE concat เป็นฟังชั่นที่รวมข้อมูลในอาเรย์เข้าไว้ด้วยกัน
const data1 = [100, 200, 300];
const data2 = [400, 500];
const alldata = data1.concat(data2);

console.log(alldata);
