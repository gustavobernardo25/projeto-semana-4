var produtos = JSON.parse(localStorage.getItem('produtos'))

if (produtos == null) {
    produtos = []
}

var tabela = document.getElementById('tabela')


for (let i = 0; i < produtos.length; i++) {
    var produtos = produtos[i]
    var name = produtos['name']
    var equip = produtos['equip']
    var numserie = produtos['numserie']
    var carac = produtos['carac']

    var th = tabela.insertRow(1)
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3)]
    td[0].innerHTML = name
    td[2].innerHTML = equip
    td[1].innerHTML = numserie
    td[3].innerHTML = carac
}
