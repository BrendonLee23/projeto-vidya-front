import { styled } from "styled-components";

export const Overlay = styled.div`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9998;
            display: flex;
            justify-content: center;
            align-items: center;
            `
export const Modal = styled.form`
    width: 670px;
    height: 605px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    z-index: 9999;
    p{
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.01em;
        text-align: left;
        color:#f30505;
    }
`
export const ModalTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid #c9c8c8;
    padding: 0px 25px 0px 25px;
    h2{
        font-family: Inter;
        font-size: 15px;
        font-weight: 800;
        line-height: 16.94px;
        text-align: center;
    }
    img{
        width: 20px;
        height: 20px;
        cursor: pointer;
    }
`
export const SearchArea = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
    padding: 0px 25px 25px 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 23px;
    h1{
        color:#2F3036;
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 14.52px;
        text-align: left;
    }
    input{
        width: 300px;
        height: 48px;
        padding: 12px 16px;
        border-radius: 12px;
        background-color: #FFFFFF;
        border: 1px solid #858c96;
    }
`
export const NameAndPrice = styled.div`
    display: flex;
    gap:20px;
`
export const Name = styled.div`
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
export const Price = styled.div`
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
export const Description = styled.div`
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
        height:76px;
        padding: 19px 16px;
        background-color: #FFFFFF;
        border: 1px solid #c3c8cd;
        border-radius: 8px;
    }
`
export const ImageInput = styled.div`
    position: relative; /* Define o contexto de posicionamento para os elementos filhos */
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 20px;
    h1 {
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 14.52px;
        text-align: left;
        color: #1F2024;
    }
    div {
        position: relative; /* Define o contexto de posicionamento para os elementos filhos */
        width: 100%;
        height: 149px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px; /* Espaçamento entre a imagem e o texto */
    }
    input {
    position: relative; /* Garante que o input permaneça acima do plano de fundo */
    z-index: 1; /* Coloca o input acima dos elementos absolutamente posicionados */
    width: 100%;
    height: 149px;
    border: 5px dashed #C5C6CC;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* Alinha o conteúdo do input ao topo */
    padding-top: 20px; /* Adiciona espaço no topo do input */
    gap: 10px;
}

    img, h2 {
        position: absolute; /* Posiciona a imagem e o h2 absolutamente */
        top: 50%; /* Alinha verticalmente ao centro */
        left: 50%; /* Alinha horizontalmente ao centro */
        transform: translate(-50%, -50%); /* Centraliza o elemento */
        z-index: 2; /* Coloca a imagem e o h2 acima do input */
        pointer-events: none; /* Impede que os elementos sejam clicáveis */
    }
    img {
        margin-bottom: 20px; /* Adiciona espaçamento abaixo da imagem */
        width: 180px;
        height: 30px;
    }
    h2 {
        margin-top: 30px; /* Adiciona espaçamento acima do texto h2 */
        font-family: Ubuntu;
        font-size: 12px;
        font-weight: 400;
        line-height: 13.79px;
        text-align: left;
        color: #949597;
    }
`;

// Resto do seu código permanece o mesmo

export const SaveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 35px;
    background-color: blue;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    p{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0.10000000149011612px;
        text-align: center;
        color: white
    }
`
export const Footer = styled.div`
    height: 60px;
    border-top: 1px solid #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 30px;
    padding-left: 30px;
`

