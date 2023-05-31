import './css/Homepage.css';
import Cover from './Cover';
import Aboutus from './Aboutus';
import Giveaway from './Giveaway';

function Homepage() {
  return (
    <div className="Homepage">
      <Cover></Cover>
      <Aboutus></Aboutus>
      <Giveaway></Giveaway>
    </div>
  );
}

export default Homepage;