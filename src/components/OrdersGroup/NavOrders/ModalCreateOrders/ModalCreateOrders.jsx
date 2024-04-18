import { Footer, Modal, ModalTitle, Overlay, ProductList, SaveButton, SelectArea, StyledInput } from "./ModalCreateOrders-Styles";
import CloseIcon from "../../../../assets/images/close.svg";
import { styled } from "styled-components";
import SearchIcon from "../../../../assets/images/search.svg";
import Image from "../../../../assets/images/Image.svg";
import Minus from "../../../../assets/images/Minus.svg";
import Add from "../../../../assets/images/Add.svg";

export default function ModalCreateOrders(props) {

    const { activeCreateOrdersModal } = props;

    return (
        <>
            <Overlay>
                <Modal>
                    <ModalTitle>
                        <h2>Cadrastro de pedido</h2>
                        <img onClick={activeCreateOrdersModal} src={CloseIcon} alt="CloseIcon" />
                    </ModalTitle>
                    <SelectArea>
                        <div>
                            <input type="search" placeholder="Selecionar cliente" />
                        </div>
                        <div>
                            <h1>Produtos</h1>
                            <StyledInput>
                                <input type="text" placeholder="Pesquisar produtos" />
                                <img src={SearchIcon} alt="SearchIcon" />
                            </StyledInput>
                        </div>
                    </SelectArea>
                    <ProductList>
                        <Product>
                            <img src={Image} alt="Image" />
                            <Details>
                                <TitleProduct>
                                    <h1>Produto</h1>
                                    <h2>Cód. 1</h2>
                                </TitleProduct>
                                <Resume>
                                    <Quantity>
                                        <img src={Minus} alt="Sub" />
                                        <h1>1</h1>
                                        <img src={Add} alt="Add" />
                                    </Quantity>
                                    <Price>
                                        R$ 9,99
                                    </Price>
                                </Resume>
                            </Details>
                        </Product>
                        <Product>
                            <img src={Image} alt="Image" />
                            <Details>
                                <TitleProduct>
                                    <h1>Produto</h1>
                                    <h2>Cód. 1</h2>
                                </TitleProduct>
                                <Resume>
                                    <Quantity>
                                        <img src={Minus} alt="Sub" />
                                        <h1>1</h1>
                                        <img src={Add} alt="Add" />
                                    </Quantity>
                                    <Price>
                                        R$ 9,99
                                    </Price>
                                </Resume>
                            </Details>
                        </Product>
                        <Product>
                            <img src={Image} alt="Image" />
                            <Details>
                                <TitleProduct>
                                    <h1>Produto</h1>
                                    <h2>Cód. 1</h2>
                                </TitleProduct>
                                <Resume>
                                    <Quantity>
                                        <img src={Minus} alt="Sub" />
                                        <h1>1</h1>
                                        <img src={Add} alt="Add" />
                                    </Quantity>
                                    <Price>
                                        R$ 9,99
                                    </Price>
                                </Resume>
                            </Details>
                        </Product>
                        <Product>
                            <img src={Image} alt="Image" />
                            <Details>
                                <TitleProduct>
                                    <h1>Produto</h1>
                                    <h2>Cód. 1</h2>
                                </TitleProduct>
                                <Resume>
                                    <Quantity>
                                        <img src={Minus} alt="Sub" />
                                        <h1>1</h1>
                                        <img src={Add} alt="Add" />
                                    </Quantity>
                                    <Price>
                                        R$ 9,99
                                    </Price>
                                </Resume>
                            </Details>
                        </Product>
                        <Product>
                            <img src={Image} alt="Image" />
                            <Details>
                                <TitleProduct>
                                    <h1>Produto</h1>
                                    <h2>Cód. 1</h2>
                                </TitleProduct>
                                <Resume>
                                    <Quantity>
                                        <img src={Minus} alt="Sub" />
                                        <h1>1</h1>
                                        <img src={Add} alt="Add" />
                                    </Quantity>
                                    <Price>
                                        R$ 9,99
                                    </Price>
                                </Resume>
                            </Details>
                        </Product>
                        <Product>
                            <img src={Image} alt="Image" />
                            <Details>
                                <TitleProduct>
                                    <h1>Produto</h1>
                                    <h2>Cód. 1</h2>
                                </TitleProduct>
                                <Resume>
                                    <Quantity>
                                        <img src={Minus} alt="Sub" />
                                        <h1>1</h1>
                                        <img src={Add} alt="Add" />
                                    </Quantity>
                                    <Price>
                                        R$ 9,99
                                    </Price>
                                </Resume>
                            </Details>
                        </Product>
                    </ProductList>
                    <Footer>
                        <Total>
                            <h1>Total:</h1>
                            <h2>R$ 49,99</h2>
                        </Total>
                        <SaveButton>
                            <p>Salvar</p>
                        </SaveButton>
                    </Footer>
                </Modal>
            </Overlay>
        </>
    )
}


const Product = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 100px;
    gap: 0px;
    border-radius: 16px;
    border: 1px solid #D4D6DD;
    opacity: 0px;
    img{
        width: 88px;
        height: 100px;
        margin-right: 20px;
    }
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 180px;
    div{
        display: flex;
    }
`
const Resume = styled.div`
    display: flex;
    justify-content: space-between;
`

const Quantity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    gap: 5px;
    img{
        margin-right: 6px;
        width: 24px;
        height: 24px;
        cursor:pointer; 
    }
    h1{
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        color:#1F2024;
        margin-right: 6px;
    }

`
const Price = styled.h1`
    display:flex;
    align-items: end;
    justify-content: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 800;
    line-height: 16.94px;
    text-align: left;
    color:#1F2024;
    padding-bottom:5px;
    padding-right: 10px;
`
const TitleProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 205px;
    height: 35px;
    gap: 4px;
    h1{
    font-family: Inter;
    font-size: 12px;
    font-weight: 700;
    line-height: 14.52px;
    text-align: left;
    color:#1F2024;
    }
    h2{
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #71727A;
    }
`
const Total = styled.div`
    display: flex;
    gap: 10px;
    h1{
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
        color:#1ABC00
    }
    h2{
        font-family: Inter;
        font-size: 16px;
        font-weight: 900;
        line-height: 19.36px;
        letter-spacing: 0.005em;
        text-align: left;
        color:#1F2024;
    }
`