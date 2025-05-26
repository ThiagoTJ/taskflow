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

```
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

## Para testar:

```bash
Email: admin@taskflow.com
Senha: 123456
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

### Etapa 4 - Dashboard com tarefas e CRUD local

* Criar a página **Dashboard.jsx**
* Simular uma lista de tarefas (mock)
* Exibir nome do usuário logado
* Adicionar botão de logout
* Aplicar layout com responsividade usando **TailwindCSS**

```
src/
├── components/
│   └── TaskList.jsx        # Componente de lista de tarefas
├── pages/
│   └── Dashboard.jsx       # Página principal após login
```

### Etapa 5 - Integração com API (mock)

* Adicionar um formulário para criar novas tarefas
* integrar com o **TaskList** para exibir tarefas criadas
* Usar **useState** e **useEffect** para controle local
* Simular um sistema de tarefas por sessão (sem backend)
* Permitir ao usuário marcar/desmarcar tarefas como concluídas
* Aplicar estilo visual diferenciado para tarefas finalizadas
* Manter o estado atualizado sem recarregar a página
* Salvar as tarefas no **localStorage**
* Carregar tarefas salvas ao abrir a aplicação
* Atualizar **localStorage** sempre que as tarefas mudarem

```
src/
├── components/
│   ├── TaskForm.jsx     # Novo: formulário de criação
│   └── TaskList.jsx     # Atualizar para usar props
├── pages/
│   └── Dashboard.jsx    # Gerenciar lista e passar props
```

## Etapa 6 — Testes com Jest e RTL

* Configurar o ambiente de testes com Jest + RTL
* Escrever testes para os principais componentes
  * **TaskForm**
  * **TaskList**
  * **Dashboard** (testes básicos de integração)
* Simular interações do usuário
* Garantir que os principais fluxos estão funcionando corretamente

## Etapas seguintes
* Etapa 7 — 