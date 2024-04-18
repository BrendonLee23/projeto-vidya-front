import { RequestsCard, RequestsDescription, RequestsList } from "./RequestsTable-Styles"
import ProdImage from "../../../../assets/images/imageProd.svg"
import { useState } from "react";
import ModalRequestsDetails from "../../NavRequests/ModalRequestsDetails/ModalRequestsDetails";

export default function RequestsTable() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    function activeRequestsDetailsModal() {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <RequestsList>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
                <RequestsCard onClick={activeRequestsDetailsModal}>
                    <img src={ProdImage} alt="ProdImage" />
                    <RequestsDescription>
                        <h1>Produto</h1>
                        <h2>R$ 23,99</h2>
                    </RequestsDescription>
                </RequestsCard>
            </RequestsList>
            {isModalVisible && (
                <ModalRequestsDetails activeRequestsDetailsModal={activeRequestsDetailsModal}/>
            )}
        </>
    )
}

