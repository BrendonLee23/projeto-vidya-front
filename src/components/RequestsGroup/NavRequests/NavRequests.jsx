import SearchIcon from "../../../assets/images/search.svg"
import CreateRequestsButton from "./CreateRequestsButton/CreateRequestsButton"
import { StyledInput, StyledNav } from "./NavRequests-Styles"

export default function NavRequests(){

    return(
        <StyledNav>
            <StyledInput>
            <input type="text" placeholder="Pesquisar" />
            <img src={SearchIcon} alt="SearchIcon" />
            </StyledInput>
            <CreateRequestsButton/>
        </StyledNav>
    )
}


