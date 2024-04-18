import HeaderOrders from "../components/OrdersGroup/HeaderOrders/HeaderOrders";
import NavOrders from "../components/OrdersGroup/NavOrders/NavOrders";
import SectionOrders from "../components/OrdersGroup/SectionOrders/SectionOrders";

export default function OrdersPage(){
    return(
        <>
            <HeaderOrders />
            <NavOrders/>
            <SectionOrders/>
        </>
    )
}