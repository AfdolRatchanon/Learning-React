import "./FormComponent.css";
const FormComponent = () => {
   const inputTitle = (event) => {
      console.log(event.target.value);
   };
   const inputAmount = (event) => {
      console.log(event.target.value);
   };
   const saveItem = (event) => {
      event.preventDefault();
      console.log("บันทึกข้อมูล");
   };
   return (
      <div>
         <form onSubmit={saveItem}>
            <div className="form-control">
               <label>ชื่อรายการ</label>
               <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} />
            </div>
            <div className="form-control">
               <label>จำนวนเงิน</label>
               <input type="number" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} />
            </div>
            <div>
               <button className="btn" type="submit">
                  เพิ่มข้อมูล
               </button>
            </div>
         </form>
      </div>
   );
};

export default FormComponent;
