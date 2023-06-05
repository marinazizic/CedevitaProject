import './css/Footer.css';
import LogoF from './imgs/logo-footer.png';
import Instagram from './imgs/instagram.svg';
import Facebook from './imgs/facebook.svg';
import YouTube from './imgs/youtube.svg';

function Footer() {
    return (
        <div className="Footer">
            <div className='motto'>
                <h2>Ako te netko za zdravlje pita reci samo Cedevita</h2>
            </div>
            <hr />
            <div className='footerGrid'>
                <div className='socials'>
                    <img src={LogoF} alt="Logo"></img>
                    <div className='medias'>
                        <a href="https://instagram.com">
                            <img src={Instagram} alt="Instagram"></img>
                        </a>
                        <a href="https://facebook.com">
                            <img src={Facebook} alt="Facebook"></img>
                        </a>
                        <a href="https://youtube.com">
                            <img src={YouTube} alt="YouTube"></img>
                        </a>
                    </div>
                    <button>Kontaktiraj nas</button>
                </div>
                <div className='about'>
                    <ul>
                        <li><a href="#about">Općenito</a></li>
                        <li><a href="#proizvodi">Proizvodi</a></li>
                        <li>Novosti</li>
                        <li>Pravila privatnosti</li>
                    </ul>
                    <ul>
                        <li><a href='#giveaway'>Nagrade</a></li>
                        <li>Postavke kolačića</li>
                        <li>Pridruži nam se</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
                <div className='us'>
                    <p>Naš cilj je stvoriti proizvode koji nadmašuju očekivanja, inspiriraju ljude i pružaju trenutke užitka u svakoj čaši. Cedevita je više od samo napitka - ona je stil života, izvor energije i pouzdan partner za sve one koji žele osvježiti svoje tijelo i duh.</p>
                    <p>Copyright - sva prava pridržana 2023.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;