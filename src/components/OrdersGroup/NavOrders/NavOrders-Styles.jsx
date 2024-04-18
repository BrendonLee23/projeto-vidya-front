import { styled } from "styled-components"

export const StyledNav = styled.div`
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

export const StyledInput = styled.div`
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