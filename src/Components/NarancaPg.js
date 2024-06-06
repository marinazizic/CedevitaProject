import "./css/NarancaPg.css";
import Cover from "./Cover";
import Newsletter from "./Newsletter";
import NarProduct from "./NarProduct";

function NarancaPg() {
  return (
    <div className="NarancaPg">
      <Cover></Cover>
      <NarProduct></NarProduct>
      <Newsletter></Newsletter>
    </div>
  );
}

export default NarancaPg;
