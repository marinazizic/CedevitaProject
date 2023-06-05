import './css/Products.css';
import Naranca from './Naranca.js';
import Limun from './Limun.js';
import Bazga from './Bazga.js';

function Products() {
    return (
        <div className="Products">
            <div className='CedevitaaProducts'>
                <Naranca className="Naranca"></Naranca>
                <Limun className="Limun"></Limun>
                <Bazga className="Bazga"></Bazga>
            </div>
        </div>
    );
}

export default Products;