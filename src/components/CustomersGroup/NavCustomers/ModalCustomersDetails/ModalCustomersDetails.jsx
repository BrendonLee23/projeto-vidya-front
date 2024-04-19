import { Modal, ModalInfos, ModalTitle, Overlay } from "./ModalCustomersDetails-Styles";
import CloseIcon from "../../../../assets/images/close.svg";

export default function ModalCustomersDetails(props) {
    const { customer, activeDetailsCustomersModal } = props;

    if (!customer) {
        return null; 
    }

    const { nome, cnpj, telefone, cep, estado, cidade, bairro, numero, endereco } = customer;


    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>{nome}</h2>
                        <img onClick={activeDetailsCustomersModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalInfos>
                        <div>
                            <h2>CNPJ</h2>
                            <h3>{cnpj}</h3>
                        </div>
                        <div>
                            <h2>Telefone</h2>
                            <h3>{telefone}</h3>
                        </div>
                        <div>
                            <h2>CEP</h2>
                            <h3>{cep}</h3>
                        </div>
                        <div>
                            <h2>Estado</h2>
                            <h3>{estado}</h3>
                        </div>
                        <div>
                            <h2>Cidade</h2>
                            <h3>{cidade}</h3>
                        </div>
                        <div>
                            <h2>Bairro</h2>
                            <h3>{bairro}</h3>
                        </div>
                        <div>
                            <h2>Número</h2>
                            <h3>{numero}</h3>
                        </div>
                        <div>
                            <h2>Endereço</h2>
                            <h3>{endereco}</h3>
                        </div>
                    </ModalInfos>
                </Modal>
            </Overlay>
        </>
    )
}
