import "./Rating.css";
import Card from "../Card/Card";
import starImg from "../../media/icon-star.svg";
import { useState } from "react";

function Rating({ rating, setRating, setShowThank }) {
  const [activeRatings, setActiveRatings] = useState({
    oneStart: false,
    twoStart: false,
    threeStart: false,
    fourStart: false,
    fiveStart: false,
  });

  const handleSubmit = () => {
    if (!rating) return;
    setShowThank(true);
    console.log("hi");
  };

  return (
    <Card>
      <div className="star_img_container">
        <img src={starImg} alt="star" />
      </div>
      <h2 className="title">How did we do?</h2>
      <p className="text">
        Please let us know how we did with your support request. appreciated to
        help us improve our offering!
      </p>
      <div className="rating">
        <div
          className={
            activeRatings.oneStart
              ? "rating_container active"
              : "rating_container"
          }
          onClick={() => {
            setActiveRatings({
              oneStart: true,
              twoStart: false,
              threeStart: false,
              fourStart: false,
              fiveStart: false,
            });
            setRating(1);
          }}
        >
          1
        </div>
        <div
          className={
            activeRatings.twoStart
              ? "rating_container active"
              : "rating_container"
          }
          onClick={() => {
            setActiveRatings({
              oneStart: false,
              twoStart: true,
              threeStart: false,
              fourStart: false,
              fiveStart: false,
            });
            setRating(2);
          }}
        >
          2
        </div>
        <div
          className={
            activeRatings.threeStart
              ? "rating_container active"
              : "rating_container"
          }
          onClick={() => {
            setActiveRatings({
              oneStart: false,
              twoStart: false,
              threeStart: true,
              fourStart: false,
              fiveStart: false,
            });
            setRating(3);
          }}
        >
          3
        </div>
        <div
          className={
            activeRatings.fourStart
              ? "rating_container active"
              : "rating_container"
          }
          onClick={() => {
            setActiveRatings({
              oneStart: false,
              twoStart: false,
              threeStart: false,
              fourStart: true,
              fiveStart: false,
            });
            setRating(4);
          }}
        >
          4
        </div>
        <div
          className={
            activeRatings.fiveStart
              ? "rating_container active"
              : "rating_container"
          }
          onClick={() => {
            setActiveRatings({
              oneStart: false,
              twoStart: false,
              threeStart: false,
              fourStart: false,
              fiveStart: true,
            });
            setRating(5);
          }}
        >
          5
        </div>
      </div>
      <button className="submit_btn" onClick={handleSubmit}>
        Submit
      </button>
    </Card>
  );
}

export default Rating;
