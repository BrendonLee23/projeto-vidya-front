import { styled } from "styled-components"

export const OrdersList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 460px;
/*     background-color: #fff204; */
    border-radius: 8px;
    overflow: auto; 
`
export const OrdersCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 310px;
    height: 99px;
    background-color:#FFFFFF;
    border-radius: 8px;
    padding-left: 20px;
    margin-bottom: 14px;
    gap: 20px;
    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 16px;
        font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        color: #FFFFFF;
        background-color: #F37272;
    }
    h4{
        font-family: Inter;
        font-size: 14px;
        font-weight: 800;
        line-height: 16.94px;
        text-align: left;
        color: #1F2024;
    }
;
`
export const OrdersDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap:5px;
    margin-right: 5px;
    h2{
        font-family: Inter;
        font-size: 12px;
        font-weight: 700;
        line-height: 14.52px;
        text-align: left;
        color:#1F2024;
    }
    h3{
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0.01em;
        text-align: left;
        color:#71727A;
    }
`