# Projeto Vidya Front End
A aplicação frontend é construída com React, utilizando Vite como ferramenta de desenvolvimento. Apresenta uma tela possibilitando a navegação entre as areas de Clientes, Produtos e Serviços.

# Versão Demo - Deploy 
[Link do projeto](https://projeto-vidya-front-q0515qic9-brendonlee23s-projects.vercel.app/)

# Como funciona?
Este projeto é uma aplicação front-end desenvolvida em React com Vite, destinada a exibir e gerenciar informações de Clientes, Pedidos e Produtos. A Aplicação exibe uma intervace iterativa que possibilita o usuário nagevar entre as telas de Clientes Pedidos e Produtos, podendo filtrar informações, exibir detalhes e cadastrar novos dados, que serão exibidos em seguida, proporcionando uma experiência de usuário personalizada.

#### Tela de Pedidos: 
- Apresenta os dados de todos os pedidos disponíveis;
- Caso uma busca filtrada seja executada, a tabela exibe somente o resultado relacionado;
- Em caso de falha na busca de dados, é exibido um alerta informando o erro para o usuário;
- É possível cadastrar novos pedidos na lista, a partir de informações de Clientes e Produtos;

#### Tela de Clientes:
- Apresenta os dados de todos os clientes cadastrados;
- Caso uma busca filtrada seja executada, a tabela exibe somente o resultado relacionado;
- Em caso de falha na busca de dados, é exibido um alerta informando o erro para o usuário;
- É possível realizar o cadastro de novos clientes;
- É possível exibir um detalhamento específico ao clicar em um único cliente;

#### Tela de Produtos:
- Apresenta os dados de todos os produtos disponíveis;
- Caso uma busca filtrada seja executada, a tabela exibe somente o resultado relacionado;
- Em caso de falha na busca de dados, é exibido um alerta informando o erro para o usuário;
- É possível realizar o cadastro de novos produtos;
- É possível exibir um detalhamento específico ao clicar em um único produto;

#### Campo de Pesquisa - Busca Filtrada
- Possui um input para busca de pedidos, clientes e produtos, buscados no localStorage e renderizados na tabela;
- Em caso de sucesso, o usuário recebe uma busca filtrada com os dados relacionados a pesquisa;
- Em caso de falha é exibido um alerta informando o erro para o usuário;
- Se a busca for feita com o campo de pesquisa vazio um alerta informa o erro para o usuário.

# Motivação 

Minha motivação foi desenvolver uma aplicação eficiente que exibe informações dinâmicas, permitindo uma busca filtrada para melhorar a experiência do usuário. Isso não apenas torna a aplicação mais eficiente, mas também oferece uma interação intuitiva e facilita a localização rápida de informações relevantes, contribuindo para uma experiência de usuário mais satisfatória.

# Tecnologias Utilizadas
Para este projeto foram utilizadas:

  - React;
  - Vite;
  - Axios;
  - Eslint;
  - Styled Components;
  - Redux Toolkit;
  - React Hook Form;
  - React Router;
  - Yup;
  - localStorage;

# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento é necessário seguir os passos abaixo:

- Clonar o repositório do projeto;
- Baixar as dependências necessárias com o comando: npm install;
- Para rodar o projeto em desenvolvimento, execute o comando npm run dev.

---


