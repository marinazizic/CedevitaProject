import './css/CedevitaProducts.css';
import BazgaImg from './imgs/bazga.png';
import LimunImg from './imgs/limun.png';
import NarancaImg from './imgs/naranca.png';

function Limun({LimunProizvod}) {
    return (
        <div className="Limun">
            <img src={LimunImg}></img>
            <div class="text">
                <p>Okus: {LimunProizvod.okus}</p>
                <p>Kalorije: {LimunProizvod.kalorije}</p>
                <p>Rok trajanja: {LimunProizvod.rokTrajanja}</p>
                <p>Količina: {LimunProizvod.kolicina}</p>
            </div>
        </div>
    );
}

export default Limun;