describe('Login inválido por email inexistente - LGN-003', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })
  it('Exibir a mensagem de erro: "Email e/ou senha inválidos".', () => {
    cy.get('[data-testid="email"]').type('johndoe@examplo.com');
    cy.get('[data-testid="senha"]').type('Senha123');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('exist');
  })
})