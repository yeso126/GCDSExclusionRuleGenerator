const button = document.getElementById('queryButton')

button.addEventListener('click', () => {
	const txtAreaInput = document.getElementById('emailValue').value
	const regex = new RegExp(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/g)
	const foundEmails = txtAreaInput.match(regex)
  console.log(foundEmails)
  // TODO
  // Map array to execute function to follow a template string and push each template into a new array, finally display the array as a value for the outputbox.
})
