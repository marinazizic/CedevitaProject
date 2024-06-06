import "./css/Cover.css";
import BazgaLik from "./imgs/bazga-lik.png";

function Cover() {
  return (
    <div className="Cover">
      <div className="headings">
        <h1 className="white-heading">
          Cedevita <span>-</span> Budi CE
        </h1>
        <p>
          Pozitivna energija kreće od svakog od nas, a mi je širimo već 50
          godina.
        </p>
        <button className="cover-button">
          <a href="#FindMore">Saznaj više</a>
        </button>
      </div>
      <img src={BazgaLik} className="BazgaImg" alt="Bazga lik"></img>
    </div>
  );
}

export default Cover;
