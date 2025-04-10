import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("server bna diya bhai");
});

// quotes

app.get("/api/quotes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Life",
      content:
        "Life is what happens when you’re busy making other plans. — John Lennon",
    },
    {
      id: 2,
      title: "Success",
      content:
        "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
    },
    {
      id: 3,
      title: "Happiness",
      content: "Happiness depends upon ourselves. — Aristotle",
    },
    {
      id: 4,
      title: "Motivation",
      content:
        "The only way to do great work is to love what you do. — Steve Jobs",
    },
    {
      id: 5,
      title: "Perseverance",
      content:
        "It does not matter how slowly you go as long as you do not stop. — Confucius",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serving at http://localhost:${port}`);
});
