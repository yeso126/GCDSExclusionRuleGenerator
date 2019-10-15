const csv2json = require('csvtojson');

const csv = `email
email1@test.com
email2@dominio.com
usuario3@dominio.com
johndoe@dominio.com`

const csvArray= []
const xmlArray= []

const json = csv2json()
.fromString(csv)
.then((csvRow)=>{ 
    csvArray.push(csvRow)
    console.log(csvArray[0])
    csvArray[0].map(({email}) => {
        const exclusionRuleTemplate = `
      <exclude>
        <match>ADDRESS</match>
        <type>EXACT</type>
        <filter>${email}</filter>
      </exclude>`
        xmlArray.push(exclusionRuleTemplate)
    })
    xmlArray.map((x)=>console.log(x))
})

