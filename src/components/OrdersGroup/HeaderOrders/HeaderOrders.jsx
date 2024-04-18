import CustomersGrey from "../../../assets/images/groupGrey.svg"
import OrdersBlue from "../../../assets/images/cartBlue.svg"
import RequestsGrey from "../../../assets/images/listGrey.svg"
import { CustomersButton, OrdersButton, RequestsButton, StyledHeader } from "./HeaderOrders-Styles"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function HeaderOrders() {

    return (
        <StyledHeader>
            <LinkStyled to="/customers">
                <CustomersButton>
                    <img src={CustomersGrey} alt="CustomersGrey" />
                    <h1>Clientes</h1>
                </CustomersButton>
            </LinkStyled>
            <LinkStyled to="/orders">
                <OrdersButton>
                    <img src={OrdersBlue} alt="OrdersBlue" />
                    <h1>Pedidos</h1>
                </OrdersButton>
            </LinkStyled>
            <LinkStyled to="/requests">
                <RequestsButton>
                    <img src={RequestsGrey} alt="RequestsGrey" />
                    <h1>Produtos</h1>
                </RequestsButton>
            </LinkStyled>
        </StyledHeader>
    )
}

export const LinkStyled = styled(Link)`
    text-decoration: none;
`