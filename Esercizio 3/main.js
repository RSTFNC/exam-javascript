const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  };
  
  // Aggiungo una nuova proprietà "rating" e la inizializzo a 6
  book.rating = 6;
  
  // Aggiungo un metodo "increaseRating" per incrementare il rating (non superiore a 10)
  book.increaseRating = function (increase) {
    this.rating += increase;
  
    // Imposto il valore massimo di rating a 10
    this.rating = Math.min(this.rating, 10);   
  };
  book.increaseRating(9);

  // Rimuovo la proprietà "year" dall'oggetto book
  delete book.year;
  
  // Stampo in console ogni proprietà dell'oggetto book
  for (let key in book) {
    if (key !== "increaseRating") {
      console.log(`${key}: ${book[key]}`);
    }
  }
  
  