import { useState } from "react"
import AddIcon from "../../../../assets/images/iconAdd.svg"
import { StyledButton } from "./CreateOrdersButton-Styles"
import ModalCreateOrders from "../ModalCreateOrders/ModalCreateOrders"

export default function CreateOrdersButton() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    function activeCreateOrdersModal() {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <StyledButton onClick={activeCreateOrdersModal}>
                <img src={AddIcon} alt="AddIcon" />
                <p>Novo Pedido</p>
            </StyledButton>
        {isModalVisible && (
            <ModalCreateOrders activeCreateOrdersModal={activeCreateOrdersModal}/>
        )}
        </>
    )
}

