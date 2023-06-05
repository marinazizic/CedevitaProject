import './css/CedevitaProducts.css';
import NarancaImg from './imgs/naranca.png';

function Naranca({ NarancaProizvod }) {
    return (
        <div className="Naranca">
            <img src={NarancaImg} alt="Cedevita od naranče"></img>
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