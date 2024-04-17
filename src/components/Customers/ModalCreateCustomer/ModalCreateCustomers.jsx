import { Footer, Modal, ModalForms, ModalTitle, Overlay, SaveButton } from "./ModalCreateCustomers-Styles";
import CloseIcon from "../../../assets/images/close.svg";

export default function CreateCustomers(props) {

    const {activeCreateDataModal} = props;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Cadastrar cliente</h2>
                        <img onClick={activeCreateDataModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalForms>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
                            <input type="text" />
                        </div>
                        <div>
                            <h1>Nome</h1>
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