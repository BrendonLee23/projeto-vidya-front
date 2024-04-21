import { getInitials } from "../../../../../utils/GetInitialsFunction";
import { CustomersCard, CustomersDescription } from "./CustomersItem-Styles";

export default function CustomersItem({ customer, onClick }) {
    if (!customer) return null; 
    const { name, cnpj } = customer;
    const initials = getInitials(name);
    console.log(name)
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
