import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Thanks from "./components/Thanks/Thanks";

function App() {
  const [showThank, setShowThank] = useState(false);
  const [rating, setRating] = useState(null);

  return (
    <>
      {showThank ? (
        <Thanks rating={rating} />
      ) : (
        <Rating
          rating={rating}
          setRating={setRating}
          setShowThank={setShowThank}
        />
      )}
    </>
  );
}

export default App;
