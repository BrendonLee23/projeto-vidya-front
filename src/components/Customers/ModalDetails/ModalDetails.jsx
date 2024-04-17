import { Modal, ModalInfos, ModalTitle, Overlay } from "./ModalDetails-Styles";
import CloseIcon from "../../../assets/images/close.svg";

export default function ModalDetails(props) {

    const {activeDetailsModal} = props;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Brendo Moreira</h2>
                        <img onClick={activeDetailsModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalInfos>
                        <div>
                            <h2>CNPJ</h2>
                            <h3>00.000.000/0000-00</h3>
                        </div>
                        <div>
                            <h2>Telefone</h2>
                            <h3>(00) 0000-0000</h3>
                        </div>
                        <div>
                            <h2>CEP</h2>
                            <h3>12345-678</h3>
                        </div>
                        <div>
                            <h2>Estado</h2>
                            <h3>São Paulo</h3>
                        </div>
                        <div>
                            <h2>Cidade</h2>
                            <h3>Campinas</h3>
                        </div>
                        <div>
                            <h2>Bairro</h2>
                            <h3>Jardim das Flores</h3>
                        </div>
                        <div>
                            <h2>Número</h2>
                            <h3>123</h3>
                        </div>
                        <div>
                            <h2>Endereço</h2>
                            <h3>Rua das Palmeiras</h3>
                        </div>
                    </ModalInfos>
                </Modal>
            </Overlay>
        </>
    )
}