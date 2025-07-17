// 1. Crea una funzione che accetta un anno di nascita e che restituisca un messaggio all'utente con l'anno inserito (scrivi la funzione in vari modi arrow e non)
// 2. Crea una funzione che accetta due numeri e restituisce la loro differenza
// 3. Crea una funzione che non accetta parametri e logga in console un messaggio a piacere

// 1. Crea una funzione che accetta un anno di nascita e che restituisca un messaggio all'utente con l'anno inserito (scrivi la funzione in vari modi arrow e non)

//paramt -> anno di nascita

function yearOfBirth (year){
    return year;
}

const checkYear = yearOfBirth(2000)
console.log(checkYear);

const checkYear2 = year => year
console.log(checkYear2(2000));

// 2. Crea una funzione che accetta due numeri e restituisce la loro differenza

function differenza (n1, n2){
    return n1-n2
}
const checkDifferenza = differenza (5,4)
console.log(checkDifferenza);

const differenza2 = (n1, n2) => n1 - n2;
console.log(differenza2(5,4));
