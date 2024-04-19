import { getInitials } from "../../../../../utils/GetInitialsFunction";
import { CustomersCard, CustomersDescription } from "./CustomersItem-Styles";

export default function CustomersItem({ customer, onClick }) {
    const { nome, cnpj } = customer;
    console.log(nome);
    const initials = getInitials(nome);

    return (
        <>
            <CustomersCard onClick={onClick}>
                <h1>{initials}</h1>
                <CustomersDescription>
                    <h2>{nome}</h2>
                    <h3>{cnpj}</h3>
                </CustomersDescription>
            </CustomersCard>
        </>
    )
}
