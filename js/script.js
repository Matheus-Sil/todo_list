const input = document.querySelector('#input-todo');
const cancelEdit = document.querySelector('.cancel-edit-btn');
const containerEditTodo = document.querySelector('.edit-input-text');
const containerInputAdd = document.querySelector('.box-input-search');
const editInput = document.querySelector('#input-edit-todo');
const containerTarefa = document.querySelector('.container-tarefa-todo');

let oldInput;

const addTarefa = () =>{

    const valueInput = input.value


    const divClone = document.createElement('div');
    divClone.classList.add('tarefa-todo');

    const titleTarefa = document.createElement('h3');
    titleTarefa.innerHTML = valueInput;
    if(valueInput.length > 30){
        titleTarefa.innerHTML = valueInput.substring(0, 26) + "...";
    }

    const divIcons = document.createElement('div');
    divIcons.classList.add('icons');

    buttonCheck = document.createElement('button');
    buttonCheck.classList.add('check-todo');
    buttonCheck.innerHTML = '<i class="fa-solid fa-check"></i>';

    buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit-todo');
    buttonEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

    buttonRemove = document.createElement('button');
    buttonRemove.classList.add('remove-todo');
    buttonRemove.innerHTML = '<i class="fa-solid fa-trash"></i>';

    divIcons.append(buttonCheck, buttonEdit, buttonRemove)

    divClone.append(titleTarefa, divIcons);

    document.querySelector('.container-tarefa-todo').append(divClone);

    input.value = "";
    input.focus();
}


const editTodo = (text) =>{

    const todos = document.querySelectorAll('.tarefa-todo');

    todos.forEach(todo => {
        
        if(todo.textContent === oldInput) {
            todo.querySelector("h3").textContent = text
        }

    });

    toogleForms();

}




const toogleForms = () =>{

    containerTarefa.classList.toggle("hide");
    containerEditTodo.classList.toggle("hide")
    containerInputAdd.classList.toggle("hide")
}


document.addEventListener('click', (e) =>{
    const targetEl = e.target;
    const parenteEl = targetEl.closest('div');

    let inputTitle;

    if(parenteEl.parentNode && parenteEl.parentNode.querySelector("h3")) {
        inputTitle = parenteEl.parentNode.querySelector("h3").innerText;
    }
    
    if(targetEl.classList.contains("remove-todo")) {
        parenteEl.parentNode.style.display = 'none';
    }

    if(targetEl.classList.contains("check-todo")) {
        parenteEl.parentNode.classList.toggle('done');
    }

    if(targetEl.classList.contains("edit-todo")) {
        toogleForms();

        editInput.value = inputTitle
        oldInput = inputTitle

        editInput.focus()
    }

})

document.querySelector('#btn-input').addEventListener('click', (e) =>{
    e.preventDefault();

    if(input.value) {
        addTarefa();
    }
})

document.addEventListener('keypress', (e) =>{


    if(input.value && e.key === 'Enter') {
        addTarefa();
    }
});


cancelEdit.addEventListener('click', (e) =>{
    e.preventDefault();

    toogleForms();
})

document.querySelector('#btn-edit-input').addEventListener('click', (e) =>{
    e.preventDefault()

    const valueInput = document.querySelector('#input-edit-todo');

    editTodo(valueInput.value);
})
