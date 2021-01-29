const bookNameField = document.getElementById('title')
const authorField = document.getElementById('author')
const addBookBtn = document.querySelector('input[type=submit]')
const bookList = document.getElementById('book-list')
const clearBookList = document.getElementById('clearButton')


addBookBtn.addEventListener('click', (event)=>{
  event.preventDefault()
  //check if bookName or author field is invalid whitaspace
  if(bookNameField.value.trim()==''||authorField.value.trim()=='') return
  let divOuter = document.createElement('div')
  divOuter.classList.add('row')
  let divInner1 = document.createElement('div')
  divInner1.classList.add('columns', 'nine')
  let divInner2 = document.createElement('div')
  divInner2.classList.add('columns', 'three')
  let button = document.createElement('button')
  button.classList.add('u-full-width', 'bookReadButton')
  button.appendChild(document.createTextNode(
    'Mark as Read'
  ))
  let hr = document.createElement('hr')
  let bookName = capitalizeWords(bookNameField.value)
  let authorName = capitalizeWords(authorField.value)
  divInner1.appendChild(document.createTextNode(`"${bookName}" by ${authorName}`))
  divInner2.appendChild(button)
  divOuter.appendChild(divInner1)
  divOuter.appendChild(divInner2)
  bookList.appendChild(divOuter)
  bookList.appendChild(hr)
  bookNameField.value = ''
  authorField.value = ''
  button.addEventListener('click', function(event){
    strikeThrough(this)
  })
})

clearBookList.addEventListener('click', (event)=>{
  while(bookList.firstChild){
    bookList.removeChild(bookList.firstChild)
  }
})

let booksReadButtons = document.querySelectorAll('.bookReadButton')
for(let button of booksReadButtons){
  button.addEventListener('click', function(event){
    strikeThrough(this)
  })
}

function strikeThrough(button){
  button.parentNode.parentNode.firstElementChild.classList.toggle('changeRead')
  button.innerHTML = button.innerHTML == 'Mark as Read' ? 'Mark as Unread' : 'Mark as Read'
  button.classList.toggle('button-primary')
}

function capitalizeWords(str){
  let words = str.split(' ').filter(word=>word!='')
  for(let i = 0; i < words.length; ++i){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
  return words.join(' ');
}
