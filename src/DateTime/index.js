import { useState, useEffect } from "react";
import "./style.css";

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
        <div className="date">
            Aktualna data to {" "}
            {newDate.toLocaleString(undefined, {
                weekday: "long",
                hour:"2-digit",
                minute: "2-digit",
                second: "2-digit",
                day:"numeric",
                month: "long"
            })}
        </div>
    );
};
export default CurrentDate;
