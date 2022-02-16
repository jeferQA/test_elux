const {Before,After} = require("cypress-cucumber-preprocessor/steps");
import CarrinhoPage from "../pageobjects/CarrinhoPage";
import PdpPage from "../pageobjects/PdpPage";
const carrinhoPage = new CarrinhoPage();
const pdpPage = new PdpPage();

Given("que eu acesso a PDP", () => {
    pdpPage.acessaPaginaDeProduto();
});

When("eu comprar o produto", () => {
    pdpPage.compraProduto();
});

Then("o produto deve ser adicionado ao carrinho", () => {
    carrinhoPage.verificaProdCarrinho(1);
});

