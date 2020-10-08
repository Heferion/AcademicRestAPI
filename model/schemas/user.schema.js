/** Packages */

const mongoose= require("mongoose");
const validator= require("mongoose-unique-validator");

const Schema= mongoose.Schema;

/** Schema creation */
const userSchema = new Schema({
    name:{
        type:"String",
        require: true
    },
    lastname:{
        type:"String",
        require: true
    },
    username:{
        type:"String",
        require: true,
        unique: true
    },
    password:{
        type:"String",
        require: true
    },
    role:{
        type:"Number",
        require: true
    }

    
});

/** schema exportation */
userSchema.plugin(validator);
module.exports = userSchema;