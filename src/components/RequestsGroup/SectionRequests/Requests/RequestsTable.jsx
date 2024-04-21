import { RequestsList } from "./RequestsTable-Styles"
import { useEffect, useState } from "react";
import ModalRequestsDetails from "../../NavRequests/ModalRequestsDetails/ModalRequestsDetails";
import RequestsItem from "./RequestsItem/RequestsItem";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../../../../tools/requestsSlice";
import { requestMockData } from "../../../../utils/RequestsMockData";

export default function RequestsTable() {
    const requests = useSelector(state => state.requests.requestsList);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [storedRequests, setStoredRequests] = useState([]);
    const dispatch = useDispatch();

    function activeRequestsDetailsModal(request) {
        setSelectedRequest(request);
        setIsModalVisible(true);
    }

    useEffect(() => {
        if(localStorage.getItem('requests') !== null) {
            const requestStorageData = JSON.parse(localStorage.getItem('requests')) || [];
            setStoredRequests(requestStorageData);
            requestStorageData.forEach((item) => dispatch( addRequests(item)));
        }
        else{
            localStorage.setItem('requests', JSON.stringify(requestMockData));
        }
    }, []);

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

