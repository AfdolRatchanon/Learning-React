//import "./Item.css";
import PropTypes from "prop-types";

const Item = (props) => {
   const { title, amount } = props;
   /*const name = "พักโรงแรม";
   const amount = 5000;*/
   return (
      <li>
         {title} <span>{amount}</span>
      </li>
   );
};

Item.propTypes = {
   title: PropTypes.string.isRequired,
   amount: PropTypes.number.isRequired,
};

export default Item;
