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
* **React Router** com rotas básocas

### Etapa 2 - Autenticação Simulada

* Criado **AuthContext** com métodos **login()** e **logout()**
* Página de login funcional com formulário controlado
* Navegação automática após login bem-sucedido
* Estilização responsiva com Tailwind

## Para testar:

```bash
Email: admin@taskflow.com
Senha: 123456
```

## Etapas seguintes
* Etapa 3 - Rotas privadas protegidas por autenticação