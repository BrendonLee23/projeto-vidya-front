import { useState } from "react";
import ModalCustomersDetails from "../../NavCustomers/ModalCustomersDetails/ModalCustomersDetails";
import { CustomersCard, CustomersDescription, CustomersList } from "./CustomersTable-Styles";
import CustomersItem from "./CustomersItem/CustomersItem";

import { useSelector } from 'react-redux';
import { customerData } from "../../../../utils/CustomerAssets";

export default function CustomersTable() {
    const customers = useSelector(state => state.customers.customersList);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    function activeDetailsCustomersModal(customer) {
        setSelectedCustomer(customer);
        setIsModalVisible(true);
    }

    return (
        <>
            <CustomersList>
                {customers.map((customer, index) => (
                    <CustomersItem
                        key={index}
                        customer={customer}
                        onClick={() => activeDetailsCustomersModal(customer)}
                    />
                ))}
                {customerData.map((data, index) => (
                    <CustomersCard key={index}>
                        <h1>{data.initials}</h1>
                        <CustomersDescription>
                            <h2>{data.details.name}</h2>
                            <h3>{data.details.cnpj}</h3>
                        </CustomersDescription>
                    </CustomersCard>
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
