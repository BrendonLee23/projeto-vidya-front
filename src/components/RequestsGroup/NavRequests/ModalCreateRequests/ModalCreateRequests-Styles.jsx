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
    width: 670px;
    height: 555px;
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
    margin-left: 25px;
    margin-top: 20px;
    input{
        width: 300px;
        height: 40px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #a9aeb5;
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
export const StyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    input{
        width: 300px;
        height: 40px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #b7bdc5;
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
    img{
        position: absolute;
        margin-right: 20px;
        cursor: pointer;
    }
`

export const SearchArea = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 0px 25px 25px 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
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
        background-color: #FFFFFF;
        border: 1px solid #858c96;
    }
`;

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
    justify-content: end;
    padding-right: 30px;
    padding-left: 30px;
`