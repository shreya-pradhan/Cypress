
import LoginPage from '../integration/1-getting-started/PageObjects/LoginPage'

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

Cypress.Commands.add('Login', () => 
{  
    cy.NavigateToApplication();
    cy.get('.navbar-nav').contains('Sign in').click();
    cy.get(':nth-child(1) > .form-control').type(Cypress.env('username'));
    cy.get(':nth-child(2) > .form-control').type(Cypress.env('password'));
    cy.get('.btn').click();
})

Cypress.Commands.add('NavigateToApplication',()=>
{
    
    cy.visit(Cypress.env('url'))
})
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
