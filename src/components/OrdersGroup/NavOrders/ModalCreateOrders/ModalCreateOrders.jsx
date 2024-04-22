import React, { useState, useEffect } from "react";
import CloseIcon from "../../../../assets/images/close.svg";
import { CustomerList, Footer, Modal, ModalTitle, Overlay, ProductList, SaveButton, SelectArea, StyledInput, Product, Details, Resume, Quantity, Price, TitleProduct, Total } from "./ModalCreateOrders-Styles";
import SearchIcon from "../../../../assets/images/search.svg";
import Image from "../../../../assets/images/Image.svg";
import Minus from "../../../../assets/images/Minus.svg";
import Add from "../../../../assets/images/Add.svg";
import { styled } from "styled-components";

export default function ModalCreateOrders(props) {
    const { activeCreateOrdersModal } = props;
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [isCustomerListVisible, setIsCustomerListVisible] = useState(false);
    const [isProductListVisible, setIsProductListVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Estado para armazenar o produto selecionado
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Carregar clientes do localStorage ou de outra fonte de dados
        const customersFromStorage = JSON.parse(localStorage.getItem("customers")) || [];
        setCustomers(customersFromStorage);
    
        // Carregar produtos do localStorage ou de outra fonte de dados
        const productsFromStorage = JSON.parse(localStorage.getItem("requests")) || [];
        // Inicializar a propriedade "quantity" como zero para todos os produtos
        const productsWithQuantity = productsFromStorage.map(product => ({ ...product, quantity: 0 }));
        setProducts(productsWithQuantity);
        setFilteredProducts(productsWithQuantity); // Exibir todos os produtos inicialmente
    }, []);
    

    const handleInputChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchInput(searchTerm);
        // Filtrar os produtos com base na pesquisa
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        setFilteredProducts(filtered);
        setIsProductListVisible(true);
    };

    const handleSelectCustomer = (customer) => {
        setSelectedCustomer(customer);
        setIsCustomerListVisible(false);
    };

    const handleToggleProduct = (product) => {
        if (selectedProduct === product) {
            setSelectedProduct(null); // Desseleciona o produto se ele já estiver selecionado
        } else {
            setSelectedProduct(product); // Seleciona o produto clicado
        }
    };

    const handleQuantityChange = (product, amount) => {
        const updatedProducts = filteredProducts.map(p => {
            if (p.id === product.id) {
                // Verifica se a quantidade é positiva antes de adicionar
                const newQuantity = Math.max(0, p.quantity + amount);
                return { ...p, quantity: newQuantity };
            }
            return p;
        });
        setFilteredProducts(updatedProducts);
    };
    
    
    
    
    
    

    return (
        <Overlay>
            <Modal>
                <ModalTitle>
                    <h2>Cadastro de pedido</h2>
                    <img onClick={activeCreateOrdersModal} src={CloseIcon} alt="CloseIcon" />
                </ModalTitle>
                <SelectArea>
                    <div>
                        <input
                            type="text"
                            placeholder="Selecionar cliente"
                            value={selectedCustomer}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onFocus={() => setIsCustomerListVisible(true)}
                        />
                        {isCustomerListVisible && (
                            <CustomerList>
                                {customers.map((customer) => (
                                    <li key={customer.id} onClick={() => handleSelectCustomer(customer.name)}>
                                        {customer.name}
                                    </li>
                                ))}
                            </CustomerList>
                        )}
                    </div>
                    <ProductArea>
                        <h1>Produtos</h1>
                        <StyledInput>
                            <input
                                type="text"
                                placeholder="Pesquisar produtos"
                                value={searchInput}
                                onChange={handleInputChange}
                                onFocus={() => setIsProductListVisible(true)}
                            />
                            <img src={SearchIcon} alt="SearchIcon" />
                        </StyledInput>
                        {isProductListVisible && (
                            <ProductList>
                                {filteredProducts.map((product) => (
                                    <Product key={product.id} onClick={() => handleToggleProduct(product)}>
                                        <img src={product.image} alt="Product" />
                                        <Details>
                                            <TitleProduct>
                                                <h1>{product.name}</h1>
                                                <h2>Cód. {product.code}</h2>
                                            </TitleProduct>
                                            <Resume>
                                                <Quantity>
                                                    <img src={Minus} alt="Subtract" onClick={() => handleQuantityChange(product, -1)} />
                                                    <h1>{product.quantity}</h1>
                                                    <img src={Add} alt="Add" onClick={() => handleQuantityChange(product, 1)} />
                                                </Quantity>
                                                <Price>
                                                    R$ {product.price}
                                                </Price>
                                            </Resume>
                                        </Details>
                                    </Product>
                                ))}
                            </ProductList>
                        )}
                    </ProductArea>
                </SelectArea>
                <Footer>
                    <Total>
                        <h1>Total:</h1>
                        {/* Verificar se há produtos antes de calcular o total */}
                        <h2>R$ 0.00 </h2>
                    </Total>
                    <SaveButton>
                        <p>Salvar</p>
                    </SaveButton>
                </Footer>
            </Modal>
        </Overlay>
    );
}

const ProductArea = styled.div`
    display: flex;
    flex-direction: column;
`;
