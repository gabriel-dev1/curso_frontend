/// <reference types="cypress" />

describe('Testes das funcionaidades da agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve inserir um contato', () => {
        cy.get('input[type="text"]').type('teste')
        cy.get('input[type="email"]').type('teste@teste.com')
        cy.get('input[type="tel"]').type('12345678')
        cy.get('.adicionar').click()
    })

    it('Deve editar o contato', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear().type('Gian')
        cy.get('input[type="email"]').clear().type('gian@teste.com')
        cy.get('input[type="tel"]').clear().type('11134567890')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        setTimeout(() => {
            cy.get('.delete').last().click()
        }, 5000)
    })
})