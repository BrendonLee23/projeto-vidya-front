import { Modal, ModalInfos, ModalTitle, Overlay } from "./ModalCustomersDetails-Styles";
import CloseIcon from "../../../../assets/images/close.svg";

export default function ModalCustomersDetails(props) {
    const { customer, activeDetailsCustomersModal } = props;

    if (!customer) {
        return null; 
    }

    const { name, cnpj, phone, cep, state, city, neighborhood, number, address } = customer.details;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>{name}</h2>
                        <img onClick={activeDetailsCustomersModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalInfos>
                        <div>
                            <h2>CNPJ</h2>
                            <h3>{cnpj}</h3>
                        </div>
                        <div>
                            <h2>Telefone</h2>
                            <h3>{phone}</h3>
                        </div>
                        <div>
                            <h2>CEP</h2>
                            <h3>{cep}</h3>
                        </div>
                        <div>
                            <h2>Estado</h2>
                            <h3>{state}</h3>
                        </div>
                        <div>
                            <h2>Cidade</h2>
                            <h3>{city}</h3>
                        </div>
                        <div>
                            <h2>Bairro</h2>
                            <h3>{neighborhood}</h3>
                        </div>
                        <div>
                            <h2>Número</h2>
                            <h3>{number}</h3>
                        </div>
                        <div>
                            <h2>Endereço</h2>
                            <h3>{address}</h3>
                        </div>
                    </ModalInfos>
                </Modal>
            </Overlay>
        </>
    )
}
