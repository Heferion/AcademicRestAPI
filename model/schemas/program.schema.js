/** Packages */

const mongoose= require("mongoose");

const Schema= mongoose.Schema;

/** Schema creation */
const programSchema = new Schema({
    code:{
        type:"String",
        require: true
    },
    name:{
        type:"String",
        require: true
    },

    directorname:{
        type:"String",
        require: true
    },

    faculty_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"coll_faculty",
        require: true
    }
    
});

/** schema exportation */
module.exports = programSchema;