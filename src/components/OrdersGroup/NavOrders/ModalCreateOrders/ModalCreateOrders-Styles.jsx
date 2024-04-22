import { styled } from "styled-components";

export const Overlay = styled.div`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9998;
            display: flex;
            justify-content: center;
            align-items: center;
            `;
export const Modal = styled.div`
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            z-index: 9999;
            `;
export const ModalTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid #c9c8c8;
    padding: 0px 25px 0px 25px;
    h2{
        font-family: Inter;
        font-size: 15px;
        font-weight: 800;
        line-height: 16.94px;
        text-align: center;
    }
    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`
export const SelectArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    width: 900px;
    height: 400px;
    margin-left: 25px;
    margin-top: 20px;
    overflow: hidden;
    input{
        width: 300px;
        height: 40px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #777e87;
        border-radius: 8px;
    }
    h1{
        font-family: Inter;
        font-size: 15px;
        font-weight: 800;
        line-height: 16.94px;
        text-align: left;
        margin-bottom:10px;
    }
`
export const CustomerList = styled.ul`
    position: relative;
    width: 500px;
    max-height: 120px;
    overflow-y: auto;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0;
/*     margin: 0; */
    list-style: none;
    z-index: 9999;
    li {
        padding: 10px 20px;
        cursor: pointer;
        font-family: Inter;
    }
    li:hover {
        background-color: #f0f0f0;
    }
`;


export const StyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: relative;
    input {
        width: 300px;
        height: 40px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #858c96;
        border-radius: 8px;
        position: relative;
    }
    input::placeholder {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }
    img {
        position: absolute;
        left: 260px;
    } 
`;


export const ProductList = styled.div`
    width: 900px;
    height: 250px;
    margin-top: 20px;
    padding: 0px 0px 25px 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
    overflow: auto;
    margin-left: -25px;
    h1{
        color:#2F3036;
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 14.52px;
        text-align: left;
    }
    input{
        position: absolute;
        width: 300px;
        height: 48px;
        padding: 12px 16px;
        border-radius: 12px;
        border: 1.5px solid #C5C6CC;
    }
`;

export const Product = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 100px;
    gap: 0px;
    border-radius: 16px;
    border: 1px solid #D4D6DD;
    opacity: 0px;
    img{
        width: 88px;
        height: 100px;
        margin-right: 20px;
        border-radius:16px;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    div{
        display: flex;
    }
`
export const Resume = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    gap: 5px;
    img{
        margin-right: 6px;
        width: 24px;
        height: 24px;
        cursor:pointer; 
    }
    h1{
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        color:#1F2024;
        margin-right: 6px;
    }

`
export const Price = styled.h1`
    display:flex;
    align-items: end;
    justify-content: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 800;
    line-height: 16.94px;
    text-align: left;
    color:#1F2024;
    padding-bottom:5px;
    padding-right: 10px;
`
export const TitleProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 205px;
    height: 35px;
    gap: 4px;
    h1{
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.52px;
    text-align: left;
    color:#1F2024;
    }
    h2{
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #71727A;
    }
`
export const Total = styled.div`
    display: flex;
    gap: 10px;
    h1{
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
        color:#1ABC00
    }
    h2{
        font-family: Inter;
        font-size: 16px;
        font-weight: 900;
        line-height: 19.36px;
        letter-spacing: 0.005em;
        text-align: left;
        color:#1F2024;
    }
`

export const SaveButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;
    background-color: blue;
    border-radius: 8px;
    cursor: pointer;
    p{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.10000000149011612px;
        text-align: center;
        color: white
    }
`
export const Footer = styled.div`
    height: 60px;
    border-top: 1px solid #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    padding-left: 30px;
`