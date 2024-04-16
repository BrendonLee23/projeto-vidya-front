import { useState } from "react"
import { styled } from "styled-components"
import CustomersBlue from "../../assets/images/groupBlue.svg"
import CustomersGrey from "../../assets/images/groupGrey.svg"
import OrdersBlue from "../../assets/images/cartBlue.svg"
import OrdersGrey from "../../assets/images/cartGrey.svg"
import RequestsBlue from "../../assets/images/listBlue.svg"
import RequestsGrey from "../../assets/images/listGrey.svg"
import { CustomersButton, OrdersButton, RequestsButton, StyledHeader } from "./Header-Styles"

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
