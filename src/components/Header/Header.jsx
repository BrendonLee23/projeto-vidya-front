import { styled } from "styled-components"

export default function Header(){
    return(
        <StyledHeader>
            Header
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
`