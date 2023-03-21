mongoose=require('mongoose') ;
const { Schema } = mongoose;
// const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName:String,
    email:String,
    phone:String,
    image:String
})

module.exports = mongoose.model("User",userSchema)

// User will be converted to a plurial object in database by mongoose:it will be a collection