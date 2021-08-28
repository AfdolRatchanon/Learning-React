//ANCHOR ทำงานกับ String

// NOTE Mutiline
// const address = `ชื่อลูกค้า : รัชชานนท์
// ที่อยู่ : Bangkok
// เบอร์โทรศัพท์ : 0846350728`;

// NOTE แทรกตัวแปร

let cusname = "ภาษาไทย";
let add = "Bangkok";
let tel = "084-635-xxxx";

const address = `ชื่อลูกค้า : ${cusname}
ที่อยู่ : ${add}
เบอร์โทรศัพท์ : ${tel}`;

console.log(address);
