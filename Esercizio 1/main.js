let nomeUtente = prompt("Qual'è il tuo nome?");
let annoDiNascita = prompt("Qual'è il tuo anno di nascita?");
annoDiNascita = Number(annoDiNascita);
if (annoDiNascita % 4 === 0 && annoDiNascita % 100 !== 0 || annoDiNascita % 400 === 0) {
    alert (nomeUtente + " Sei nato in un anno bisestile");
}else {
    alert (nomeUtente + " Non sei nato in un anno bisestile");
}
