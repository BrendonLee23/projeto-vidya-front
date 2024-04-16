import { useState } from "react"
import { styled } from "styled-components"
import CustomersBlue from "../../assets/images/groupBlue.svg"
import CustomersGrey from "../../assets/images/groupGrey.svg"
import OrdersBlue from "../../assets/images/cartBlue.svg"
import OrdersGrey from "../../assets/images/cartGrey.svg"
import RequestsBlue from "../../assets/images/listBlue.svg"
import RequestsGrey from "../../assets/images/listGrey.svg"

export default function Header() {

    const [activeButton, setActiveButton] = useState(null)

    function activateButton(button) {
        setActiveButton(button);
    }

    return (
        <StyledHeader>
            <CustomersButton onClick={() => activateButton("customers")} active={activeButton === "customers"}>
                {activeButton === "customers" ? <img src={CustomersBlue} alt="CustomersBlue" /> : <img src={CustomersGrey} alt="CustomersGrey" />}
                <h1>Clientes</h1>
            </CustomersButton>
            <OrdersButton onClick={() => activateButton("orders")} active={activeButton === "orders"}>
                {activeButton === "orders" ? <img src={OrdersBlue} alt="OrdersBlue" /> : <img src={OrdersGrey} alt="OrdersGrey" />}
                <h1>Pedidos</h1>
            </OrdersButton>
            <RequestsButton onClick={() => activateButton("requests")} active={activeButton === "requests"}>
                {activeButton === "requests" ? <img src={RequestsBlue} alt="OrdersBlue" /> : <img src={RequestsGrey} alt="OrdersGrey" />}
                <h1>Produtos</h1>
            </RequestsButton>
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

const CustomersButton = styled.div`
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
        width: 22px; /* Define o mesmo tamanho para todas as imagens */
        height: 22px; /* Define o mesmo tamanho para todas as imagens */
    }
`

const OrdersButton = styled.div`
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
        width: 20px; /* Define o mesmo tamanho para todas as imagens */
        height: 20px; /* Define o mesmo tamanho para todas as imagens */
    }
`

const RequestsButton = styled.div`
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
        width: 18px; /* Define o mesmo tamanho para todas as imagens */
        height: 18px; /* Define o mesmo tamanho para todas as imagens */
    }
`