import SearchIcon from "../../../assets/images/search.svg"
import CreateButton from "../../CreateButton/CreateButton"
import CreateOrdersButton from "./CreateOrdersButton/CreateOrdersButton"
import { StyledInput, StyledNav } from "./NavOrders-Styles"

export default function NavOrders(){

    return(
        <StyledNav>
            <StyledInput>
            <input type="text" placeholder="Pesquisar" />
            <img src={SearchIcon} alt="SearchIcon" />
            </StyledInput>
            <CreateOrdersButton/>
        </StyledNav>
    )
}


