import "./css/NarancaPg.css";
import Cover from "./Cover";
import Newsletter from "./Newsletter";
import BazProduct from "./BazProduct";

function BazgaPg() {
  return (
    <div className="BazgaPg">
      <Cover></Cover>
      <BazProduct></BazProduct>
      <Newsletter></Newsletter>
    </div>
  );
}

export default BazgaPg;
