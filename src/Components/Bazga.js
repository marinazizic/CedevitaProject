import './css/CedevitaProducts.css';
import BazgaImg from './imgs/bazga.png';

function Bazga({BazgaProizvod}) {
    return (
        <div className="Bazga">
            <img src={BazgaImg} alt="Cedevita od bazge"></img>
            <div class="text">
                <p>Okus: {BazgaProizvod.okus}</p>
                <p>Kalorije: {BazgaProizvod.kalorije}</p>
                <p>Rok trajanja: {BazgaProizvod.rokTrajanja}</p>
                <p>Količina: {BazgaProizvod.kolicina}</p>
            </div>
        </div>
    );
}

export default Bazga;