//ANCHOR ค้นข้อมูลใน Array
const color = ["RED", "GREEN", "BLUE", "BLACK", "WHITE"];
//NOTE indexOf(ข้อมูล)=> ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
console.log("indexOf " + color.indexOf("RED"));
console.log("indexOf " + color.indexOf("Yellow"));
//NOTE find(ข้อมูล)=> ผลการค้นหาจะได้ข้อมูลที่ค้น ถ้าไม่เจอจะได้ underfinde
console.log("find " + color.find((element) => element === "RED"));
console.log("find " + color.find((element) => element === "Yellow"));
//NOTE findIndex(ข้อมูล)=> ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
console.log("findIndex " + color.findIndex((element) => element === "RED"));
console.log("findIndex " + color.findIndex((element) => element === "Yellow"));
