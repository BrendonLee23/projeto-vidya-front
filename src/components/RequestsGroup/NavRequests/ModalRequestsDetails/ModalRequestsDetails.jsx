import { Modal, ModalInfos, ModalTitle, Overlay } from "./ModalRequestsDetails-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
/* import BigImage from "../../../../assets/images/bigImage.svg"; */

export default function ModalRequestsDetails(props) {
    const { request, activeRequestsDetailsModal } = props;

    if (!request) {
        return null; 
    }

    const {image, name, price, description } = request;

        // Converte o preço para número e formata como reais
        const formattedPrice = Number(price.replace(',', '.')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Detalhes do produto</h2>
                        <img onClick={activeRequestsDetailsModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <ModalInfos>
                        <img src={image} alt="" />
                        <div>
                            <h2>{name}</h2>
                            <h3>{formattedPrice}</h3>
                            <p>{description}</p>
                        </div>
                    </ModalInfos>
                </Modal>
            </Overlay>
        </>
    )
}