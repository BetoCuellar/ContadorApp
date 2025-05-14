/// <reference types="cypress" />

describe('Pruebas para el contador de React', () => {
  beforeEach(() => {
   
    cy.visit('http://localhost:3000'); 
  });

  it('El contador debe iniciar en 0', () => {
    
    cy.contains('Contador: 0').should('be.visible');

    cy.wait(1250);
  });

  it('El contador debe incrementar en 1', () => {
    
    cy.get('button').contains('Incrementar').click();
    
    
    cy.wait(800);

    
    cy.contains('Contador: 1').should('be.visible');

    cy.wait(1250);
  });

  it('El contador debe decrementar en 1', () => {
    
    cy.get('button').contains('Incrementar').click();
    
    
    cy.wait(800);
    
    
    cy.get('button').contains('Decrementar').click();
    
    
    cy.wait(800);
    
    
    cy.contains('Contador: 0').should('be.visible');

    cy.wait(1250);
  });

  it('El contador debe resetear a 0', () => {
    
    cy.get('button').contains('Incrementar').click();

    cy.wait(1250);
    
   
    cy.contains('Contador: 1').should('be.visible');

    cy.wait(1250);
    
    
    cy.get('button').contains('Resetear').click();
    
    
    cy.wait(800);

    
    cy.contains('Contador: 0').should('be.visible');

    cy.wait(1250);
  });

  it('El contador debe incrementar y decrementar correctamente con valor personalizado', () => {
    
    cy.get('input').type('5');
    
   
    cy.wait(800);

    cy.get('button').contains('Incrementar').click();
    cy.contains('Contador: 5').should('be.visible');
    
    cy.wait(800);
    
    cy.get('button').contains('Decrementar').click();
    cy.contains('Contador: 0').should('be.visible');

    cy.wait(1250);
  });
});
