import React, { useState } from "react";
import { currencies } from "./currencies";

import "./style.css"

const Form = ()=> (
    <form className="form js-form">
    <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p className="form__paragraph">
            <label><span className="form__labelText">Kwota do przeliczenia:</span>
                <input className="form__field js-value" required type="number" min="1" step="1" />
                <strong>PLN</strong>
            </label>
        </p>
        <p>
            <label><span className="form__labelText">Waluta:</span>
                <select className="form__select js-exchange">
                    <option value="4.86">Euro (EUR)</option>
                    <option value="4.96">Dolar (USD)</option>
                    <option value="0.12">Korona (CZK)</option>
                </select>
            </label>
        </p>
        <button className="form__button" type="submit">Przelicz</button>
        <p>
            <label><span className="form__labelText">Wynik: <strong
                        className="js-exchangeResult">N/A</strong></span></label>
        </p>
        <p className="paragraph"><b>Aktualne kursy walut na dzien 01.11.2022 według NBP</b></p>
        <p className="paragraph"><b>EURO (EUR): 4.6684</b></p>
        <p className="paragraph"><b>Dolar (USD):4.5066</b> </p>
        <p className="paragraph"><b>Korona czeska (CZK): 0.1916</b></p>
        <p className="paragraph"><button type="reset" className="paragraph__button">Wyczyść</button></p>
    </fieldset>
</form>
)
export default Form;