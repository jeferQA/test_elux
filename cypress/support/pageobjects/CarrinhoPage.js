import PdpPage from "./PdpPage";
const pdpPage = new PdpPage();

class CarrinhoPage{
    aguardaCarregamento(ms){
        cy.wait(ms)
    }

    adicionaProdNoCarrinho(){
        pdpPage.acessaPaginaDeProduto();
        pdpPage.compraProduto();
    }

    removeProdCarrinho(){
        cy.get('.item-link-remove').click();
    }

    verificaProdCarrinho(qtde){
        if(qtde == 0){
            cy.get('.empty-cart-title').should('be.visible');
         }else if(qtde >= 1)
            cy.get('.product-item').should('be.visible');
    }


}

export default CarrinhoPage;