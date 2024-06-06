import "./css/LimProduct.css";
import Limun from "./imgs/limun.png";
import React, { useState, useEffect } from "react";

function LimProduct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("Ažurirane recenzije:", reviews);
  }, [reviews]);

  const handleSubmit = () => {
    if (name && email && review) {
      const newReview = { name, email, review };
      setReviews([...reviews, newReview]);
      setName("");
      setEmail("");
      setReview("");
    } else {
      alert("Unesite sve podatke.");
    }
  };
  return (
    <div className="LimProduct">
      <div className="product">
        <div className="imglim">
          <img src={Limun} alt="" />
        </div>
        <div className="cont">
          <div className="txt">
            <h2 className="captions">Okus</h2>
            <h1>Limun</h1>
            <p>Dostupna u 500g, 1kg, 2kg</p>
            <p id="para">
              Dobro poznata kiselo - slatka kombinacija okusa Cedevite limun
              odličan je izbor, ali i sjajan, pouzdan izvor vitamina na koji se
              možete osloniti tijekom cijele godine.
            </p>
            <a href="#recenzije" id="napisi">
              Recenziraj
            </a>
          </div>
        </div>
      </div>
      <div id="recenzije">
        <div id="forma">
          <h2 className="captions">reci nam svoje misljenje</h2>
          <h1>Upisi recenziju</h1>
          <div className="upiti">
            <div>
              <input
                type="text"
                placeholder="Ime"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                value={review}
                placeholder="Vaša recenzija"
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleSubmit} id="posalji">
                Pošalji
              </button>
            </div>
          </div>
        </div>
        <div class="prikazrec">
          <h2 className="captions">tvoje misljenje</h2>
          <h1>Recenzije</h1>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <strong id="username">{review.name}</strong> ({review.email}):{" "}
                {review.review}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LimProduct;
