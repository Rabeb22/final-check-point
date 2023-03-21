const express = require("express")
var app = express()
const connect=require('./config/connectDB')
const User = require('./models/User')

// cette importation fait reconnaissance au fichier .env pour utiliser l'expression "process.env"
require('dotenv').config({ path: './config/.env' })
app.use(express.json())

// Etablir la connexion avec la base de données
connect();

// Les méthodes de CRUD

// Méthode create ou add users

app.post("/add",async (req,res)=>{
  const  {fullName,email,phone,image}=req.body
    try {
        const newUser= new User({
            fullName,
            email,
            phone,
            image
        })
       await newUser.save() 
       res.send(newUser)
    } catch (error) {
        console.log(error)
    }

})

// Méthode read ou get:afficher les utilisateurs

app.get("/get",async (req,res)=>{
    try {
        const users=await User.find();
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})


app.get("/get/:id",async (req,res)=>{
    try {
        const Suser=await User.findById(req.params.id);
        res.send(Suser)
    } catch (error) {
        console.log(error)
    }
})

// Modifier un utilisateur:Put
app.put("/update/:id",async(req,res)=>{
    
    try {
        
        const editedUser=await User.findByIdAndUpdate(req.params.id, {

        ...req.body}, {new:true})
        res.send(editedUser)
    } catch (error) {
      console.log(error)  
    }
})

// Supprimer un utilisateur
app.delete("/delete/:id",async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send("Utilisateur supprimé correctement")
    } catch (error) {
        console.log(error)
    }
})


var PORT=process.env.PORT || 6000

app.listen(PORT,(err)=>err?console.log(err):console.log(`Server is running on port ${PORT}`))


     

