//ANCHOR Default Parameter
getDataCustomer = (custName = "Rs", custAdd = "กทม.") => {
   //NOTE สมัยก่อน
   //    if (!custName) custName = "RS";
   //    if (!custAdd) custAdd = "กทม.";

   const address = `ชื่อลูกค้า : ${custName}
ที่อยู่ : ${custAdd}`;
   return address;
};

console.log(getDataCustomer("รัชชานนท์", "กรุงเทพ"));
console.log(getDataCustomer("รัชชานนท์"));
