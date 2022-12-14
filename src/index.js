document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form")
  form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoList = document.getElementById("new-task-description")
  createTodo(todoList.value)
  form.reset()
})

function createTodo(todo) {

  let p =document.createElement('li')
  let btn = document.createElement('button')
  let priority = document.querySelector('option')
   
  btn.addEventListener('click',handleDel)
  p.textContent=`${todo} `
  btn.textContent = 'x'
  p.appendChild(btn)
  p.appendChild(priority)
  document.querySelector('#list').appendChild(p)
}
function handleDel(e) {
  e.target.parentNode.remove()
}


});



