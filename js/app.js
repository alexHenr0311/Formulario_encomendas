const lista_encomenda = []
let btn = document.getElementById('adicionar')
let conteudo = document.getElementById('conteudo')

function adicionar()
{
    let nome_cli = document.getElementById('nome').value
    let produto = document.getElementById('produto').value
    let valor = document.getElementById('valor').value
    let prazo = document.getElementById('prazo').value

    const encomenda = {
        list_nome: nome_cli,
        list_produto: produto,
        list_valor: valor,
        list_prazo: prazo
    }

    lista_encomenda.push(encomenda)
    exibir();
}

function exibir()
{
    conteudo.innerHTML = ''
    for(let i = 0; lista_encomenda.length; i++)
    {
        conteudo.innerHTML +=
        `
        <tr>
        <th scope="row">${i+1}</th>
        <td scope="row">${lista_encomenda[i].list_nome}</td>
        <td scope="row">${lista_encomenda[i].list_produto}</td>
        <td scope="row">${lista_encomenda[i].list_valor}</td>
        <td scope="row">${lista_encomenda[i].list_prazo}</td>
        </tr>
        `
        alert('Encomenda registrada!');
    }
}
btn.addEventListener('click', adicionar)