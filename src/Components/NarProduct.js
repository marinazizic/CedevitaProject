import "./css/NarProduct.css";
import Naranca from "./imgs/naranca.png";
import React, { useState, useEffect } from "react";

function NarProduct() {
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
    <div className="NarProduct">
      <div className="product">
        <div className="imgced">
          <img src={Naranca} alt="" />
        </div>
        <div className="cont">
          <div className="txt">
            <h2 className="captions">Okus</h2>
            <h1>Naranča</h1>
            <p>Dostupna u 500g, 1kg, 2kg</p>
            <p id="para">
              Već generacijama najpoznatiji, najtraženiji i omiljeni izvor
              vitamina s prirodnom aromom naranče, toliko popularan da je upravo
              zbog njega Cedevitin zaštitni znak narančaste boje. Svi će se
              složiti: Cedevita naranča je the Cedevita!
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

export default NarProduct;
