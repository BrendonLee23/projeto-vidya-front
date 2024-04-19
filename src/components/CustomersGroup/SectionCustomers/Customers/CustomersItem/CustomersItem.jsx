import { CustomersCard, CustomersDescription } from "./CustomersItem-Styles";

export default function CustomersItem({ customer, onClick }) {
    const { initials, details } = customer;

    return (
        <>
            <CustomersCard onClick={onClick}>
                <h1>{initials}</h1>
                <CustomersDescription>
                    <h2>{details.name}</h2>
                    <h3>{details.cnpj}</h3>
                </CustomersDescription>
            </CustomersCard>
        </>
    )
}
