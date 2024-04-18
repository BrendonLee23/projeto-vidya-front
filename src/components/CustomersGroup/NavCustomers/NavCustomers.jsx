import SearchIcon from "../../../assets/images/search.svg"
import CreateCustomersButton from "./CreateCustomersButton/CreateCustomersButton"
import { StyledInput, StyledNav } from "./NavCustomers-Styles"

export default function NavCustomers(){

    return(
        <StyledNav>
            <StyledInput>
            <input type="text" placeholder="Pesquisar" />
            <img src={SearchIcon} alt="SearchIcon" />
            </StyledInput>
            <CreateCustomersButton/>
        </StyledNav>
    )
}


