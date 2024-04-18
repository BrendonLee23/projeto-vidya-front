import { Modal, ModalInfos, ModalTitle, Overlay } from "./ModalRequestsDetails-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import BigImage from "../../../../assets/images/bigImage.svg";

export default function ModalRequestsDetails(props) {

    const {activeRequestsDetailsModal} = props;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Detalhes do produto</h2>
                        <img onClick={activeRequestsDetailsModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalInfos>
                        <img src={BigImage} alt="" />
                        <div>
                            <h2>Produto</h2>
                            <h3>R$ 23,99</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut diam sed metus commodo egestas. Nam pellentesque neque tortor. Donec nunc nunc, tempus eu luctus at, semper a magna. Pellentesque auctor accumsan sem id eleifend. Pellentesque venenatis nunc vel eros mollis tristique. Nam et erat tristique velit scelerisque rhoncus. Donec bibendum, elit in viverra blandit, enim velit pharetra ex, id lacinia justo elit eu velit. Integer porta auctor quam dapibus varius. Etiam scelerisque ullamcorper risus at pretium.</p>
                        </div>
                    </ModalInfos>
                </Modal>
            </Overlay>
        </>
    )
}