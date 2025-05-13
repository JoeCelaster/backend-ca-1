const express = require('express')
const port = 3000
const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).send("hello welcome")
})

app.post('/user', (req,res)=>{
    const {username,email, password,dob} = req.body

    if (!username || username.trim() == ""){
        res.status(400).send("Username cannot be empty!")
    }

    if (!email || email.trim() == ""){
        res.status(400).send("Email cannot be empty!")
    }

    if (password<8 || password > 16){
        res.status(400).send("Password length should be greater than 8 or less than or equal to 16")
    }

    res.status(201).send("User successfully created!")
})

app.listen(port, ()=>{
    console.log('Server running on http://localhost:3000')
})