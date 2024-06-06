import "./css/NarancaPg.css";
import Cover from "./Cover";
import Newsletter from "./Newsletter";
import LimProduct from "./LimProduct";

function LimunPg() {
  return (
    <div className="LimunPg">
      <Cover></Cover>
      <LimProduct></LimProduct>
      <Newsletter></Newsletter>
    </div>
  );
}

export default LimunPg;
