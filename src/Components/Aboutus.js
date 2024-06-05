import './css/Aboutus.css';
import JuiceImg from './imgs/bg-img.jpg';
//test
function Aboutus() {
    return (
        <div className="Aboutus" id="about">
            <div className='about-grid'>
                <div className='left-side'>
                    <p className='captions'>generacija ce</p>
                    <h1 className='black-heading'>O nama</h1>
                    <p>Ono što čini Cedevitu posebnom je njen bogat sadržaj vitamina. Ovaj napitak je izvor vitamina C, B kompleksa i drugih važnih hranjivih tvari. Također je niskokaloričan, što ga čini privlačnim izborom za ljude koji žele održavati zdravu prehranu. Cedevita je također simbol uživanja i trenutaka opuštanja. Bez obzira jeste li u potrazi za energijom ujutro ili želite osvježiti se nakon tjelesne aktivnosti, Cedevita će vam pružiti trenutke zadovoljstva i osvježenja.</p>
                </div>
                <div className='right-side'>
                    <img src={JuiceImg} className='right-img' alt="Pozadina"></img>
                </div>
            </div>
            <div className='spacer'></div>
        </div>
    );
}

export default Aboutus;