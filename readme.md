# **🧪 Roteiro de testes - ServeRest Login**
Este documento descreve o plano de testes para a tela de Login do ServeRest, detalhando os cenários e casos de teste a serem automatizados com Cypress.

## **🎯 Objetivo**
Garantir que a funcionalidade de login esteja operando corretamente, permitindo que usuários cadastrados acessem o sistema e bloqueando acessos inválidos.

## **🛠️ Pré-requisitos**
URL Base: https://front.serverest.dev/login
- Tecnologia: Cypress
- Dados de Teste:
- Usuário Válido: Deve existir um usuário cadastrado e ativo. (Ex: cypress@teste.com / senha123)
- Usuário Inválido: Credenciais que não existem no sistema.
- Senha Incorreta: Senha errada para um email válido.

---

## **📝 Casos de teste (Test cases)**
Os casos de teste serão agrupados por funcionalidade (Suites) para organização no Cypress.

### **1. Login com credenciais válidas (Happy Path)**

**ID: LGN-001**
Descrição: Deve logar com sucesso e redirecionar para a Dashboard.
**Ações (Steps):**
    Acessar a página de Login.
    Preencher o campo Email com um email válido.
    Preencher o campo Senha com a senha correta.
    Clicar no botão "Entrar".

- Resultado Esperado: O usuário é redirecionado para a rota /home (Dashboard).

### **2. Login com credenciais inválidas**

**ID: LGN-002**
Descrição: Deve falhar o login com email válido e senha incorreta.
**Ações (Steps):**
    Acessar a página de Login.
    Preencher o campo Email com um email válido.
    Preencher o campo Senha com uma senha incorreta.
    Clicar no botão "Entrar".
- Resultado Esperado: Exibir a mensagem de erro: "Email e/ou senha inválidos".


**ID: LGN-003**
Descrição: Deve falhar o login com email inexistente.
**Ações (Steps):**
    Acessar a página de Login.
    Preencher o campo Email com um email não cadastrado.
    Preencher o campo Senha com qualquer senha.
    Clicar no botão "Entrar".
- Resultado Esperado: Exibir a mensagem de erro: "Email e/ou senha inválidos".

### **3. Validações de Campos Obrigatórios (Empty Fields)**

**ID: LGN-004**
Descrição: Deve impedir o login com ambos os campos vazios.
    **Ações (Steps):**
    Acessar a página de Login.
    Deixar ambos os campos vazios.
    Tentar clicar no botão "Entrar".
- Resultado Esperado: O formulário não deve ser submetido, com a validação focada no primeiro campo vazio.

## **4. Validação de Formato (Email Format)**

**ID: LGN-005**
Descrição: Deve impedir o login com um formato de email inválido (ex: sem o caractere @).
    **Ações (Steps):**
    Acessar a página de Login.
    Preencher o campo Email com um valor que não seja um email válido (ex: testeexemplo.com).
    Preencher o campo Senha.
    Tentar clicar no botão "Entrar".
- Resultado Esperado: Exibir erro de validação de formato de email (Validação HTML5 ou customizada). O formulário não é submetido.

## **5. Elementos da tela e navegação**
    
**ID: LGN-006**
    Descrição: Deve garantir que todos os elementos da tela estão visíveis.
    **Ações (Steps):**
    Acessar a página de Login.
- Resultado Esperado: O título "Login", os campos "Email" e "Senha", o botão "Entrar" e o link "Cadastrar" devem estar visíveis.

**ID: LGN-007**
    Descrição: Deve garantir que o link "Cadastrar" redireciona corretamente.
    **Ações (Steps):**
    Acessar a página de Login.
    Clicar no link "Cadastrar".
- Resultado Esperado: O usuário é redirecionado para a rota /cadastrarusuarios.
