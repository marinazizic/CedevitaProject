import './css/CedevitaProducts.css';
import BazgaImg from './imgs/bazga.png';
import NarancaImg from './imgs/naranca.png';
import LimunImg from './imgs/limun.png';

function Naranca({ NarancaProizvod }) {
    return (
        <div className="Naranca">
            <img src={NarancaImg}></img>
            <div class="text">
                <p>Okus: {NarancaProizvod.okus}</p>
                <p>Kalorije: {NarancaProizvod.kalorije}</p>
                <p>Rok trajanja: {NarancaProizvod.rokTrajanja}</p>
                <p>Količina: {NarancaProizvod.kolicina}</p>
            </div>
        </div>
    );
}

export default Naranca;