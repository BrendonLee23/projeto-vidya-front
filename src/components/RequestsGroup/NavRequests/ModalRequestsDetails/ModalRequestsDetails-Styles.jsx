import { styled } from "styled-components";

export const Modal = styled.div`
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

export const ModalTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 55px;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
border-bottom: 1px solid #8d8b8b;
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

export const ModalInfos = styled.div`
    width: 790px;
    height: 260px;
    padding: 0px 25px 25px 25px;
    display: flex;
    gap: 30px;
    margin-top: 20px;
    div{
        display: flex;
        flex-direction: column;
        width: 500px;
        height: 200px;
        gap:10px;
    }
    h2{
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 14.52px;
        text-align: left;
        color: #2F3036;
    }
    h3{
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #1F2024;
    }
    p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: justified;
    color: #71727A;
    margin-top: 20px;
    display: inline-block;
    width: 100%; 
    height: 100%; 
    box-sizing: border-box; 
}
`

