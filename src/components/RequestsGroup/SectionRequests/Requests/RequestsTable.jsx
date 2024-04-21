import { RequestsList } from "./RequestsTable-Styles"
import { useEffect, useState } from "react";
import ModalRequestsDetails from "../../NavRequests/ModalRequestsDetails/ModalRequestsDetails";
import RequestsItem from "./RequestsItem/RequestsItem";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, clearRequests } from "../../../../tools/requestsSlice";
import { requestMockData } from "../../../../utils/RequestsMockData";

export default function RequestsTable() {
    const requests = useSelector(state => state.requests.requestsList);
    console.log(requests);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [storedRequests, setStoredRequests] = useState([]);
    const dispatch = useDispatch();

    function activeRequestsDetailsModal(request) {
        setSelectedRequest(request);
        setIsModalVisible(true);
    }

    useEffect(() => {
        // Verifica se já existem pedidos salvos no armazenamento local
        const localStorageRequests = JSON.parse(localStorage.getItem('requests'));
        if (localStorageRequests) {
            // Limpa a lista de pedidos antes de adicionar os novos dados
            dispatch(clearRequests());
            // Adiciona os dados do armazenamento local à lista de pedidos
            localStorageRequests.forEach((item) => dispatch(addRequests(item)));
        } else {
            // Se não houver, salva os dados mockados no armazenamento local
            localStorage.setItem('requests', JSON.stringify(requestMockData));
            // Adiciona os dados mockados à lista de pedidos
            requestMockData.forEach((item) => dispatch(addRequests(item)));
        }
    }, [dispatch]); // Adicione o dispatch como dependência para evitar avisos do ESLint


    return (
        <>
            <RequestsList>
                {requests.map((request, index) => (
                    <RequestsItem
                        key={index}
                        request={request}
                        onClick={() => activeRequestsDetailsModal(request)}
                    />
                ))}
            </RequestsList>
            {isModalVisible && (
                <ModalRequestsDetails
                    request={selectedRequest}
                    activeRequestsDetailsModal={() => setIsModalVisible(false)} />
            )}
        </>
    )
}

