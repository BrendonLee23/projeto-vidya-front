import { useContext } from "react"
import { styled } from "styled-components"
import { InfoContext } from "../../contexts/InfoContext"

export default function Section() {

    const { activeButton } = useContext(InfoContext)

    return (
        <StyledSection>
            {
                activeButton === "customers" ? 
                <CustomersTable></CustomersTable> 
                :
                activeButton === "orders" ?
                <OrdersTable></OrdersTable>
                :
                activeButton === "requests" ?
                <RequestsTable></RequestsTable>
                :
                null
            }
        </StyledSection>
    )
}

const StyledSection = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 350px;
    background-color: #3a2deb;
    margin: 20px 30px 20px 30px;
    border-radius: 8px;
`

const CustomersTable = styled.div`
    width: 100%;
    height: 100%;
    background-color: #d50505;
    border-radius: 8px;
`

const OrdersTable = styled.div`
    width: 100%;
    height: 100%;
    background-color: #29ff04;
    border-radius: 8px;
`

const RequestsTable = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ff8e25;
    border-radius: 8px;
`