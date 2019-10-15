const button = document.getElementById('queryButton')
button.addEventListener('click', ()=> {
  
  const input = document.getElementById('emailValue').value 
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var found = input.match(regex)
  
  console.log(found)
})

const textAreaArray= []
const xmlArray= []

function handleChange(e){
  console.log(e.target.value) 
} 

