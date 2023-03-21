const mongoose=require("mongoose")

// Create a function to connect db
const connect= async ()=>{
    try {
        await mongoose.connect(process.env.db)
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=connect