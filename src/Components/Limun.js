import './css/CedevitaProducts.css';
import LimunImg from './imgs/limun.png';

function Limun({LimunProizvod}) {
    return (
        <div className="Limun">
            <img src={LimunImg} alt="Cedevita od limuna"></img>
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