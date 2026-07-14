# Projeto Node.js com GitHub Copilot e GitHub Actions

![Status](https://github.com/BlueBird288/pedido-ai/actions/workflows/ci.yml/badge.svg)

## Descrição

Projeto desenvolvido utilizando GitHub Copilot para auxiliar na criação de código e GitHub Actions para automação dos testes.

## Funcionalidade

A função calcula o valor final de um pedido.

- Pedidos acima de R$100 recebem 10% de desconto.
- Pedidos abaixo de R$100 permanecem com o valor original.

## Prompt utilizado no GitHub Copilot

"Crie uma função em JavaScript que calcule o valor final de um pedido. Caso o valor seja superior a R$100, aplique automaticamente um desconto de 10%. Caso contrário, retorne o valor original."

## Testes Automatizados

Foram criados testes automatizados utilizando Jest para validar:

- Aplicação correta do desconto.
- Retorno correto para valores sem desconto.

## GitHub Actions

O GitHub Actions executa automaticamente:

1. Instalação das dependências.
2. Execução dos testes.
3. Validação do projeto a cada push.

## Tecnologias Utilizadas

- Node.js
- Jest
- GitHub Copilot
- GitHub Actions
- GitHub
