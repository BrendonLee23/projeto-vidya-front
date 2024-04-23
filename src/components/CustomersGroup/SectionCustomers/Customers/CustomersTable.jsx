import { CustomersList } from "./CustomersTable-Styles";
import { useState, useEffect } from "react";
import ModalCustomersDetails from "../../NavCustomers/ModalCustomersDetails/ModalCustomersDetails";
import CustomersItem from "./CustomersItem/CustomersItem";
import { useDispatch, useSelector } from 'react-redux';
import { customerData } from "../../../../utils/CustomerMockData";
import { addCustomer, clearCustomers } from "../../../../tools/customersSlice";

export default function CustomersTable() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const dispatch = useDispatch();
    const filteredCustomers = useSelector(state => state.customers.filteredCustomers);
    const customersList = useSelector(state => state.customers.customersList);

    function activeDetailsCustomersModal(customer) {
        setSelectedCustomer(customer);
        setIsModalVisible(true);
    }

    useEffect(() => {

        const localStorageCustomers = JSON.parse(localStorage.getItem('customers'));
        if (localStorageCustomers) {
            dispatch(clearCustomers());
            localStorageCustomers.forEach((item) => dispatch(addCustomer(item)));
        } else {
            localStorage.setItem('customers', JSON.stringify(customerData));
            customerData.forEach((item) => dispatch(addCustomer(item)));
        }
    }, [dispatch]); 

    return (
        <>
            <CustomersList>
            {(filteredCustomers && filteredCustomers.length > 0 ? filteredCustomers : customersList).map((customer, index) => (
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
