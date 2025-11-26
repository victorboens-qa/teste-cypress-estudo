describe('Cadastro', () => {
    it('Deve fazer o cadastro bem sucedido', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type('John Doe')
    cy.get('[data-testid="email"]').type('johndoe@example.com')
    cy.get('[data-testid="password"]').type('Senha123')
    cy.get('[data-testid="entrar"]').click()
  })
})