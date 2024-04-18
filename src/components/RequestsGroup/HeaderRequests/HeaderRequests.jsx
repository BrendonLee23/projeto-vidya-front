import CustomersGrey from "../../../assets/images/groupGrey.svg"
import OrdersGrey from "../../../assets/images/cartGrey.svg"
import RequestsBlue from "../../../assets/images/listBlue.svg"
import { CustomersButton, OrdersButton, RequestsButton, StyledHeader } from "./HeaderRequests-Styles"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function HeaderRequests() {

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
                    <img src={OrdersGrey} alt="OrdersGrey" />
                    <h1>Pedidos</h1>
                </OrdersButton>
            </LinkStyled>
            <LinkStyled to="/requests">
                <RequestsButton>
                    <img src={RequestsBlue} alt="RequestsBlue" />
                    <h1>Produtos</h1>
                </RequestsButton>
            </LinkStyled>
        </StyledHeader>
    )
}

export const LinkStyled = styled(Link)`
    text-decoration: none;
`