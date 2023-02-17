import React, { useState } from "react";
import { Result } from "./Result";
import useRatesData from "./useRatesData";
import { 
    StyledForm,
    FieldSet,
    Legend,
    Input,
    Select,
    Failure,
    TextSpan,
    Button,
    Paragraph,
    Loading
} from "./styled";
import { RatesDate } from "../DateTime";
import LoadingScreen from "../Loading";


const Form = () => {
    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    
    const ratesData = useRatesData();

    const countResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            currency,
            startAmount: +amount,
            finalAmount: amount * rate,
        });
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        countResult(currency, amount);
    };
    return(
    <StyledForm onSubmit={onFormSubmit}>
        <Legend>Kalkulator walut</Legend>
        <FieldSet>
            {ratesData.state === "loading"
            ? (
                <Loading>Chwileczke...⏳  <strong>Ładuję aktualne kursy walut z Europejskiego Banku Centralnego ⏳ </strong>
                <LoadingScreen /></Loading>
            )
            : (
                ratesData.state === "error" ? (
                    <Failure>
                        Kursy walut nie pobrały się 😐 . Sprawdź swoje połączenie internetowe 😐
                    </Failure>
                ) : (
                    <>
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
                        <Select 
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        >
                            {Object.keys(ratesData.rates).map(((currency) => (
                                <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                            )))}
                            
                        </Select>
                    </label>
                </Paragraph>
                    <Button type="submit">Przelicz</Button>
                <Paragraph>
                <Result result={result} />
                <TextSpan><span className="form__labelText">  </span></TextSpan>
                </Paragraph>
                </>
                )
            )}
            
        </FieldSet>
        
            <div>
                <RatesDate />

            </div>
    </StyledForm>
    );
};
export default Form;