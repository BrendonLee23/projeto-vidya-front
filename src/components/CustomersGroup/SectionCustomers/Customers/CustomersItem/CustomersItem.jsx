import { getInitials } from "../../../../../utils/GetInitialsFunction";
import { CustomersCard, CustomersDescription } from "./CustomersItem-Styles";

export default function CustomersItem({ customer, onClick }) {
    console.log(customer)
    const { name, cnpj } = customer;
    const initials = getInitials(name);

    return (
        <>
            <CustomersCard onClick={onClick}>
                <h1>{initials}</h1>
                <CustomersDescription>
                    <h2>{name}</h2>
                    <h3>{cnpj}</h3>
                </CustomersDescription>
            </CustomersCard>
        </>
    )
}
