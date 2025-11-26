describe('Deve garantir que todos os elementos da tela estão visíveis. - LGN-006', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })
  it('O título "Login", os campos "Email" e "Senha", o botão "Entrar" e o link "Cadastrar" devem estar visíveis.', () => {
    cy.contains('Login');
    cy.get('[data-testid="email"]').should('be.visible');
    cy.get('[data-testid="senha"]').should('be.visible');
    cy.get('[data-testid="entrar"]').should('be.visible');
    cy.contains('Não é cadastrado?');
    cy.get('[data-testid="cadastrar"]').should('be.visible');
  })
})