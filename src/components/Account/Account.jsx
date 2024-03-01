import { useState } from "react";
import "./Account.css";

// * ToDos:
// - Kontostand = 1. state
// - input = 2. state
// - Einzahlen-Button = state + input
// - Auszahlen-Button = state - input
// - Bedingung: Auszahlen funktioniert nur, wenn input < Kontostand; falls false, dann window.prompt mit Fehlermeldung
// * Bonus ToDo:
// - nach Absenden input zurücksetzen
// - nur positive Zahlen eintippen (min="0" funktioniert nur für Pfeile, nicht für direkte Eingabe) --> Bedingung: value >= 0, sonst Fehlermeldung
// - Ein- und Auszahlfunktion verstecken, mit Klick öffnen

const Account = () => {
  // * states:
  // - Kontostand, startet bei 0:
  const [kontostand, setKontostand] = useState(0);
  // console.log(kontostand);

  // - Inputfeld, startet mit leerem String:
  const [money, setMoney] = useState("");
  // console.log(money);

  // - state der Anzeige der Buttons, default hidden:
  const [buttons, setButtons] = useState(false);

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

  // * Funktion, um Ein- und Auszahloptionen einzublenden:
  const showHideButtons = () => {
    setButtons((buttons) => !buttons);
    // console.log("func läuft");
    // console.log(buttons);
  };

  return (
    <section className="account">
      <div className="kontoanzeige">
        <p>{kontostand} €</p>
        <p>aktueller Kontostand</p>
      </div>

      {/* //* Einzahl- und Auszahlfunktion default hidden, erst durch Button werden sie geöffnet: */}
      <button className="open-button" onClick={showHideButtons}>
        Geld ein- oder auszahlen ⬇️
      </button>
      <article className={buttons ? "show" : ""}>
        <input
          min="0"
          type="number"
          placeholder="Betrag in €"
          // * Funktionsaufruf beim Ändern des Input-Felds:
          onChange={changeMoney}
          value={money}
        />{" "}
        <div>
          {/* // * Funktionsaufrufe beim Klick auf die Buttons: */}
          <button onClick={addMoney}>Einzahlen</button>
          <button onClick={subMoney}>Auszahlen</button>
        </div>
      </article>
    </section>
  );
};

export default Account;
