//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz//


// creazione di un ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {

// verifica dei numeri ai quali assegnare un attributo
    //stampare i valori divisibili sia per 3 sia per 5
    if (i % 3 === 0 && i % 5 === 0) {
        //settando FizzBuzz come risultato
        console.log("FizzBuzz");
    }

    //stampare i valori divisibili per 3
    else if (i % 3 === 0) {
        //settando Fizz come risultato
        console.log("Fizz");
    }

    //stampare i valori divisibili per 5
    else if (i % 5 === 0) {
        //settando Buzz come risultato
        console.log("Buzz");
    }

    else {
        console.log("Siamo all'iterazione numero: ", i);
    }

// restituzione di un elenco da 1 a 100 con valori sia numerici sia letterali (Fizz, Buzz, FizzBuzz)
}