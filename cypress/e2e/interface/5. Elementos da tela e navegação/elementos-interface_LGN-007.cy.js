describe('Deve garantir que o link "Cadastrar" redireciona corretamente. - LGN-006', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })
  it('O usuário é redirecionado para a rota /cadastrarusuarios.', () => {
    cy.get('[data-testid="cadastrar"]').click();
  })
})