describe('Deve impedir o login com ambos os campos vazios. - LGN-004', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })
  it('O formulário não deve ser submetido, com a validação focada no primeiro campo vazio.', () => {
    cy.get('[data-testid="entrar"]').click();
    cy.get('.alert').should('exist');
  })
})