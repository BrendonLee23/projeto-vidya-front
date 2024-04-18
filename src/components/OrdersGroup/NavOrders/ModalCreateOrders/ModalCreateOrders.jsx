import { Footer, Modal, ModalForms, ModalTitle, Overlay, SaveButton } from "./ModalCreateOrders-Styles";
import CloseIcon from "../../../../assets/images/close.svg";

export default function ModalCreateOrders(props) {

    const {activeCreateOrdersModal} = props;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Cadrastro de pedido</h2>
                        <img onClick={activeCreateOrdersModal} src={CloseIcon} alt="CloseIcon" />
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