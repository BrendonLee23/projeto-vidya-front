import { useContext, useState } from "react"
import { InfoContext } from "../../contexts/InfoContext"
import AddIcon from "../../assets/images/iconAdd.svg"
import { StyledButton } from "./CreateButton-Styles"
import CreateCustomers from "../Customers/ModalCreateCustomer/ModalCreateCustomers"

export default function CreateButton() {

    const {activeButton} = useContext(InfoContext)
    const [isModalVisible, setIsModalVisible] = useState(false);

    function activeCreateDataModal() {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <StyledButton onClick={activeCreateDataModal}>
                <img src={AddIcon} alt="AddIcon" />
                {activeButton === "customers" ? <p>Novo Cliente</p> : activeButton === "orders" ? <p>Novo Pedido</p> : activeButton === "requests" ? <p>Novo Produto</p> : null}
            </StyledButton>
        {isModalVisible && (
            <CreateCustomers activeCreateDataModal={activeCreateDataModal}/>
        )}
        </>
    )
}

