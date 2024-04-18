import { useState } from "react"
import AddIcon from "../../../../assets/images/iconAdd.svg"
import { StyledButton } from "./CreateCustomersButton-Styles"
import ModalCreateCustomers from "../ModalCreateCustomer/ModalCreateCustomers";

export default function CreateCustomersButton() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    function activeCreateCustomersModal() {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <StyledButton onClick={activeCreateCustomersModal}>
                <img src={AddIcon} alt="AddIcon" />
                <p>Novo Cliente</p>
            </StyledButton>
        {isModalVisible && (
            <ModalCreateCustomers activeCreateCustomersModal={activeCreateCustomersModal}/>
        )}
        </>
    )
}

