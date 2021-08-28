//ANCHOR Destructuring

//NOTE Array
const color = ["ขาว", "แดง"];
//REVIEW แบบเดิม

// const white = color[0];
// const red = color[1];

//REVIEW แบบลดการเขียน

const [white, red] = color;
const [, red2] = color;

console.log("-----------Array--------------");

console.log(white);
console.log(red);
console.log(red2);

//NOTE Object
const product = {
   productName: "คอมพิวเตอร์",
   price: 3000,
   stock: 10,
};
//REVIEW แบบเดิม
/*
const productname = product.productName;
const price = product.price;
const stock = product.stock;
*/
//

//  const { productName: productName, price: price, stock: stock } = product;
// FIXME ชื่อตัวแปรและ Property เหมือนกัน
const { productName, price, stock } = product;
console.log("-----------Object--------------");

console.log(productName);
console.log(price);
console.log(stock);
