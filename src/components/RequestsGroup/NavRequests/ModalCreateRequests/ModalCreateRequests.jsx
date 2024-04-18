import { Footer, Modal, ModalTitle, Overlay, SaveButton, SearchArea } from "./ModalCreateRequests-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import { styled } from "styled-components";
import Upload from "../../../../assets/images/upload.svg";

export default function ModalCreateRequests(props) {

    const { activeCreateRequestsModal } = props;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Cadastrar produto</h2>
                        <img onClick={activeCreateRequestsModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <SearchArea>
                        <NameAndPrice>
                            <Name>
                                <h1>Nome</h1>
                                <input type="text" />
                            </Name>
                            <Price>
                                <h1>Preço</h1>
                                <input type="text" placeholder="0,00" />
                            </Price>
                        </NameAndPrice>
                    </SearchArea>
                    <Description>
                        <h1>Descrição</h1>
                        <input type="text" />
                    </Description>
                    <ImageInput>
                        <h1>Foto do produto</h1>
                        <div>
                            <img src={Upload} alt="Upload" />
                            <h2>JPG e PNG, somente</h2>
                        </div>
                    </ImageInput>
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

const NameAndPrice = styled.div`
    display: flex;
    gap:20px;
`
const Name = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    input{
        width: 300px;
        height: 40px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #c3c8cd;
        border-radius: 8px;
    }
`
const Price = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    input{
        width: 300px;
        height: 40px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #c3c8cd;
        border-radius: 8px;
    }
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 20px;
    h1{
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.52px;
    text-align: left;
    color:#1F2024;
    }
    input{
        width:100%;
        height:106px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #c3c8cd;
        border-radius: 8px;
    }
`
const ImageInput = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 20px;
    h1{
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.52px;
    text-align: left;
    color:#1F2024;
    }
    div{
        width: 100%;
        height: 129px;
        border: 5px dashed #C5C6CC;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:10px;
        cursor: pointer;
    }
    img{
        width: 180px;
        height: 30px;
    }
    h2{
        font-family: Ubuntu;
        font-size: 12px;
        font-weight: 400;
        line-height: 13.79px;
        text-align: left;
        color:#949597;
    }
`



