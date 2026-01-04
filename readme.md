# Roteiro de Testes – ServeRest Login

Este documento descreve o plano de testes para a tela de **Login** do ServeRest, detalhando os cenários e casos de teste a serem automatizados com **Cypress**.

---

## Objetivo

Garantir que a funcionalidade de login esteja operando corretamente, permitindo que usuários cadastrados acessem o sistema e bloqueando acessos inválidos.

---

## Pré-requisitos

- **URL Base:** https://front.serverest.dev/login  
- **Tecnologia:** Cypress  
- **Dados de Teste:**
  - **Usuário Válido:** Deve existir um usuário cadastrado e ativo.  
    Exemplo: `cypress@teste.com` / `senha123`
  - **Usuário Inválido:** Credenciais que não existem no sistema.
  - **Senha Incorreta:** Senha errada para um e‑mail válido.

---

## Casos de Teste (Test Cases)

Os casos de teste serão agrupados por funcionalidade (**Suites**) para organização no Cypress.

---

### 1. Login com credenciais válidas (Happy Path)

**ID:** `LGN-001`  
**Descrição:** Deve logar com sucesso e redirecionar para a Dashboard.

**Ações (Steps):**
1. Acessar a página de Login.
2. Preencher o campo **Email** com um e‑mail válido.
3. Preencher o campo **Senha** com a senha correta.
4. Clicar no botão **“Entrar”**.

**Resultado Esperado:**  
O usuário é redirecionado para a rota `/home` (Dashboard).

---

### 2. Login com credenciais inválidas

#### 2.1 Senha incorreta

**ID:** `LGN-002`  
**Descrição:** Deve falhar o login com e‑mail válido e senha incorreta.

**Ações (Steps):**
1. Acessar a página de Login.
2. Preencher o campo **Email** com um e‑mail válido.
3. Preencher o campo **Senha** com uma senha incorreta.
4. Clicar no botão **“Entrar”**.

**Resultado Esperado:**  
Exibir a mensagem de erro: **“Email e/ou senha inválidos”**.

#### 2.2 E‑mail inexistente

**ID:** `LGN-003`  
**Descrição:** Deve falhar o login com e‑mail inexistente.

**Ações (Steps):**
1. Acessar a página de Login.
2. Preencher o campo **Email** com um e‑mail não cadastrado.
3. Preencher o campo **Senha** com qualquer senha.
4. Clicar no botão **“Entrar”**.

**Resultado Esperado:**  
Exibir a mensagem de erro: **“Email e/ou senha inválidos”**.

---

### 3. Validações de Campos Obrigatórios (Empty Fields)

**ID:** `LGN-004`  
**Descrição:** Deve impedir o login com ambos os campos vazios.

**Ações (Steps):**
1. Acessar a página de Login.
2. Deixar ambos os campos **Email** e **Senha** vazios.
3. Tentar clicar no botão **“Entrar”**.

**Resultado Esperado:**  
O formulário não deve ser submetido, com a validação focada no primeiro campo vazio.

---

### 4. Validação de Formato (Email Format)

**ID:** `LGN-005`  
**Descrição:** Deve impedir o login com um formato de e‑mail inválido (ex.: sem o caractere `@`).

**Ações (Steps):**
1. Acessar a página de Login.
2. Preencher o campo **Email** com um valor que não seja um e‑mail válido (ex.: `testeexemplo.com`).
3. Preencher o campo **Senha** com qualquer valor.
4. Tentar clicar no botão **“Entrar”**.

**Resultado Esperado:**  
Exibir erro de validação de formato de e‑mail (validação HTML5 ou customizada).  
O formulário não é submetido.

---

### 5. Elementos da tela e navegação

#### 5.1 Elementos visíveis

**ID:** `LGN-006`  
**Descrição:** Deve garantir que todos os elementos da tela estão visíveis.

**Ações (Steps):**
1. Acessar a página de Login.

**Resultado Esperado:**  
Os seguintes elementos devem estar visíveis:

- Título **“Login”**
- Campo **“Email”**
- Campo **“Senha”**
- Botão **“Entrar”**
- Link **“Cadastrar”**

#### 5.2 Navegação para cadastro

**ID:** `LGN-007`  
**Descrição:** Deve garantir que o link **“Cadastrar”** redireciona corretamente.

**Ações (Steps):**
1. Acessar a página de Login.
2. Clicar no link **“Cadastrar”**.

**Resultado Esperado:**  
O usuário é redirecionado para a rota `/cadastrarusuarios`.

---
