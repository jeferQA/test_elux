/// <reference types="Cypress"/>
import PdpPage from '../pageobjects/PdpPage';
const pdpPage = new PdpPage; 

Given("que eu acesso a PDP", () =>{
    cy.viewport(1366,768);
    pdpPage.acessaPaginaDeProduto();
});

When("eu consultar por um cep válido", () =>{
    pdpPage.consultaCep('valido', '84016330');
});

When("eu cosnultar por um cep inválido", () => {
    pdpPage.consultaCep('invalido', '123');
});

Then("a pagina deve mostrar os valores possíveis de frete", () =>{
    pdpPage.verificaFrete();
});

Then("a página deve alertar que o cep é inválido", () => {
    pdpPage.verificaAlertaCepInvalido();
});

