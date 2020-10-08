/** Packages */

const mongoose= require("mongoose");
const validator= require("mongoose-unique-validator");

const Schema= mongoose.Schema;

/** Schema creation */
const studentSchema = new Schema({
    code:{
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
    careear:{
        type:"String",
        require: true
    }

    
});

/** schema exportation */
studentSchema.plugin(validator);
module.exports = studentSchema;