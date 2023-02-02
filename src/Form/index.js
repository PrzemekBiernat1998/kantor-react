import React, { useState, useEffect} from "react";
import { Result } from "./Result";
import { 
    StyledForm,
    FieldSet,
    Legend,
    Input,
    Select,
    TextSpan,
    Button,
    Paragraph,
    ParagraphDown,
} from "./styled";

const rates_url = 'https://api.exchangerate.host/latest';

const Form = () => {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const [exchangeRate, setExchangeRate] = useState();


    const countResult = () => {
        setResult({
            startAmount: +amount,
            finalAmount: amount * exchangeRate
        });
    };

    

    useEffect (() => {
        fetch(rates_url)
        .then(response => response.json())
        .then(data => {
            const firstCurrency = Object.keys(data.rates)[0];
            setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
            setAmount(data.base);
            setResult(firstCurrency);
            setExchangeRate(data.rates[0]);
        })
    }, []);


    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult();
    };

    return(<StyledForm
    onSubmit={onFormSubmit}>
        
        <FieldSet>
            <Legend>Kalkulator walut</Legend>
            <Paragraph>
                    <label>
                        <TextSpan>Kwota do przeliczenia:</TextSpan>
                        <Input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        required type="number"
                        min="1"
                        step="1" />
                        <strong>PLN</strong>
                    </label>
                </Paragraph>
                <Paragraph>
                    <label>
                        <TextSpan>Waluta:</TextSpan>
                        <Select>
                            {currencyOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Select>
                    </label>
                </Paragraph>
                    <Button type="submit">Przelicz</Button>
                <Paragraph>
                <Result result={result} />
                <TextSpan><span className="form__labelText">  </span></TextSpan>
                </Paragraph>
                <ParagraphDown>Aktualne kursy walut na dzien 01.11.2022 według NBP</ParagraphDown>
                <ParagraphDown>EURO (EUR): 4.668</ParagraphDown>
                <ParagraphDown>Dolar (USD):4.5066</ParagraphDown>
                <ParagraphDown>Korona czeska (CZK): 0.1916</ParagraphDown>
        </FieldSet>
    </StyledForm>
    );
};
export default Form;