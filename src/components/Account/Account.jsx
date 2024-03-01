import { useState } from "react";
import "./Account.css";

const Account = () => {
  // * ToDos:
  // - Kontostand = 1. state
  // - input = 2. state
  // - Einzahlen-Button = state + input
  // - Auszahlen-Button = state - input
  // - Bedingung: Auszahlen funktioniert nur, wenn input < Kontostand; falls false, dann window.prompt mit Fehlermeldung

  // * states:
  // - Kontostand, startet bei 0:
  const [kontostand, setKontostand] = useState(0);
  console.log(kontostand);

  // - Inputfeld, startet mit leerem String:
  const [money, setMoney] = useState("");
  console.log(money);

  // * Funktion für Einzahlbutton (Kontostand + Userinput)
  const addMoney = () => setKontostand(kontostand + money);

  // * Funktion für Auszahlbutton (mit Bedingung: input muss < kontostand):
  const subMoney = () => {
    if (money < kontostand) {
      setKontostand(kontostand - money);
    } else {
      window.alert("Du kannst nichts mehr abbuchen.");
    }
  };

  return (
    <section className="account">
      <h3>Mein Girokonto</h3>
      <p>{kontostand}</p>
      <input
        type="number"
        placeholder="Betrag in €"
        // * Funktion aufs Input-Feld, damit sich state von money beim Eingeben der Zahl entsprechend ändert:
        onChange={(event) => setMoney(Number(event.target.value))}
        value={money}
      />
      <div>
        <button onClick={addMoney}>Einzahlen</button>
        <button onClick={subMoney}>Auszahlen</button>
      </div>
    </section>
  );
};

export default Account;
