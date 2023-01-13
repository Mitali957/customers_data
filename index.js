const express = require('express')
const app = express()
app.use(express.json())
const customers =
    [
        {
            "firstName": "John",
            "age": 27
        },
        {
            "firstName": "James",
            "age": 32
        },
        {
            "firstName": "Robert",
            "age": 45
        }
    ]

app.get('/', (req, resp) => {
    resp.send('Name and Age of the customers')

})
app.get('/api/customers/:id', (req, resp) => {
    const result= customers.find(item => {
        return item.firstName == req.params.id
     })

     if(result){
    console.log(result)
    resp.send(result)
     }

     else{
        console.log("user not found")
        resp.send("user not found")
     }
})

app.listen(8080)
 