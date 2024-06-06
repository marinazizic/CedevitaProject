import "./css/Homepage.css";
import Cover from "./Cover";
import Aboutus from "./Aboutus";
import FindMore from "./FindMore";
import Product from "./Product";
import Newsletter from "./Newsletter";

function Homepage() {
  return (
    <div className="Homepage">
      <Cover></Cover>
      <FindMore></FindMore>
      <Aboutus></Aboutus>
      <Product></Product>
      <Newsletter></Newsletter>
    </div>
  );
}

export default Homepage;
