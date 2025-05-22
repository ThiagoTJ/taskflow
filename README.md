# TaskFlow

Dashboard moderno de gerenciamento de tarefas, feitas com React + Vite + TailwindCSS.

---

## Tecnologias usadas

- [React](https://reactjs.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [ESLint + Prettier](https://eslint.org)
- [Axios](https://axios-http.com)

---

## Estrutura do projeto

```bash
src/
├── components/    # Componentes reutilizáveis
├── context/       # Contexto de autenticação
├── pages/         # Páginas da aplicação
├── styles/        # Estilos globais
├── App.jsx        # Rotas principais
└── main.jsx       # Ponto de entrada
```

---

### Como rodar o projeto

```bash
git clone https://github.com/ThiagoTJ/taskflow
cd taskflow
npm install
npm run dev
```

## Etapas
### Etapa 1 - Setup Inicial

* Projeto criado com **Vite** + **React**
* Estilização com **TailwindCSS**
* Configuração de **ESLint** e **Prettier**
* **React Router** com rotas básicas

### Etapa 2 - Autenticação Simulada

* Criado **AuthContext** com métodos **login()** e **logout()**
* Página de login funcional com formulário controlado
* Navegação automática após login bem-sucedido
* Estilização responsiva com Tailwind

### Etapa 3 - Rotas privadas protegidas por autenticação

* Criado o componente de rota **PrivateRoute** que protege páginas de acesso restrito
* O componente verifica se o usuário está logado por meio do **isAuthenticated** do **AuthContext**
* Caso o usuário *não esteja autenticado*, é redirecionado automaticamente para a página de login **(/login)**
* A rota principal **(/)** foi protegida com o **PrivateRoute**
* Refatorado o AuthContext para incluir **isAuthenticated** de forma derivada com base no estado **user**

**Objetivo: Garantir que apenas usuários logados acessem área privadas da aplicação**

## Para testar:

```bash
Email: admin@taskflow.com
Senha: 123456
```

## Etapas seguintes
* Etapa 4 - Dashboard com tarefas e CRUD local