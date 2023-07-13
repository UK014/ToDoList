document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-button');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  addButton.addEventListener('click', function() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
      const todoItem = createTodoItem(todoText);
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  });

  function createTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const todoText = document.createElement('span');
    todoText.className = 'todo-item-text';
    todoText.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.addEventListener('click', function() {
      todoItem.remove();
    });

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);

    return todoItem;
  }
});
