import './css/Homepage.css';
import Cover from './Cover';
import Aboutus from './Aboutus';
import Giveaway from './Giveaway';
import Product from './Product';
import Newsletter from './Newsletter';

function Homepage() {
  return (
    <div className="Homepage">
      <Cover></Cover>
      <Aboutus></Aboutus>
      <Giveaway></Giveaway>
      <Product></Product>
      <Newsletter></Newsletter>
    </div>
  );
}

export default Homepage;