import { styled } from "styled-components"

export default function Section() {
    return (
        <StyledSection>
            Section
        </StyledSection>
    )
}

const StyledSection = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    height: 350px;
    background-color: #3a2deb;
    margin: 20px 30px 20px 30px;
    border-radius: 8px;
`