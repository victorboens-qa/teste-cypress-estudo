describe('eve logar com sucesso e redirecionar para a Dashboard. - LGN-001', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })
  it('O usuário é redirecionado para a rota /home (Dashboard).', () => {
    cy.get('[data-testid="email"]').type('johndoe@example.com');
    cy.get('[data-testid="senha"]').type('Senha123');
    cy.get('[data-testid="entrar"]').click();
  })
})