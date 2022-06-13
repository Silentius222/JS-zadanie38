function funkcja(a, b){
    let dodawanie = a + b;
    console.log = ("Wynik dodawania wynosi: ") + dodawanie;
    let odejmowanie = a - b;
    console.log = ("Wynik odejmowania wynosi: ") + odejmowanie;
    let mnozenie = a * b;
    console.log = ("Wynik mnozeniawynosi: ") + mnozenie;

    if ((dodawanie || odejmowanie || mnozenie) < 0){
        console.log = "Wynik jest nieprawidłowy";
    }
}