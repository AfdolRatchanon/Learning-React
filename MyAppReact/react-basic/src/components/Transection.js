import Item from "./Item";
import "./Transection.css";
import { v4 as uuidv4 } from "uuid";

const Transection = () => {
   const data = [
      { title: "ค่าอาหาร", amount: 500 },
      { title: "ค่าเดินทาง", amount: 200 },
      { title: "เงินเดือน", amount: 50000 },
      { title: "ค่าเช่าบ้าน", amount: 8000 },
      { title: "ค่าขนม", amount: 300 },
      { title: "ค่าขนม", amount: 30 },
   ];

   return (
      <ul className="Item-List">
         {data.map((element) => {
            //NOTE แบบธรรมดา
            return <Item title={element.title} amount={element.amount} key={uuidv4()} />;
            //NOTE แบบลดรูปที่มีชื่อที่เหมือนกัน
            //return <Item {...element} key={uuidv4()} />;
         })}
      </ul>
   );
};

export default Transection;
