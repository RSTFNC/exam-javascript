document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const errorMessage = document.getElementById('errorMessage');
    const ul = document.getElementById('ul');

    // Aggiungo un addEventListener al pulsante per quando viene cliccato
    button.addEventListener('click', function() {
      const text = input.value.trim();

      // Verifica se l'input è vuoto o no
      if (text === '') {
        errorMessage.textContent = 'Per favore, inserisci del testo.';
      } else { 

        // Svuoto il messaggio di errore
        errorMessage.textContent = '';

        // Creo un elemento li dove aggiungo il testo dell'input svuotandolo
        const li = document.createElement('li');
        li.textContent = text;
        input.value = '';

        // Aggiungo il nuovo elemento li all' elemento ul
        ul.appendChild(li);
        
      }
    });
  });
