import "./css/BazProduct.css";
import Bazga from "./imgs/bazga.png";
import React, { useState, useEffect } from "react";

function BazProduct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("Reviews updated:", reviews);
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
    <div className="BazProduct">
      <div className="product">
        <div className="imgbaz">
          <img src={Bazga} alt="" />
        </div>
        <div className="cont">
          <div className="txt">
            <h2 className="captions">Okus</h2>
            <h1>Bazga</h1>
            <p>Dostupna u 500g, 1kg</p>
            <p id="para">
              Blag i slatkast okus bazge, tako poznat iz sunčanih dana našeg
              djetinjstva, uz resku notu limuna i uz izvor vitamina, kao da
              poziva na uživanje u prirodi ili na terasi kafića.
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

export default BazProduct;
