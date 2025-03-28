//import the express modules

const express=require('express')
//create an instance of the express module

const app=express()
//define a port number for the server to listen on

const port=3000
//create a simple route

//middleware to parse

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/login',(req,res)=>{
    res.send('Welcome to login page')
})

app.get('/user/:id',(req,res)=>{
    const userid=req.params.id
    res.send(`User ID: ${userid}`)

})
//key
app.get('/search',(req,res)=>{
const keyword=req.query.keyword;
res.send(`searching for ${keyword}`)
})



app.post('/login',(req,res)=>{
    const {username,password}=req.body
    res.send(`username: ${username} password: ${password}`)
})



//start the sarver and make it listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
