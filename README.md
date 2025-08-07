# 🧩 Login Page – Angular

Este é o frontend de uma aplicação de login/cadastro utilizando **Angular**, e integração com uma API backend feita em Spring Boot.

---

## ⚙️ Tecnologias Utilizadas

- Angular 17+
- TypeScript
- Reactive Forms
- RxJS
- ngx-toastr
- HTML/CSS (SCSS)
- JWT (com armazenamento em sessionStorage)

---

## 🧠 Funcionalidades

- Tela de cadastro de novos usuários
- Tela de login com validação
- Campos reutilizáveis via componentes
- Validador customizado de confirmação de senha
- Toasts de sucesso e erro com `ngx-toastr`
- Redirecionamento com `Router`
- Proteção de rotas com `AuthGuard`

---

## 🔑 Como funciona a autenticação

- O usuário se cadastra ou faz login
- O token JWT e o nome do usuário são salvos no `sessionStorage`
- A rota `/user` só pode ser acessada se o token estiver presente
- O `AuthGuard` intercepta e bloqueia o acesso se o usuário não estiver autenticado

---

## 🧠 Validações do Formulário

Validações aplicadas:

- `required` para todos os campos
- `minLength` para nome e senha
- `email` formatado corretamente
- `passwordMatchValidator` customizado para garantir que as senhas sejam iguais

---

## 🧪 Como rodar o projeto localmente

### 1. Clonar o projeto

```bash
git clone https://github.com/PedroRSilveira/app-login-angular.git
cd app-login-angular
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar o projeto

```bash
ng serve
```

Acesse: [http://localhost:4200/signup](http://localhost:4200/signup)

---

## 📡 Integração com Backend

Este frontend consome os endpoints da API backend em Spring Boot:

👉 [Backend do Projeto - Spring Boot](https://github.com/PedroRSilveira/app-login-springboot)

Endpoints utilizados:

- `POST /auth/register`
- `POST /auth/login`

---

### 🖼️ Demonstração

Abaixo, exemplos da aplicação em execução:

![Página de login](https://i.imgur.com/U6uOZjH.png)
![Tela de cadastro](https://i.imgur.com/7SvfDt5.png)

---

## 📝 Licença

Distribuído sob a licença MIT. Consulte `LICENSE` para mais informações.
