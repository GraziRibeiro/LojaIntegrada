// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --



// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const xpath = require('cypress-xpath')
const url = require('../fixtures/url.json')


Cypress.Commands.add("Produto", () => {

    cy.contains('PRODUTO')
})

Cypress.Commands.add("EscolhaProduto", () => {

    cy.get(':nth-child(1) > .listagem-item > .imagem-produto > .imagem-principal')
})


Cypress.Commands.add("BtnCarrinhodeCompra", () => {

    cy.get(':nth-child(1) > .listagem-item > .acoes-produto > .botao')
})


Cypress.Commands.add("ModalCarrinhodeCompra", () => {

    cy.get('.fancybox-skin')
})


Cypress.Commands.add("Cupons", () => {

    cy.get('input[name="cupom"]')
})


Cypress.Commands.add("BtnCupomDesconto", () => {

    cy.get('.input-append > .btn')
})


Cypress.Commands.add("PaginaCarrinho", () => {

    cy.url()
})

Cypress.Commands.add("AplicadocomSucesso", () => {

    cy.get('.cupom-valor > .cor-secundaria')
})


Cypress.Commands.add("MensagemCupomNãoEncontrado", () => {
    
    cy.get('.alert')

})
