const todoList = [];

renderToDoList();
function renderToDoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  document.querySelector('.js-name-input')
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
renderToDoList();
}