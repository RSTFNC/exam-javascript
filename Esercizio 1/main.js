
// Prendo i valori nomeUtente ed annoDiNascita dall'utente
const nomeUtente = prompt("Qual'è il tuo nome?");
const annoDiNascita = prompt("Qual'è il tuo anno di nascita?");

// Trasformo la stringa annoDiNascita in un numero
annoDiNascita = Number(annoDiNascita);

// Calcolo se l'anno e bisestile o meno
if (annoDiNascita % 4 === 0 && annoDiNascita % 100 !== 0 || annoDiNascita % 400 === 0) {
    alert (nomeUtente + " Sei nato in un anno bisestile");
}else {
    alert (nomeUtente + " Non sei nato in un anno bisestile");
}
