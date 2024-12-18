# js-fizzbuzz
FizzBuzz


//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz//

Prima di partire a scrivere codice poniamoci qualche domanda:

- Come faccio a sapere se un numero è divisibile per?
- Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare;
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”.

Dopo esserci concentrati sul far funzionare le cose e averle testate, ragioniamo  sul possibile refactoring, quindi ottimizzazione possibile, sia del codice come performance, ma anche, se non soprattutto come leggibilità e mantenibilità.

STEPS:

// creazione di un ciclo (for) da 1 a 100 --- INPUT
    //CONTATORE: imposto una variabile (i) e le assegno un valore iniziale (1)
    //CONDIZIONE: imposto la condizione da verificare per poter eseguire il codice (in questo caso la condizione è vera se il contatore è minore o uguale a 100)
    //INCREMENTO: incremento il valore di un'unità per ogni iterazione fino ad arrivare a 100


// verifica dei numeri ai quali assegnare un attributo

    // SE un numero è divisibile per 3
        // setto il risultato sul valore Fizz

    // SE un numero è divisibile per 5
        // setto il risultato sul valore Buzz

    // SE un numero è divisibile sia per 3 sia per 5
        // setto il risultato sul valore FizzBuzz


// restituzione di un elenco da 1 a 100 con valori sia numerici sia letterali (Fizz, Buzz, FizzBuzz) --- OUTPUT