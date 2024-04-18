import { useState } from "react"
import AddIcon from "../../../../assets/images/iconAdd.svg"
import { StyledButton } from "./CreateRequestsButton-Styles"
import ModalCreateRequests from "../ModalCreateRequests/ModalCreateRequests";

export default function CreateRequestsButton() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    function activeCreateRequestsModal() {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <StyledButton onClick={activeCreateRequestsModal}>
                <img src={AddIcon} alt="AddIcon" />
                <p>Novo Produto</p>
            </StyledButton>
        {isModalVisible && (
            <ModalCreateRequests activeCreateRequestsModal={activeCreateRequestsModal}/>
        )}
        </>
    )
}

