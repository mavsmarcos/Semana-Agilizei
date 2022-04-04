/// <reference types="cypress" />

context('Listagem', () => {
    it('Listagem sem registros', () => {
        cy.server();
        cy.route({
            method: 'POST',
            url:'**/index.php**',
            status: 200,
            response: []
        }).as('postIndex')
    
        cy.visit('http://automationpractice.com/index.php?controller=my-account');
        
    });
    it('Listagem com apenas um registro', () => {
        cy.visit('http://automationpractice.com/index.php?controller=my-account');
        
    });
});