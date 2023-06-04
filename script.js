document.addEventListener("DOMContentLoaded", function () {
    // Array of quotes
    const quotes = [
      {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
      },
      {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
      },
      {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
      },
      {
        text: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
      },
      {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
      }
    ];
  
    // Get DOM elements
    const textElement = document.getElementById("text");
    const authorElement = document.getElementById("author");
    const newQuoteButton = document.getElementById("new-quote");
    const tweetQuoteButton = document.getElementById("tweet-quote");
  
    // Function to generate random quote
    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
  
    // Function to update quote
    function updateQuote() {
      const { text, author } = getRandomQuote();
      textElement.textContent = text;
      authorElement.textContent = author;
      tweetQuoteButton.setAttribute("href", `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" - ${author}`)}`);
    }
  
    // Event listener for new quote button
    newQuoteButton.addEventListener("click", updateQuote);
  
    // Initial quote
    updateQuote();
  });
  