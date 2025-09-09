No trecho 

let amigos = [];

Fiz a criação de uma variavel vazia, em modo lista "[]" Para poder armazenar os nomes digitados. 

                                         ///////////////////////

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

Esta parte, fiz a criação de uma função onde a mesma estaria responsavel em pegar os nomes digitados no campoID amigo, não permitir espaços no campo com "value.trim".
Usando o amigos.push para puxar o valor digitado para a variavel criada para a lista. 

function atualizarLista(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li"); 
    item.textContent = amigos[i];           
    lista.appendChild(item); 
    }
}

Na função a cima, ela foi criada para atualizar a lista e também criar indice por item da lista, usando o conteudo da variavel amigos para cada indice. 

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

E por fim, a função responsavel por sortear e mostrar no front, o amigo sorteado. Usando Math.floor para arrendodar o numero gerado para cima e Math.random para gerar um numero aleatorio conforme o indice da lista amigos. 

O console.log, utilizei para visualizar o historico de sorteios no console do navegador. 
