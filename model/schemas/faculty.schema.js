/** Packages */

const mongoose= require("mongoose");

const Schema= mongoose.Schema;

/** Schema creation */
const facultySchema = new Schema({
    code:{
        type:"String",
        require: true
    },
    name:{
        type:"String",
        require: true
    },

    deanname:{
        type:"String",
        require: true
    }
    
});

/** schema exportation */
module.exports = facultySchema;