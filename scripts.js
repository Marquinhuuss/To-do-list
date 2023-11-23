const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value, 
        concluida: false
    })

    input.value = ''

    mostrarTarefas() 
}
function mostrarTarefas() {

    let novaLi = ''

     // ['comprar café', 'estudar programação']

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + 
            `
        <li id="linha-${posicao}" class="task ${item.concluida && "done"}">
        <img src="img/checked.png" alt="check-na-tarefa" onClick="concluirTarefa(${posicao})">
        <p>${item.tarefa}</p>
        <img src="img/trash.png" alt="tarefa-para-o-lixo" onClick="deletarItem(${posicao})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))


}

function concluirTarefa(posicao){
    console.log('chegou')
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida 

    let elemento = document.getElementById(`linha-${posicao}`)
    elemento.classList.add('done')


    console.log(elemento)
        mostrarTarefas()
}

function deletarItem(posicao){
    console.log('chegou aqui');
    minhaListaDeItens.splice(posicao, 1)   
    mostrarTarefas()
    
}



function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    console.log(tarefasDoLocalStorage)

    mostrarTarefas()

}

recarregarTarefas()
button.addEventListener('click', adicionarNovaTarefa)