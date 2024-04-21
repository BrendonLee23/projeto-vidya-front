import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "../../../assets/images/search.svg";
import { StyledInput, StyledNav } from "./NavRequests-Styles";
import { filterRequests } from "../../../tools/requestsSlice";
import CreateRequestsButton from "./CreateRequestsButton/CreateRequestsButton";

export default function NavRequests() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const requestsList = useSelector(state => state.requests.requestsList);

    const handleSearch = () => {
        const trimmedSearchTerm = searchTerm.trim();

        if (trimmedSearchTerm === "") {
            alert("Por favor, insira um termo de pesquisa.");
            return;
        }

        const filteredRequests = requestsList.filter(request =>
            request.name.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
        );

        if (filteredRequests.length === 0) {
            alert("Nenhum pedido encontrado com o termo de pesquisa fornecido.");
            return;
        }

        dispatch(filterRequests(trimmedSearchTerm));
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleIconClick = () => {
        if (searchTerm.trim() === "") {
            alert("Por favor, insira um termo de pesquisa.");
            return;
        }
        handleSearch();
    };

    // Adicionando a lógica para recarregar a página quando o usuário esvaziar o input após uma pesquisa
    const handleInputBlur = () => {
        if (searchTerm.trim() === "") {
            window.location.reload(); // Recarrega a página
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
                    onKeyPress={handleKeyPress}
                    onBlur={handleInputBlur} // Adicionando o evento onBlur para detectar quando o input perde o foco
                />
                <img
                    src={SearchIcon}
                    alt="SearchIcon"
                    onClick={handleIconClick}
                />
            </StyledInput>
            <CreateRequestsButton/>
        </StyledNav>
    );
}
