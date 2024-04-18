import { Footer, Modal, ModalForms, ModalTitle, Overlay, SaveButton } from "./ModalCreateCustomers-Styles";
import CloseIcon from "../../../../assets/images/close.svg";

export default function ModalCreateCustomers(props) {

    const {activeCreateCustomersModal} = props;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Cadastrar cliente</h2>
                        <img onClick={activeCreateCustomersModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalForms>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>CNPJ</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Telefone</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>CEP</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Estado</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Cidade</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Bairro</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Endereço</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Número</h1>
                            <input type="text" />
                        </div>
                    </ModalForms>
                    <Footer>
                        <SaveButton>
                            <p>Salvar</p>
                        </SaveButton>
                    </Footer>
                </Modal>
            </Overlay>
        </>
    )
}