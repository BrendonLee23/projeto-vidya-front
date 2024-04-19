import { useState } from "react";
import ModalCustomersDetails from "../../NavCustomers/ModalCustomersDetails/ModalCustomersDetails";
import { CustomersList } from "./CustomersTable-Styles";
import CustomersItem from "./CustomersItem/CustomersItem";
import { customerData } from "../../../../utils/CustomerAssets";

export default function CustomersTable() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    function activeDetailsCustomersModal(customer) {
        setSelectedCustomer(customer);
        setIsModalVisible(true);
    }

    return (
        <>
            <CustomersList>
                {customerData.map((customer, index) => (
                    <CustomersItem
                        key={index}
                        customer={customer}
                        onClick={() => activeDetailsCustomersModal(customer)}
                    />
                ))}
            </CustomersList>
            {isModalVisible && (
                <ModalCustomersDetails
                    customer={selectedCustomer}
                    activeDetailsCustomersModal={() => setIsModalVisible(false)}
                />
            )}
        </>
    )
}
