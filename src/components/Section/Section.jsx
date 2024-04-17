import { useContext } from "react"
import { styled } from "styled-components"
import { InfoContext } from "../../contexts/InfoContext"
import CustomersTable from "../Customers/CustomersTable"
import { StyledSection } from "./Section-Styles"

export default function Section() {

    const { activeButton } = useContext(InfoContext)

    return (
        <StyledSection>
            {
                activeButton === "customers" ?
                    <CustomersTable />
                    :
                activeButton === "orders" ?
                    <OrdersTable>
                    </OrdersTable>
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

const OrdersTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
/*     background-color: #29ff04; */
    border-radius: 8px;
    overflow: auto; 
`

const RequestsTable = styled.div`
    width: 100%;
    height: 100%;
/*     background-color: #ff8e25; */
    border-radius: 8px;
`