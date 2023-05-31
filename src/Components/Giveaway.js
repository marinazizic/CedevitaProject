import './css/Giveaway.css';
import Fico from './imgs/giveaway.png';

function Giveaway() {
    return (
        <div className="Giveaway">
            <div className='positioned'>
                <img src={Fico}></img>
                <button className='giveaway-button'><a href="#">Saznaj više</a></button>
            </div>

        </div>
    );
}

export default Giveaway;