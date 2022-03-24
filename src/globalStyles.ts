import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
    *{
        padding: 0;
        margin: 0;
    }

    button, input{
        outline: none;
    }
    a{
        text-decoration: none;
        color: unset;
    }
`

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
`

export const Title = styled.h2` 
    font-family: sans-serif;
    text-align: center;
    margin-top: 15px;
`

export const Form = styled.form`
    margin-top: 10px;
    
    input, button{
        margin-top: 5px;
        display: block;
        width: 200px;
        padding: 4px 10px;
    }
`

export const TodosContainer = styled.div` 
    margin-top: 10px;
`

export const TodoCom = styled.div` 
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Open+Sans&display=swap');
    background: purple;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    border-radius: 3px;
    padding: 4px 10px;

    h3{
        font-family: 'Lato', sans-serif;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
    }
    .btn{
        border: none;
        background: red;
        padding: 5px 10px;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;
    }
`

