import { RequestsList } from "./RequestsTable-Styles";
import { useEffect, useState } from "react";
import ModalRequestsDetails from "../../NavRequests/ModalRequestsDetails/ModalRequestsDetails";
import RequestsItem from "./RequestsItem/RequestsItem";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, clearRequests } from "../../../../tools/requestsSlice";
import { requestMockData } from "../../../../utils/RequestsMockData";

export default function RequestsTable() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const dispatch = useDispatch();
    const filteredRequests = useSelector(state => state.requests.filteredRequests); 
    const requestsList = useSelector(state => state.requests.requestsList); 

    function activeRequestsDetailsModal(request) {
        setSelectedRequest(request);
        setIsModalVisible(true);
    }

    useEffect(() => {
        const localStorageRequests = JSON.parse(localStorage.getItem('requests'));
        if (localStorageRequests) {
            dispatch(clearRequests());
            localStorageRequests.forEach((item) => dispatch(addRequests(item)));
        } else {
            localStorage.setItem('requests', JSON.stringify(requestMockData));
            requestMockData.forEach((item) => dispatch(addRequests(item)));
        }
    }, [dispatch]); 

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
