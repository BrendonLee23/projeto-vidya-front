import { styled } from "styled-components"

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    gap: 15px;
`

export const CustomersButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 95px;
    background-color: ${props => props.active ? "#F7F9FC" : "#ffffff"};
    border-radius: 10px;
    cursor: pointer;
    h1 {
        font-family: Roboto;
        color: ${props => props.active ? "#006FFD" : "#5D6570"};
    }
    img {
        margin-right: 5px;
        width: 22px;
        height: 22px;
    }
`

export const OrdersButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 95px;
    background-color: ${props => props.active ? "#F7F9FC" : "#ffffff"};
    border-radius: 10px;
    cursor: pointer;
    h1 {
        font-family: Roboto;
        color: ${props => props.active ? "#006FFD" : "#5D6570"};
    }
    img {
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }
`

export const RequestsButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 95px;
    background-color: ${props => props.active ? "#F7F9FC" : "#ffffff"};
    border-radius: 10px;
    cursor: pointer;
    h1 {
        font-family: Roboto;
        color: ${props => props.active ? "#006FFD" : "#5D6570"};
    }
    img {
        margin-right: 5px;
        width: 18px; 
        height: 18px;
    }
`