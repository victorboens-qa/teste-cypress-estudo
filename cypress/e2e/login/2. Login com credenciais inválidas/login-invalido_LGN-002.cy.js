describe('Deve falhar o login com email válido e senha incorreta. - LGN-002', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })
  it('Exibir a mensagem de erro: "Email e/ou senha inválidos".', () => {
    cy.get('[data-testid="email"]').type('johndoe@example.com');
    cy.get('[data-testid="senha"]').type('Senha124');
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('exist');
  })
})