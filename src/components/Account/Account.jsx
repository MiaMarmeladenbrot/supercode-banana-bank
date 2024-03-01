import { useState } from "react";
import "./Account.css";

// * ToDos:
// - Kontostand = 1. state
// - input = 2. state
// - Einzahlen-Button = state + input
// - Auszahlen-Button = state - input
// - Bedingung: Auszahlen funktioniert nur, wenn input < Kontostand; falls false, dann window.prompt mit Fehlermeldung
// - nach Absenden input zurücksetzen
// - nur positive Zahlen eintippen (min="0" funktioniert nur für Pfeile, nicht für direkte Eingabe) --> Bedingung: value >= 0, sonst Fehlermeldung

const Account = () => {
  // * states:
  // - Kontostand, startet bei 0:
  const [kontostand, setKontostand] = useState(0);
  // console.log(kontostand);

  // - Inputfeld, startet mit leerem String:
  const [money, setMoney] = useState("");
  // console.log(money);

  // * Funktion, um state von money entsprechend der Eingabe im Inputfeld zu ändern (mit Bedingung: input >= 0, da keine Minuswerte eingegeben werden sollen):
  const changeMoney = (event) => {
    if (event.target.value >= 0) {
      setMoney(Number(event.target.value));
    } else {
      window.alert("Verwendung von Minuswerten nicht möglich.");
    }
  };

  // * Funktion für Einzahlbutton (Kontostand + Userinput):
  const addMoney = () => {
    setKontostand(kontostand + money);
    setMoney("");
  };

  // * Funktion für Auszahlbutton (mit Bedingung: input muss <= kontostand):
  const subMoney = () => {
    if (money <= kontostand) {
      setKontostand(kontostand - money);
      setMoney("");
    } else {
      window.alert("Du kannst nichts mehr abbuchen.");
      setMoney("");
    }
  };

  return (
    <section className="account">
      <h3>Mein Girokonto</h3>
      <p>{kontostand}</p>
      <input
        min="0"
        type="number"
        placeholder="Betrag in €"
        // * Funktionsaufruf beim Ändern des Input-Felds:
        onChange={changeMoney}
        value={money}
      />
      <div>
        {/* // * Funktionsaufrufe beim Klick auf die Buttons: */}
        <button onClick={addMoney}>Einzahlen</button>
        <button onClick={subMoney}>Auszahlen</button>
      </div>
    </section>
  );
};

export default Account;
