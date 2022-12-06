import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css"

const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

    const rate = currencies.find(({ short }) => short === currency).rate;

  const countResult = () => {
    setResult({
    currency,
      startAmount: +amount,
      finalAmount: amount / rate,
      
    });
  };
  

    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult();
    };
    
    return (<form className="form" onSubmit={onFormSubmit}>
    <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p className="form__paragraph">
            <label><span className="form__labelText">Kwota do przeliczenia:</span>
                <input className="form__field"
                value={amount}
                onChange={({target}) => setAmount(target.value)} 
                required type="number" 
                min="1" 
                step="1" />
                <strong>PLN</strong>
            </label>
        </p>
        <p>
            <label><span className="form__labelText">Waluta:</span>
                <select className="form__select"
                value={currency}
                onChange={({target})=> setCurrency(target.value)}>
                    {currencies.map((currency => (
                        <option
                        key={currency.short}
                        value={currency.short}
                        >
                           {currency.name}
                        </option>
                    )))}
                </select>
            </label>
        </p>
        <button className="form__button" type="submit">Przelicz</button>
        <p>
            <Result result={result} />
            <label><span className="form__labelText">  </span></label>
        </p>
        <p className="paragraph"><b>Aktualne kursy walut na dzien 01.11.2022 według NBP</b></p>
        <p className="paragraph"><b>EURO (EUR): 4.6684</b></p>
        <p className="paragraph"><b>Dolar (USD):4.5066</b> </p>
        <p className="paragraph"><b>Korona czeska (CZK): 0.1916</b></p>
    </fieldset>
    
</form>
);
};
export default Form;