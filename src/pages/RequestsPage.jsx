import HeaderRequests from "../components/RequestsGroup/HeaderRequests/HeaderRequests";
import NavRequests from "../components/RequestsGroup/NavRequests/NavRequests";
import SectionRequests from "../components/RequestsGroup/SectionRequests/SectionRequests";

export default function RequestsPage(){
    return(
        <>
            <HeaderRequests />
            <NavRequests/>
            <SectionRequests/>
        </>
    )
}