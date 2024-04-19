import { useState } from "react";
import ModalCustomersDetails from "../../NavCustomers/ModalCustomersDetails/ModalCustomersDetails";
import { CustomersList } from "./CustomersTable-Styles";
import CustomersItem from "./CustomersItem/CustomersItem";
import { customerData } from "../../../../utils/CustomerAssets";

export default function CustomersTable() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    function activeDetailsCustomersModal() {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>
            <CustomersList>
            {customerData.map((customer, index) => (
                    <CustomersItem
                        key={index}
                        initials={customer.initials}
                        name={customer.name}
                        cnpj={customer.cnpj}
                        onClick={activeDetailsCustomersModal}
                    />
                ))}
            </CustomersList>
            {isModalVisible && (
                <ModalCustomersDetails activeDetailsCustomersModal={activeDetailsCustomersModal}/>
            )}
        </>
    )
}



