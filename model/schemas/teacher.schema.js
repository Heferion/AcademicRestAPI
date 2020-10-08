/** Packages */

const mongoose= require("mongoose");
const validator= require("mongoose-unique-validator");

const Schema= mongoose.Schema;

/** Schema creation */
const teacherSchema = new Schema({
    document:{
        type:"String",
        require: true,
        unique: true
    },
    name:{
        type:"String",
        require: true
    },
    lastname:{
        type:"String",
        require: true
    },
    email:{
        type:"String",
        require: true,
        unique: true
    },
    phone:{
        type:"String",
        require: true
    },
    office:{
        type:"String",
        require: true
    },
    department:{
        type:"String",
        require: true
    }

    
});

/** schema exportation */
teacherSchema.plugin(validator);
module.exports = teacherSchema;