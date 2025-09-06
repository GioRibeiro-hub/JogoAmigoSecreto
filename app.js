
let amigos = [];

function adicionarAmigo() {
    let campo = document.getElementById("amigo");
    let nome = campo.value.trim();

    if (nome === ""){

        alert("Por favor, insira um nome.")
        return;
    }

    amigos.push(nome);

    atualizarLista();

    campo.value = "";
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li"); 
    item.textContent = amigos[i];           
    lista.appendChild(item); 
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("A lista esta vazia!");
        return
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    console.log(amigoSorteado)

    document.getElementById("resultado").innerHTML = `O amigo sorteado foi ${amigoSorteado}`
}
