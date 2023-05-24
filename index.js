document.addEventListener("DOMContentLoaded", () => {

})

//Objectives

//user should be able to enter subit and view tasks
//submit to enter, add, view

const form = document.querySelector('#create-task-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const newTask = event.target["new-task-description"].value
  const list = document.querySelector('#tasks')
  const newList = document.createElement('li')
  newList.textContent = newTask
  list.appendChild(newList)
  const button = document.createElement('button')
    newList.appendChild(button)
    button.addEventListener("click", ()=>{
      list.removeChild(newList,button)
      })
})  
