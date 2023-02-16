import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 10px;
    border-radius: 20px;
`;

export const FieldSet = styled.fieldset`
    padding: 30px;
    background: #ffe8c7 ;
    max-width: 900px;
    margin: 0 auto;
`;

export const Legend = styled.legend`
    color: hsl(348, 100%, 18%);
    background-color: hsl(0, 0%, 78%);
    border-radius: 5px;
    padding: 25px;
    text-align: right;
`;

export const Input = styled.input`
    border: 1px solid rgb(75, 0, 141);
    padding: 5px;
    width: 150px;
`;

export const Select = styled.select`
    width: 150px;
`;

export const TextSpan = styled.span`
    width: 150px;
    display: inline-block;
    color: rgb(75, 0, 141);
`;

export const Button = styled.button`
    cursor: pointer;
    background-color: rgb(182, 182, 182);
    color: rgb(75, 0, 141);
    border: 1px solid rgb(75, 0, 141);
    border-radius: 3px;
    width: 100px;
    height: 40px;

    &:active{
        background-color: rgb(234, 0, 255);
    }
`;

export const Paragraph = styled.p`
    
    font-size: 14px;
    color: rgb(348, 100%, 18%);
    color: rgb(75, 0, 141);
`;

export const ParagraphDown = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: rgb(348, 100%, 18%);
    color: rgb(75, 0, 141);
`;
export const Failure = styled.p`
    color: white;
    background-color: red;
`;
export const Footer = styled.div`
    color: white;`
