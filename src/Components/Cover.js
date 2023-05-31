import './css/Cover.css';
import LimunLik from './imgs/limun-lik.png';

function Cover() {
    return (
        <div className="Cover">
            <div className='headings'>
                <h1 className='white-heading'>Cedevita <span>-</span> Budi CE</h1>
                <p>Pozitivna energija kreće od svakog od nas, a mi je širimo već 50 godina.</p>
                <button className='cover-button'><a href="#aboutus">Saznaj više</a></button>
            </div>
            <img src={LimunLik} className='LimunImg'></img>
        </div>
    );
}

export default Cover;