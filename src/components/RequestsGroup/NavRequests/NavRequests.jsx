import { useState } from "react";
import { useDispatch } from "react-redux";
import SearchIcon from "../../../assets/images/search.svg";
import { StyledInput, StyledNav } from "./NavRequests-Styles";
import { filterRequests } from "../../../tools/requestsSlice";
import CreateRequestsButton from "./CreateRequestsButton/CreateRequestsButton";
export default function NavRequests() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        console.log(searchTerm)
        dispatch(filterRequests(searchTerm.trim())); // Aplica o filtro de busca
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value); // Atualiza o termo de busca conforme o usuário digita
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            dispatch(filterRequests(searchTerm.trim())); // Aplica o filtro de busca quando Enter for pressionado
        }
    };

    return (
        <StyledNav>
            <StyledInput>
                <input
                    type="text"
                    placeholder="Pesquisar"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress} // Ativa a pesquisa quando Enter é pressionado
                />
                <img
                    src={SearchIcon}
                    alt="SearchIcon"
                    onClick={handleSearch} // Ativa a pesquisa quando o ícone de pesquisa é clicado
                    style={{ cursor: "pointer" }} // Adiciona estilo de cursor para indicar que é clicável
                />
            </StyledInput>
            <CreateRequestsButton/>
        </StyledNav>
    );
}
