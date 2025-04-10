import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/quotes")
      .then((res) => {
        setQuotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>SHIVSHANKAR</h1>
      <p>Jokes: {quotes.length}</p>

      {quotes.map((quote, index) => (
        <div key={quote.id}>
          <h3>{quote.title}</h3>
          <p>{quote.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
