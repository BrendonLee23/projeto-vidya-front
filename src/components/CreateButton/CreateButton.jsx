import { useContext } from "react"
import { InfoContext } from "../../contexts/InfoContext"
import AddIcon from "../../assets/images/iconAdd.svg"
import { styled } from "styled-components"

export default function CreateButton() {

    const { activeButton} = useContext(InfoContext)

    return (
        <>
            <StyledButton>
                <img src={AddIcon} alt="AddIcon" />
                {activeButton === "customers" ? <p>Novo Cliente</p> : activeButton === "orders" ? <p>Novo Pedido</p> : activeButton === "requests" ? <p>Novo Produto</p> : null}
            </StyledButton>
        </>
    )
}

const StyledButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #006FFD;
    width: 160px;
    height: 40px;
    padding: 10px 24px 10px 16px;
    gap: 11px;
    border-radius: 5px;
    opacity: 0px;
    cursor: pointer;
p{
    font-family: Roboto;
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.10000000149011612px;
    text-align: center;
    }
`