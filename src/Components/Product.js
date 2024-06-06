import Limun from "./Limun.js";
import Bazga from "./Bazga.js";
import Naranca from "./Naranca.js";
import "./css/Product.css";

function Product() {
  let NarancaObj = {
    okus: "Naranča",
    kalorije: "70g na 100g",
    rokTrajanja: "2 godine",
    kolicina: "500g, 1kg, 2kg",
  };

  let LimunObj = {
    okus: "Limun",
    kalorije: "58g na 100g",
    rokTrajanja: "1 godina",
    kolicina: "500g, 1kg, 2kg",
  };

  let BazgaObj = {
    okus: "Bazga",
    kalorije: "66g na 100g",
    rokTrajanja: "2 godine",
    kolicina: "500g, 1kg",
  };

  return (
    <div className="Products" id="proizvodi">
      <div className="CedevitaaProducts">
        <a href="/NarancaPg" class="okusi">
          <Naranca NarancaProizvod={NarancaObj}></Naranca>
        </a>
        <a href="/LimunPg" class="okusi">
          <Limun LimunProizvod={LimunObj}></Limun>
        </a>
        <a href="/BazgaPg" class="okusi">
          <Bazga BazgaProizvod={BazgaObj}></Bazga>
        </a>
      </div>
    </div>
  );
}

export default Product;
