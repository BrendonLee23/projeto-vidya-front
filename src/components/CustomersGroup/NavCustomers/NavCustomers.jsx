import { useState } from "react";
import SearchIcon from "../../../assets/images/search.svg";
import CreateCustomersButton from "./CreateCustomersButton/CreateCustomersButton";
import { StyledInput, StyledNav } from "./NavCustomers-Styles";
import { useDispatch, useSelector } from "react-redux";
import { filterCustomers } from "../../../tools/customersSlice";

export default function NavCustomers() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const customersList = useSelector(state => state.customers.customersList);

    const handleSearch = () => {
        const trimmedSearchTerm = searchTerm.trim();

        if (trimmedSearchTerm === "") {
            alert("Por favor, insira um termo de pesquisa.");
            return;
        }

        const filteredCustomers = customersList.filter(customer =>
            customer.name.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
        );

        if (filteredCustomers.length === 0) {
            alert("Nenhum cliente encontrado com o termo de pesquisa fornecido.");
            return;
        }

        dispatch(filterCustomers(trimmedSearchTerm));
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
                    onBlur={handleInputBlur}
                />
                <img
                    src={SearchIcon}
                    alt="SearchIcon"
                    onClick={handleIconClick}
                />
            </StyledInput>
            <CreateCustomersButton/>
        </StyledNav>
    );
}
