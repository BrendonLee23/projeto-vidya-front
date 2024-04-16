import { styled } from "styled-components"

export default function Nav(){
    return(
        <StyledNav>
            Nav
        </StyledNav>
    )
}

const StyledNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: auto;
    background-color: #014078;
    margin: 20px 30px 20px 30px;
    border-radius: 8px;
`