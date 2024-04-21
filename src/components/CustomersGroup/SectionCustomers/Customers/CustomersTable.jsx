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
        // Verifica se já existem clientes salvos no armazenamento local
        const localStorageCustomers = JSON.parse(localStorage.getItem('customers'));
        if (localStorageCustomers) {
            // Limpa a lista de clientes antes de adicionar os novos dados
            dispatch(clearCustomers());
            // Adiciona os dados do armazenamento local à lista de clientes
            localStorageCustomers.forEach((item) => dispatch(addCustomer(item)));
        } else {
            // Se não houver, salva os dados mockados no armazenamento local
            localStorage.setItem('customers', JSON.stringify(customerData));
            // Adiciona os dados mockados à lista de clientes
            customerData.forEach((item) => dispatch(addCustomer(item)));
        }
    }, [dispatch]); // Adicione o dispatch como dependência para evitar avisos do ESLint

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
