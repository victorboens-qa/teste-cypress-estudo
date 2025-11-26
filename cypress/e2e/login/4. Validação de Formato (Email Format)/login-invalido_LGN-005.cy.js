describe('Deve impedir o login com um formato de email inválido (ex: sem o caractere @) - LGN-005', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })
  it('Exibir erro de validação de formato de email (Validação HTML5 ou customizada). O formulário não é submetido.', () => {
    cy.get('[data-testid="email"]').type('johndoeexamplo.com');
    cy.get('[data-testid="senha"]').type('Senha123');
    cy.get('[data-testid="entrar"]').click({force:true});
    cy.get('[data-testid="email"]').then(($input) => {
      expect($input[0].checkValidity()).to.be.false
      const validationMessage = $input[0].validationMessage
      expect(validationMessage).to.include('Inclua um "@" no endereço de e-mail.');
  })
  })
})
