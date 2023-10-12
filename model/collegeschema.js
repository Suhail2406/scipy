const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Colgschema=new Schema(
    {
        CollegeName:{
            type:String,
            required:true,
        },
        Address:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        Phoneno:{
            type:String,
            required:true
        },
    }
);
module.exports=mongoose.model("College",Colgschema);
