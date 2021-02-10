function mascaraSerie() {
    var serie = document.getElementById("numserie")
    if (serie.value.length == 3) {
        serie.value += "."
    }
}

function isNumberKey(event) {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        return true;
    } else {
        event.preventDefault();
    }
}

var produtos = JSON.parse(localStorage.getItem('produtos'));
if (produtos == null) {
    produtos = []
}


function salvar() {
    produtos.push({
'numserie' : document.querySelector('#numserie').value,
'name' : document.querySelector('#name').value,
'selec' : document.querySelector('#selec').value,
'carac' : document.querySelector('#carac').value


});
const json_produtos = JSON.stringify(produtos);

localStorage.setItem('produtos', json_produtos);
}