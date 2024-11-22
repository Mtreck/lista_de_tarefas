


function adicionarTarefa(){
    const valorDoInput = document.getElementById("input-tarefa").value
    
    const li = document.createElement("li")
    li.innerHTML =` 
    <span class="tarefa">${valorDoInput}</span> 
    <span onclick="deletarTarefa(this)">❌</span>
    <span onclick="editarTarefa(this)">🖊️</span>` 

    document.querySelector("ul").appendChild(li)
    document.getElementById("input-tarefa").value = ""

    console.log(li)

}

function deletarTarefa(li){
    li.parentElement.remove()
}

function editarTarefa(span){
    const li = span.parentElement;
    const tarefaAtual =li.querySelector(".tarefa").textContent;
    const novoTexto = prompt("Edite a tarefa", tarefaAtual)
    if(novoTexto !== null && novoTexto.trim() !== ""){
        li.querySelector(".tarefa").textContent = novoTexto;
    }
   
}