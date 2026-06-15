

let vendedor = prompt("Digite seu nome");
let salario = parseFloat(prompt("Digite o seu salário"));
let vendas = parseFloat(prompt("Digite o valor das vendas"));

function CalcularComissao(vendas) {
    let comissao;
    if (vendas > 5000) {
        comissao = vendas * 0.15;
    } else if (vendas >= 1500 && vendas <= 3000) {
        comissao = vendas * 0.10;
    } else {
        comissao = vendas * 0.05;
    }
    return comissao;
}

let comissao = CalcularComissao(vendas);
let pagamentoTotal = salario + comissao;

alert(`Vendedor: ${vendedor} \nValor das Vendas: R$ ${vendas.toFixed(2)}\nValor da Comissão: R$ ${comissao.toFixed(2)}\nValor do Salário: R$ ${salario.toFixed(2)}\nPagamento Total: R$ ${pagamentoTotal.toFixed(2)}`);
