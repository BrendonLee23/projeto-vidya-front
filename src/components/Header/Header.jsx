import { useState } from "react"
import { styled } from "styled-components"

export default function Header(){

    const [activeButton, setActiveButton] = useState(null)

    function activateButton(button) {
        setActiveButton(button);
    }

    return(
        <StyledHeader>
            <OrdersButton onClick={() => activateButton("orders")} active={activeButton === "orders"}></OrdersButton>
            <CustomersButton onClick={() => activateButton("customers")} active={activeButton === "customers"}></CustomersButton>
            <RequestsButton onClick={() => activateButton("requests")} active={activeButton === "requests"}></RequestsButton>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    gap: 15px;
`
const OrdersButton = styled.div`
    height: 25px;
    width: 85px;
    background-color: ${props => props.active ? "#F7F9FC" : "#ffffff"};
    border-radius: 10px;
    cursor: pointer;
`
const CustomersButton = styled.div`
    height: 25px;
    width: 85px;
    background-color: ${props => props.active ? "#F7F9FC" : "#ffffff"};
    border-radius: 10px;
    cursor: pointer;
`
const RequestsButton = styled.div`
    height: 25px;
    width: 85px;
    background-color: ${props => props.active ? "#F7F9FC" : "#ffffff"};
    border-radius: 10px;
    cursor: pointer;
`
