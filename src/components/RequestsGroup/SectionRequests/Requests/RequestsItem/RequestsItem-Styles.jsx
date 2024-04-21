import { styled } from "styled-components"

export const RequestsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 250px;
    height: 233px;
    background-color:#FFFFFF;
    border-radius: 13px;
    margin-bottom: 30px;
    padding-bottom:15px;
    gap: 15px;
    cursor: pointer;
    img{
        width: 250px;
        height: 162px;
        gap: 10px;
        opacity: 0px;
        border-top-right-radius:13px;
        border-top-left-radius:13px;
    }
`
export const RequestsDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    margin-right: 5px;
    padding-left: 15px;
    h1{
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color:#1F2024;
    }
    h2{
    font-family: Inter;
    font-size: 14px;
    font-weight: 800;
    line-height: 16.94px;
    text-align: left;
    color:#1F2024;
    }
`