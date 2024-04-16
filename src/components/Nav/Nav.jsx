import { styled } from "styled-components"
import SearchIcon from "../../assets/images/search.svg"
import AddIcon from "../../assets/images/iconAdd.svg"

export default function Nav(){



    return(
        <StyledNav>
            <StyledInput>
            <input type="text" placeholder="Pesquisar" />
            <img src={SearchIcon} alt="SearchIcon" />
            </StyledInput>
            <StyledButton>
                <img src={AddIcon} alt="AddIcon" />
                <p>Novo Cliente</p>
            </StyledButton>
        </StyledNav>
    )
}


const StyledNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: auto;
    background-color: #FFFFFF;
    padding: 0px 20px 0px 20px;
    margin: 20px 30px 20px 30px;
    border-radius: 8px;
`

const StyledInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    input{
        width: 300px;
        height: 40px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #5D6570;
        border-radius: 8px;
        position: relative;

    }
    input::placeholder {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        padding-left: 13px;
    }
    img{
        position: absolute;
        margin-right: 20px;
        cursor: pointer;
    }
`
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