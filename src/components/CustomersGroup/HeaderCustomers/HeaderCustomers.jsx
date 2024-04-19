import CustomersBlue from "../../../assets/images/groupBlue.svg"
import OrdersGrey from "../../../assets/images/cartGrey.svg"
import RequestsGrey from "../../../assets/images/listGrey.svg"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { CustomersButton, OrdersButton, RequestsButton, StyledHeader } from "./HeaderCustomers-Styles"

export default function HeaderCustomers() {

    return (
        <StyledHeader>
            <LinkStyled to="/customers">
                <CustomersButton>
                    <img src={CustomersBlue} alt="CustomersBlue" />
                    <h1>Clientes</h1>
                </CustomersButton>
            </LinkStyled>
            <LinkStyled to="/">
                <OrdersButton>
                    <img src={OrdersGrey} alt="OrdersGray" />
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