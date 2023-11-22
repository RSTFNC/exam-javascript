// Esempio di array
const arrayDiFrutta = ["arancia", "Mela", "pera", "Anguria"];

function concatenaStringhe(arrayDiFrutta) {
    // Inizializza una stringa vuota per la concatenazione
    let stringaConcatenata = '';

    for (let i = 0; i < arrayDiFrutta.length; i++) {

      // Verifica se la stringa inizia con "A" o "a"
      if (arrayDiFrutta[i].charAt(0).toLowerCase() === 'a') {
        stringaConcatenata += arrayDiFrutta[i];
  
        // Controllo la lunghezza della stringa e la tronco a 10 caratteri se necessario
        if (stringaConcatenata.length > 10) {
          stringaConcatenata = stringaConcatenata.substring(0, 10);
          break; 
        }
      }
    }
    // Restituisci la stringa concatenata
    return stringaConcatenata;
  } 
const risultato = concatenaStringhe(arrayDiFrutta);
console.log(risultato);
  
  
  