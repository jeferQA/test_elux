
#language: pt
Funcionalidade: Página de produto

Cenario: Consultar um cep válido na PDP
   Dado que eu acesso a PDP
   Quando eu consultar por um cep válido
   Então a pagina deve mostrar os valores possíveis de frete

Cenario: Consultar um cep inválido na PDP
   Dado que eu acesso a PDP
   Quando eu cosnultar por um cep inválido
   Então a página deve alertar que o cep é inválido

