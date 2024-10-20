
let todoList = [
  {
    item : 'do exercise',
    dueDate : '1/1/2024'
  },
  {
    item : 'learning new things',
    dueDate :'1/1/2024'
  }
];

displayItem();

function addTodo(){
  let inputElement = document.querySelector('#input'); 
  let dateElement = document.querySelector('#date-input'); 
  let todoItem = inputElement.value;
  let dateItem =  dateElement.value;
  todoList.push({item: todoItem, dueDate: dateItem});
  inputElement.value = '';
  dateElement.value = '';

  displayItem();
}

function displayItem(){
   let element = document.querySelector('.todo-container');

   let newHtml = '';

   for (let i = 0; i < todoList.length; i++)
   {
    let {item,dueDate} = todoList[i];
    newHtml += `
       <span>${item}</span>
       <span>${dueDate}</span>
       <button class="delete-btn" onclick="todoList.splice(${i},1); displayItem();">Delete</button>
    `;
   }
   element.innerHTML  = newHtml;
}