import { useState, useEffect } from "react";
import { StyledDate } from "./styled";

const CurrentDate = () => {
    const[newDate, setNewDate] = useState(new Date());

    useEffect(() => {
        const invtervalId = setInterval(() =>{
            setNewDate(new Date());
        }, 1000);
        return () => {
            clearInterval(invtervalId);
        };
    }, []);
    return (
        <StyledDate>
            Aktualna data to {" "}
            {newDate.toLocaleString(undefined, {
                weekday: "long",
                hour:"2-digit",
                minute: "2-digit",
                second: "2-digit",
                day:"numeric",
                month: "long"
            })}
        </StyledDate>
    );
};
export default CurrentDate;
