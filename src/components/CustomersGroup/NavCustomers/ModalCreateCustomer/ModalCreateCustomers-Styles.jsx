import { styled } from "styled-components";

export const Modal = styled.form`
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            z-index: 9999;
            `;

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

export const ModalForms = styled.div`
    width: 1000px;
    height: 300px;
    margin-top: 20px;
    padding: 0px 25px 25px 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        height: 60px;
        gap:8px;
        margin-top: 10px;
    }
    h1{
        color:#2F3036;
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 14.52px;
        text-align: left;
    }
    input{
        width: 300px;
        height: 48px;
        padding: 12px 16px;
        border-radius: 12px;
        border: 1.5px solid #C5C6CC;
    }
    p{
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.01em;
        text-align: left;
        color:#f30505;
    }
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
`;

export const Footer = styled.div`
    height: 60px;
    border-top: 1px solid #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 30px;
`
export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;
    background-color: blue;
    border-radius: 8px;
    border: none;
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