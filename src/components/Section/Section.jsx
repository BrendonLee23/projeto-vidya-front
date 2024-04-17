import { useContext } from "react"
import { styled } from "styled-components"
import { InfoContext } from "../../contexts/InfoContext"
import CustomersTable from "../Customers/CustomersTable"
import { StyledSection } from "./Section-Styles"
import OrdersTable from "../Orders/OrdersTable"

export default function Section() {

    const { activeButton } = useContext(InfoContext)

    return (
        <StyledSection>
            {
                activeButton === "customers" ?
                    <CustomersTable />
                    :
                activeButton === "orders" ?
                    <OrdersTable />
                    :
                activeButton === "requests" ?
                    <RequestsTable>
                    </RequestsTable>
                    :
                        null
            }
        </StyledSection>
    )
}



const RequestsTable = styled.div`
    width: 100%;
    height: 100%;
/*     background-color: #ff8e25; */
    border-radius: 8px;
`