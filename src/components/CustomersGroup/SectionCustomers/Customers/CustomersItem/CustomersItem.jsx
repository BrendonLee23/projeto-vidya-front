import { CustomersCard, CustomersDescription } from "./CustomersItem-Styles";

export default function CustomersItem(props) {

    const { initials, name, cnpj, onClick } = props;

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