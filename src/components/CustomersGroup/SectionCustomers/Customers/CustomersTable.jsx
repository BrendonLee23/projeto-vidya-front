import { CustomersList } from "./CustomersTable-Styles";
import { useState, useEffect } from "react";
import ModalCustomersDetails from "../../NavCustomers/ModalCustomersDetails/ModalCustomersDetails";
import CustomersItem from "./CustomersItem/CustomersItem";
import { useDispatch, useSelector } from 'react-redux';
import { customerData } from "../../../../utils/CustomerMockData";
import { addCustomer } from "../../../../tools/customersSlice";

export default function CustomersTable() {
    const customers = useSelector(state => state.customers.customersList);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [storedCustomers, setStoredCustomers] = useState([]);
    const dispatch = useDispatch();

    function activeDetailsCustomersModal(customer) {
        setSelectedCustomer(customer);
        setIsModalVisible(true);
    }

    useEffect(() => {
        if (localStorage.getItem('customers') !== null) {
            const storedData = JSON.parse(localStorage.getItem('customers')) || [];
            setStoredCustomers(storedData);
            storedData.forEach((item) => dispatch( addCustomer(item)));
        }
        else {
            localStorage.setItem('customers', JSON.stringify(customerData));
        }
    }, []);

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
