//ANCHOR Loop
const data = [10, 20, 30, 40, 50];
//NOTE forLoop
for (let i = 0; i < data.length; i++) {
   console.log("forLoop " + i + " " + data[i]);
}

//NOTE forEach
data.forEach((element) => {
   console.log("forEach " + element);
});

//NOTE forOf
for (const element of data) {
   if (element >= 30) break; // กำหนดเงื่อนไขได้
   console.log("forOf : " + element);
}
