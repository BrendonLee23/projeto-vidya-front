import { RequestsCard, RequestsDescription } from "./RequestsItem-Styles";

export default function RequestsItem({ request, onClick }) {
    const { image, name, price } = request;

    if (!request) {
        return null; 
    }

    // Converte o preço para número e formata como reais
    const formattedPrice = Number(price.replace(',', '.')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <>
            <RequestsCard onClick={onClick}>
                <img src={image} alt="ProdImage" />
                <RequestsDescription>
                    <h1>{name}</h1>
                    <h2>{formattedPrice}</h2>
                </RequestsDescription>
            </RequestsCard>
        </>
    );
}
