/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();


// Iniciar o cadastro 
context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {

        // Rotas
        // POST 200 /index.php
        cy.server();
        cy.route('POST', '**/index.php**').as('postIndex');


        // Visitar o site
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation');  
        
        // Preenchendo a página
        cy.get('#email_create').type(chance.email());
        cy.get('#SubmitCreate > span').click();

        // Efetuar o cadastro no site
  cy.get('#customer_firstname').type(chance.first());
  cy.get('#customer_lastname').type(chance.last());
  cy.get('#passwd').type('1234567890');
  cy.get('#days').select('24');
  cy.get('#months').select('March');
  cy.get('#years').select('1988');
  cy.get(':nth-child(1) > :nth-child(8) > label').click();
  cy.get('#address1').type('59s E Sahara Las Vegas');
  cy.get('#address2').type('Centro');
  cy.get('#city').type('Las Vegas');
  cy.get('#id_state').select('Nevada');
  cy.get('#postcode').type('89104');
  cy.get('#phone').type(chance.phone({formatted: false}));
  cy.get('#phone_mobile').type(chance.phone({formatted: false}));
  cy.get('#submitAccount > span').click();
  
  
  //Comandos que interagem com as rotas
  cy.wait('@postIndex').then((resIndex) =>{
      //chai
      expect(resIndex.status).to.eq(200)
  })

  cy.url().should('contain','http://automationpractice.com/index.php?controller=my-account');


    });
});