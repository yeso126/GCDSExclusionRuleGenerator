const button = document.getElementById('queryButton')
const output = document.getElementById('outputValue')
button.addEventListener('click', () => {
  const xmlArray = []
  const txtAreaInput = document.getElementById('emailValue').value
  const regex = new RegExp(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/g)
  const foundEmails = txtAreaInput.match(regex)
  foundEmails.map((email) => {
    const exclusionTemplate = `
      <exclude>
       <match>ADDRESS</match>
       <type>EXACT</type>
       <filter>${email}</filter>
      </exclude>
    `
    xmlArray.push(exclusionTemplate)
  })
  const charRemovalRegex = /,/g
  output.value = xmlArray.toString().replace(charRemovalRegex,'')
})
