function power (base, exponent) {

    // Verifico se entrambi i parametri sono numeri
    if (typeof base !== 'number' && typeof exponent !== 'number') {
      console.error("Errore: Entrambi i valori non sono numeri.");
      return null;
    } else if (typeof base !== 'number') {
      console.error("Errore: la base non è un numero.");
      return null;
    } else if (typeof exponent !== 'number') {
      console.error("Errore: l'esponente non è un numero.");
      return null;
    }
  
    // Svolgo il calcolo
    const result = Math.pow(base, exponent);
  
    // Stampo sulla console che l'operazione è completa
    console.log("L'operazione è completa.");
  
    // Ritorno il risultato
    return result;
  }
  
  // Esempi di utilizzo della funzione

  // Senza errori
//  console.log(power(2, 3)); 

  // Errore: la base non è un numero. 
//  console.log(power("a", 3)); 

  // Errore: l'esponente non è un numero. 
//  console.log(power(2, "b")); 

  // Errore: Entrambi i parametri non sono numeri.
//  console.log(power("a", "b"));  
  