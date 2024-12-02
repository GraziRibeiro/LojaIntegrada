const cupomdesconto = require('../fixtures/cupomdesconto.json')
const url = require('../fixtures/url.json')


describe('Validar aplicação de cupom de desconto válido', () => {
  it('Deve aplicar o cupom "FRETEGRATIS" com sucesso', () => {
  // Acessa a página da loja
  cy.visit(url.Url);

  // Assume que há uma ação para abrir o modal do carrinho de compras
  cy.Produto()
    .click()

  // Escolhe um produto

  cy.EscolhaProduto()
    .click();

  cy.BtnCarrinhodeCompra()
    .click();


  // Verifica se está no modal do carrinho de compras
  cy.ModalCarrinhodeCompra()
    .should('be.visible');

// Aplica o cupom de desconto
cy.Cupons()
  .type(cupomdesconto.cupom.fretegratis); // Localiza o campo de cupom
  cy.screenshot('InserindoCupom')

cy.BtnCupomDesconto()
  .click(); // Clica no botão "Usar Cupom"

// Verifica se o cliente é redirecionado para a página do carrinho
cy.PaginaCarrinho()
  .should('include', '/carrinho'); // Verifica se a URL contém '/carrinho'

// Verifica se o cupom de desconto foi aplicado com sucesso
cy.AplicadocomSucesso()
  .should('be.visible');
  cy.screenshot('FinalSucesso')
})
})

context('Validar cupom vencido', function () { 

    it('Deve aplicar o cupom "FRETEGRATIS" com sucesso', () => {
    // Acessa a página da loja
        cy.visit(url.Url);
  
    // Assume que há uma ação para abrir o modal do carrinho de compras
        cy.Produto()
      .click()
  
    // Escolhe um produto
  
        cy.EscolhaProduto()
      .click();
  
       cy.BtnCarrinhodeCompra()
      .click();
  
  
    // Verifica se está no modal do carrinho de compras
        cy.ModalCarrinhodeCompra()
          .should('be.visible');
  
  // Aplica o cupom de desconto
        cy.Cupons()
          .type(cupomdesconto.cupom.cupomvencido) // Localiza o campo de cupom
          .screenshot('InserindoCupom');
  
        cy.BtnCupomDesconto()
          .click(); // Clica no botão "Usar Cupom"
  
  // Verifica se o cliente é redirecionado para a página do carrinho
        cy.PaginaCarrinho()
         .should('include', '/carrinho'); // Verifica se a URL contém '/carrinho'
  
  // Verifica se o cupom de desconto foi aplicado com sucesso
        cy.MensagemCupomNãoEncontrado()
          .should('be.visible')
          .screenshot('FinalSucesso');

  })

})





