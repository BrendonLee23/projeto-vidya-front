import { RequestsList } from "./RequestsTable-Styles";
import { useEffect, useState } from "react";
import ModalRequestsDetails from "../../NavRequests/ModalRequestsDetails/ModalRequestsDetails";
import RequestsItem from "./RequestsItem/RequestsItem";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, clearRequests } from "../../../../tools/requestsSlice"; // Remova o addRequests daqui, pois agora os pedidos serão atualizados automaticamente quando a lista filtrada mudar
import { requestMockData } from "../../../../utils/RequestsMockData";

export default function RequestsTable() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const dispatch = useDispatch();
    const filteredRequests = useSelector(state => state.requests.filteredRequests); // Obtém a lista de pedidos filtrados
    const requestsList = useSelector(state => state.requests.requestsList); // Obtém a lista de pedidos não filtrados

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
                {(filteredRequests && filteredRequests.length > 0 ? filteredRequests : requestsList).map((request, index) => (
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
