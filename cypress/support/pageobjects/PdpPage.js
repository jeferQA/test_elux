class PdpPage{

    acessaPaginaDeProduto(){
        cy.visit("https://loja.electrolux.com.br/conjunto-de-potes-hermeticos-de-plastico-10-unidades-electrolux/p"); 
    };

    consultaCep(tipo, codigo){
        switch (tipo) {
            case 'valido':
                cy.get('[placeholder="Insira o seu CEP"]').type(codigo);
                break;
            
            case 'invalido':
                cy.get('[placeholder="Insira o seu CEP"]').type(codigo);
            default:
                break;
        }
        cy.get('.custom-shipping > button').click();

    }

    compraProduto(){
        cy.get('.product__main-info__price-wrap__buy', {timeout: 20000}).click();
    }

    verificaFrete(){
        cy.get('.product-shipping-table').should('be.visible');
    }

    verificaAlertaCepInvalido(){
        cy.get('body > div.swal-overlay.swal-overlay--show-modal > div > div.swal-text').should('contain','Insira um CEP válido');
    }
    

}

export default PdpPage;